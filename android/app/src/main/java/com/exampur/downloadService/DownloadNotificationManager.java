package com.exampur.downloadService;

import static com.exampur.downloadService.DownloadActionReceiver.ACTION_CANCEL_REQUEST_ID;
import static com.exampur.downloadService.DownloadActionReceiver.ACTION_PAUSE_REQUEST_ID;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;

import androidx.core.app.NotificationCompat;

import com.exampur.MainActivity;
import com.exampur.R;

import org.json.JSONException;
import org.json.JSONObject;

public class DownloadNotificationManager {

    public static final int SERVICE_NOTIFICATION_ID = 12345;
    public static final int RESUME_NOTIFICATION_ID = 12221;
    public static final String CHANNEL_ID = "CH_DOWNLOAD";
    private static volatile DownloadNotificationManager instance;
    public boolean isPaused = false;
    public NotificationCompat.Builder notificationBuilder;
    private Context context;
    private String contentDetail;
    private NotificationManager notificationManager;

    private DownloadNotificationManager(Context context) {
        this.context = context;
    }

    public static DownloadNotificationManager getInstance(Context context) {
        if (instance == null) {
            synchronized (DownloadNotificationManager.class) {
                if (instance == null) {
                    instance = new DownloadNotificationManager(context);
                }
            }
        }
        return instance;
    }

    public Notification initializeDownloadNotification(String contentDetail) {
        // If notification instance is alive than don't override data
        if (notificationBuilder != null) return notificationBuilder.build();
        this.contentDetail = contentDetail;
        createNotificationChannel();
        // For default notification click
        Intent notificationIntent = new Intent(context, MainActivity.class);
        PendingIntent contentIntent = PendingIntent.getActivity(context, 0, notificationIntent, PendingIntent.FLAG_CANCEL_CURRENT);
        notificationBuilder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setContentTitle("Download will begin soon.")
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(contentIntent)
                .setOngoing(true)
                .setOnlyAlertOnce(true)
                .addAction(0, "Pause", getActionPendingIntent(false))
                .addAction(0, "Cancel", getActionPendingIntent(true));
        return notificationBuilder.build();
    }

    private PendingIntent getActionPendingIntent(boolean isCancelRequested) {
        Intent actionIntent = new Intent(context, DownloadActionReceiver.class);
        actionIntent.putExtra("contentDetail", contentDetail);
        actionIntent.putExtra("isCancelRequested", isCancelRequested);
        return PendingIntent.getBroadcast(context, isCancelRequested ? ACTION_CANCEL_REQUEST_ID : ACTION_PAUSE_REQUEST_ID, actionIntent, PendingIntent.FLAG_UPDATE_CURRENT);
    }

    private void createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        int importance = NotificationManager.IMPORTANCE_DEFAULT;
        NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "Download Manager", importance);
        channel.setDescription("Channel used for content downloading");
        initializeNotificationManager(context);
        notificationManager.createNotificationChannel(channel);
    }

    private void initializeNotificationManager(Context context) {
        notificationManager = context.getSystemService(NotificationManager.class);
    }

    public void updateDownloadProgress(int progress, String contentDetail) {
        if (notificationBuilder == null) {
            initializeDownloadNotification(contentDetail);
        }
        notificationBuilder.setContentTitle("Download progress " + progress + "%");
        int PROGRESS_MAX = 100;
        notificationBuilder.setProgress(PROGRESS_MAX, progress, false);
        notificationBuilder.setSubText(progress + "%");
        notificationManager.notify(SERVICE_NOTIFICATION_ID, notificationBuilder.build());
    }

    public void generateNotificationForResumeEvent(Context context, JSONObject contentObject) {
        if (notificationManager == null) {
            initializeNotificationManager(context);
        }
        // For default notification click
        Intent notificationIntent = new Intent(context, MainActivity.class);
        PendingIntent contentIntent = PendingIntent.getActivity(context, 0, notificationIntent, PendingIntent.FLAG_CANCEL_CURRENT);
        // For action button
        int resumeNotificationId = 0;
        int resumeRequestId = 321;
        try {
            resumeNotificationId = extractInt(contentObject.getString("contentId"));
            resumeRequestId += resumeNotificationId;
        } catch (JSONException e) {
            e.printStackTrace();
        }
        Intent actionIntent = new Intent(context, DownloadActionReceiver.class);
        actionIntent.putExtra("contentDetail", contentObject.toString());
        actionIntent.putExtra("isResumePerformed", true);
        actionIntent.putExtra("resumeNotificationId", resumeNotificationId);
        PendingIntent actionPendingIntent = PendingIntent.getBroadcast(context, resumeRequestId, actionIntent, PendingIntent.FLAG_UPDATE_CURRENT);
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setContentTitle("Download Paused.")
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(contentIntent)
                .addAction(0, "Resume", actionPendingIntent);
        notificationManager.notify(resumeNotificationId, notificationBuilder.build()); // Here notification id should be dynamic, Associated with content
    }

    private int extractInt(String str) {
        // Replacing every non-digit number with a empty string
        str = str.replaceAll("[^\\d]", "");
        // Remove extra spaces from the beginning and the ending of the string
        str = str.trim();
        // Below calculation done for get Int value from Long value
        // Get last 8 digits of Long value
        int length = str.length();
        int startIndex = length > 7 ? length - 8 : 2;
        String subStr = str.substring(startIndex, length);
        return Integer.parseInt(subStr);
    }

    public void removeResumeNotification(Context context, int notificationId) {
        if (notificationManager == null) {
            initializeNotificationManager(context);
        }
        notificationManager.cancel(notificationId);
    }
}
