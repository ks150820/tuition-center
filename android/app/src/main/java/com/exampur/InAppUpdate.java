package com.exampur; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.Callback;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.appupdate.AppUpdateInfo;
import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.UpdateAvailability;

import android.app.Activity;
import android.content.Context;

import java.util.Map;

import android.content.IntentSender;
import android.util.Log;
import android.widget.Toast;

import java.util.HashMap;

public class InAppUpdate extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    AppUpdateManager appUpdateManager;
    private static final boolean[] updateInfo = {false};
    private static final int MY_REQUEST_CODE = 0;
    private static final int DAYS_FOR_FLEXIBLE_UPDATE = 2;

    InAppUpdate(ReactApplicationContext context) {
        super(context);
        reactContext = context;

    }

    @ReactMethod
    public void inAppUpdate() {
        appUpdateManager = AppUpdateManagerFactory.create(reactContext);
// Returns an intent object that you use to check for an update.
        Task<AppUpdateInfo> appUpdateInfoTask = appUpdateManager.getAppUpdateInfo();

// Checks that the platform will allow the specified type of update.
        appUpdateInfoTask.addOnSuccessListener(appUpdateInfo -> {
            if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                    && appUpdateInfo.clientVersionStalenessDays() != null
                    && appUpdateInfo.clientVersionStalenessDays() >= DAYS_FOR_FLEXIBLE_UPDATE
                    // This example applies an immediate update. To apply a flexible update
                    // instead, pass in AppUpdateType.FLEXIBLE
                    && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
                // Request the update.
                updateInfo[0] = true;
                try {
                    appUpdateManager.startUpdateFlowForResult(
                            // Pass the intent that is returned by 'getAppUpdateInfo()'.
                            appUpdateInfo,
                            // Or 'AppUpdateType.FLEXIBLE' for flexible updates.
                            AppUpdateType.IMMEDIATE,
                            // The current activity making the update request.
                            reactContext.getCurrentActivity(),
                            // Include a request code to later monitor this update request.
                            MY_REQUEST_CODE);
                } catch (IntentSender.SendIntentException e) {
                    e.printStackTrace();
                }
            }else{
                if (appUpdateInfo.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                        && appUpdateInfo.isUpdateTypeAllowed(AppUpdateType.FLEXIBLE)) {
                    try {
                        appUpdateManager.startUpdateFlowForResult(
                                appUpdateInfo,
                                AppUpdateType.FLEXIBLE,
                                reactContext.getCurrentActivity(),
                                MY_REQUEST_CODE);
                    } catch (IntentSender.SendIntentException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
//        CharSequence text = "Update is not available";
//        if(!updateInfo[0]) {
//            text = "update is available";
//        }
//        int duration = Toast.LENGTH_SHORT;
//        Toast toast = Toast.makeText(mContext, text, duration);
//        toast.show();
//        return updateInfo[0];
    }

    // add to CalendarModule.java
    @NonNull
    @Override
    public String getName() {
        return "InAppUpdate";
    }
}