package com.exampur;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.Toast;
// import android.support.annotation.NonNull;
import androidx.annotation.NonNull;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.android.gms.auth.api.phone.SmsRetriever;
import com.google.android.gms.auth.api.phone.SmsRetrieverClient;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import java.util.ArrayList;

public class SmsRetrieverModule
  extends ReactContextBaseJavaModule
  implements LifecycleEventListener {

  private IntentFilter intentFilter;
  private SmsBroadCastReceiver mSmsBroadCastReceiver;
  private final ReactApplicationContext mReactContext;
  private static final String EVENT = "com.exampur:otpReceived";
  private static final String LOCAL_BR_LISTENER = "local-broadcast-receiver";

  public SmsRetrieverModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.mReactContext = reactContext;
    reactContext.addLifecycleEventListener(this);
  }

  //

  // Our handler for received Intents. This will be called whenever an Intent
  // with an action named "custom-event-name" is broadcasted.
  private BroadcastReceiver mMessageReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
      // Get extra data included in the Intent
      String message = intent.getStringExtra("message");
      try {
        if (message != null) emitEvent(message);
      } catch (Exception e) {
        //TODO: handle exception
      }
    }
  };

  private void emitEvent(String message) {
    this.mReactContext.getJSModule(
        DeviceEventManagerModule.RCTDeviceEventEmitter.class
      )
      .emit(EVENT, message);
  }

  @ReactMethod
  public void getHash(Promise promise) {
    try {
      OtpHashGenerator helper = new OtpHashGenerator(mReactContext);
      ArrayList<String> signatures = helper.getAppSignatures();
      WritableArray arr = Arguments.createArray();
      for (String s : signatures) {
        arr.pushString(s);
      }
      promise.resolve(arr);
    } catch (Exception e) {
      promise.reject(e);
    }
  }

  @ReactMethod
  public void deRegisterBroadcast() {
    try {
      if (mMessageReceiver != null) LocalBroadcastManager
        .getInstance(mReactContext)
        .unregisterReceiver(mMessageReceiver);
    } catch (Exception e) {
      //TODO: handle exception
    }
  }

  public void registerBroadCast() {
    removeBroadCast();
    LocalBroadcastManager
      .getInstance(mReactContext)
      .registerReceiver(mMessageReceiver, new IntentFilter(LOCAL_BR_LISTENER));
  }

  private void removeBroadCast() {
    if (mMessageReceiver != null) LocalBroadcastManager
      .getInstance(mReactContext)
      .unregisterReceiver(mMessageReceiver);
  }

  private void smsListener() {
    SmsRetrieverClient client = SmsRetriever.getClient(mReactContext);
    client.startSmsRetriever();
    Task<Void> task = client.startSmsRetriever();
    task.addOnSuccessListener(
      new OnSuccessListener<Void>() {
        @Override
        public void onSuccess(Void aVoid) {}
      }
    );

    task.addOnFailureListener(
      new OnFailureListener() {
        @Override
        public void onFailure(@NonNull Exception e) {}
      }
    );
  }

  @ReactMethod
  public void startSmsRetriever() {
    smsListener();
  }

  @Override
  public String getName() {
    return "SmsRetriever";
  }

  @Override
  public void onHostResume() {
    registerBroadCast();
  }

  @Override
  public void onHostPause() {
    removeBroadCast();
  }

  @Override
  public void onHostDestroy() {
    removeBroadCast();
  }

  @ReactMethod
  public void addListener(String eventName) {
    // Keep: Required for RN built in Event Emitter Calls.
  }

  @ReactMethod
  public void removeListeners(Integer count) {
    // Keep: Required for RN built in Event Emitter Calls.
  }
}
