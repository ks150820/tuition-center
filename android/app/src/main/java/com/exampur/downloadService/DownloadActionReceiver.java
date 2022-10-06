package com.exampur.downloadService;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import org.json.JSONException;
import org.json.JSONObject;

public class DownloadActionReceiver extends BroadcastReceiver {

    public static final int ACTION_PAUSE_REQUEST_ID = 20010;
    public static final int ACTION_CANCEL_REQUEST_ID = 20011;
    // Keep this constant's value same as React constants
    private final int PAUSE_DOWNLOAD = 1;
    private final int RESUME_DOWNLOAD = 2;
    private final int CANCEL_DOWNLOAD = 3;

    @Override
    public void onReceive(Context context, Intent intent) {
        DownloadNotificationManager notificationManager = DownloadNotificationManager.getInstance(context);
        try {
            String contentDetail = intent.getStringExtra("contentDetail");
            // When resume action button tapped
            if (intent.getBooleanExtra("isResumePerformed", false)) {
                // Clear resume notification
                int resumeNotificationId = intent.getIntExtra("resumeNotificationId", 0);
                notificationManager.removeResumeNotification(context, resumeNotificationId);
            } else if (intent.getBooleanExtra("isCancelRequested", false)) {
                // When cancel action button tapped
                JSONObject contentObject = new JSONObject(contentDetail);
                contentObject.put("requestType", CANCEL_DOWNLOAD);
                contentDetail = contentObject.toString();
            } else {
                // When pause action button tapped
                JSONObject contentObject = new JSONObject(contentDetail);
                contentObject.put("requestType", PAUSE_DOWNLOAD);
                contentDetail = contentObject.toString();
                // On pause event, Create separate notification with Resume action
                contentObject.put("requestType", RESUME_DOWNLOAD);
                notificationManager.generateNotificationForResumeEvent(context, contentObject);
            }
            // Start Download Service
            Intent serviceIntent = new Intent(context, DownloadService.class);
            serviceIntent.putExtra("contentDetail", contentDetail);
            context.startService(serviceIntent);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}

