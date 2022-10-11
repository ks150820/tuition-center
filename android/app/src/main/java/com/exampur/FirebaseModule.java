package com.exampur;

import static android.content.ContentValues.TAG;

import android.content.Context;
import android.telecom.Call;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.ListenerRegistration;
import com.google.firebase.firestore.Query;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Objects;
import java.util.Date;

import org.json.JSONException;
import org.json.JSONObject;

public class FirebaseModule extends ReactContextBaseJavaModule {
    private static FirebaseFirestore db = FirebaseFirestore.getInstance();
    ListenerRegistration eventEmitterAddSnapshotListener = null;
    ReactApplicationContext mContext;
    Double lastMessageTimestamp;
    private boolean initialLoad = true;
    Object lastVisible;

    FirebaseModule(ReactApplicationContext context) {
        super(context);
        mContext = context;
    }

    @ReactMethod
    public void addFirebaseData(ReadableMap data, String video_id, String timeStamp, Callback error) {

        // to getting the server current timestamp
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        String dbName= "live-chatting";
        String dbDoc = "video." + video_id;
        String videoDocName = "chats";

        long messageTimestamp = timestamp.getTime();

        Map<String, Object> user = new HashMap<>();
        user.put("name", data.getString("name"));
        user.put("message", data.getString("message"));
        user.put("userId", data.getString("userId"));
        user.put("timestamp", messageTimestamp);

        db.collection(dbName)
                .document(dbDoc)
                .collection(videoDocName)
                .document(timeStamp)
                .set(user)
                .addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void aVoid) {
                        Log.d(TAG, "DocumentSnapshot successfully written!");
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        error.invoke("Error writing document", e);
                    }
                });
    }
    
    @ReactMethod
    public void startAddChatListener(Callback callback) {
        initialLoad = true;
        if(eventEmitterAddSnapshotListener == null) {
            eventEmitterAddSnapshotListener = db.collection("live-chatting").document("video.adfse112334").collection("chats").orderBy("timestamp", Query.Direction.DESCENDING).limit(1).addSnapshotListener(new EventListener<QuerySnapshot>() {
                @Override
                public void onEvent(@Nullable QuerySnapshot value, @Nullable FirebaseFirestoreException error) {
                    for (QueryDocumentSnapshot doc : value) {
                        if (doc.exists() && !initialLoad) {
                            JSONObject json = new JSONObject(doc.getData());
                            try {
                                json.put("messageId", doc.getId());
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                    .emit("onChatAdded", json.toString());
                        }
                    }
                    if (initialLoad) initialLoad = false;
                }
            });
//            callback.invoke("eventEmitterAddSnapshotListener is null");
            callback.invoke("");
        }else{
            callback.invoke("");
//            callback.invoke("eventEmitterAddSnapshotListener is not null");
        }
    }

    @ReactMethod
    public void removedAddChatListener() {
        eventEmitterAddSnapshotListener.remove();
        eventEmitterAddSnapshotListener = null;
    }

//    @ReactMethod
//    public void removedAddChatListener(Callback callback) {
//        eventEmitterAddSnapshotListener.remove();
//        eventEmitterAddSnapshotListener = null;
//        callback.invoke("Listener removed");
//
//    }

    public void storeLastMessageTimeStamp(ArrayList<Object> response){

        try {
            JSONObject json = new JSONObject(response.get(response.size() - 1).toString());

            lastMessageTimestamp = Double.parseDouble(json.getString("timestamp"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void paginationQuery(Callback callback){
        ArrayList<Object> response = new ArrayList<>();

        db.collection("live-chatting")
                .document("video.adfse112334")
                .collection("chats")
                .whereLessThan("timestamp", lastMessageTimestamp)
                .orderBy("timestamp", Query.Direction.DESCENDING)
//                .startAfter(lastVisible)
                .limit(25)
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            if(task.getResult().size() > 0) {
                                for (QueryDocumentSnapshot document : task.getResult()) {
                                    if (document.exists()) {
                                        Log.d(TAG, document.getId() + " => " + document.getData());
                                        JSONObject json = new JSONObject(document.getData());
                                        try {
                                            json.put("messageId", document.getId());
                                        } catch (JSONException e) {
                                            e.printStackTrace();
                                        }
                                        response.add(json);
                                    }
                                }
                                storeLastMessageTimeStamp(response);
                                callback.invoke(response + "");
                            }

                        }
                    }
                });
    }

    @ReactMethod
    public void getAllchatsfromfirebase(String videoId, Callback callback){

        ArrayList<Object> response = new ArrayList<>();

        db.collection("live-chatting")
                .document("video.adfse112334")
                .collection("chats")
                .orderBy("timestamp", Query.Direction.DESCENDING)
                .limit(20)
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            if(task.getResult().size() > 0) {
                                for (QueryDocumentSnapshot document : task.getResult()) {
                                    if (document.exists()) {
//                                    Log.d(TAG, document.getId() + " => " + document.getData());
                                        JSONObject json = new JSONObject(document.getData());
                                        try {
                                            json.put("messageId", document.getId());
                                        } catch (JSONException e) {
                                            e.printStackTrace();
                                        }
                                        response.add(json);
                                    }
                                }
                                storeLastMessageTimeStamp(response);

                                callback.invoke(response + "");
                                Log.e("All firebse data", "calling inside");
                            }

                        } else {
                            Log.d(TAG, "Error getting documents: ", task.getException());
                            callback.invoke("Error getting documents: ");
                        }
                    }
                });
    }

    @ReactMethod
    public void getAllBlockeUserDetails(String videoId, Callback callback){
        ArrayList<Object> response = new ArrayList<>();
        String video_id = "video." + videoId;

        db.collection("live-chatting")
                .document(video_id)
                .collection("blocked-user")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                if(document.exists()) {
                                    Log.d(TAG, document.getId() + " => " + document.getData());
                                    JSONObject json = new JSONObject(document.getData());
                                    response.add(json);
                                }
                            }
                            callback.invoke(response + "");
                        } else {
                            Log.d(TAG, "Error getting documents: ", task.getException());
                            callback.invoke("Error getting documents: ");
                        }
                    }
                });
    }

    @Override
    public String getName() {
        return "firebase";
    }
}
