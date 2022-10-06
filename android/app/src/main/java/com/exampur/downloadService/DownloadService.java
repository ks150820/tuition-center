package com.exampur.downloadService;

import static com.exampur.downloadService.DownloadNotificationManager.SERVICE_NOTIFICATION_ID;

import android.app.Notification;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;

import com.facebook.react.HeadlessJsTaskService;

public class DownloadService extends Service {

    private String contentDetail = "";

    private Handler handler = new Handler();
    private Runnable runnableCode = new Runnable() {
        @Override
        public void run() {
            Context context = getApplicationContext();
            Intent myIntent = new Intent(context, DownloadEventService.class);
            myIntent.putExtra("contentDetail", contentDetail);
            context.startService(myIntent);
            HeadlessJsTaskService.acquireWakeLockNow(context);
//            handler.postDelayed(this, 2000);
        }
    };

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

    }

    @Override
    public void onDestroy() {
        DownloadNotificationManager notificationManager = DownloadNotificationManager.getInstance(this);
        notificationManager.isPaused = false;
        super.onDestroy();
        this.handler.removeCallbacks(this.runnableCode);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        contentDetail = intent.getStringExtra("contentDetail");
        this.handler.post(this.runnableCode);
        DownloadNotificationManager notificationManager = DownloadNotificationManager.getInstance(this);
        Notification notification = notificationManager.initializeDownloadNotification(contentDetail);
        startForeground(SERVICE_NOTIFICATION_ID, notification);
        return START_STICKY;
    }

}
