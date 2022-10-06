package com.exampur.downloadService;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class DownloadModule extends ReactContextBaseJavaModule {

    public static final String REACT_CLASS = "DownloadService";
    private static ReactApplicationContext reactContext;

    public DownloadModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void startService(String contentDetail) {
        Intent intent = new Intent(this.reactContext, DownloadService.class);
        intent.putExtra("contentDetail", contentDetail);
        this.reactContext.startService(intent);
    }

    @ReactMethod
    public void resetNotificationBuilder() {
        DownloadNotificationManager notificationManager = DownloadNotificationManager.getInstance(reactContext);
        notificationManager.notificationBuilder = null;
    }

    @ReactMethod
    public void updateDownloadProgress(int progress, String contentDetail) {
        DownloadNotificationManager notificationManager = DownloadNotificationManager.getInstance(reactContext);
        notificationManager.updateDownloadProgress(progress, contentDetail);
    }

    @ReactMethod
    public void stopService() {
        this.reactContext.stopService(new Intent(this.reactContext, DownloadService.class));
    }
}
