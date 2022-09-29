package com.exampur;

import android.util.Log;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.moengage.firebase.MoEFireBaseHelper;
import com.moengage.pushbase.MoEPushHelper;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

  /**
   * On every new push notification this method get triggered
   *
   * @param remoteMessage contains notification payload
   */
  @Override
  public void onMessageReceived(RemoteMessage remoteMessage) {
    // Log.e("Remote Message", remoteMessage.getData() + "");
    if (
      MoEPushHelper
        .getInstance()
        .isFromMoEngagePlatform(remoteMessage.getData())
    ) {
      // If MoEngage push payload than pass it to the SDK
      MoEFireBaseHelper.Companion
        .getInstance()
        .passPushPayload(getApplicationContext(), remoteMessage.getData());
    } else {
      // App's business logic to show notification
    }
  }

  /**
   * FCM SDK generates a registration token for the client app instance
   *
   * @param token contains string tocken specific to our app.
   *              In all below scenarios, Token will be refreshed
   *              1) The app is restored on a new device
   *              2) The user uninstalls/reinstall the app
   *              3) The user clears app data.
   */
  @Override
  public void onNewToken(String token) {
    MoEFireBaseHelper
      .getInstance()
      .passPushToken(getApplicationContext(), token);
  }
}
