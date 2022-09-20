package com.exampur;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.Toast;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import com.facebook.react.bridge.WritableNativeMap;
import com.google.android.gms.auth.api.phone.SmsRetriever;
import com.google.android.gms.common.api.CommonStatusCodes;
import com.google.android.gms.common.api.Status;

public class SmsBroadCastReceiver extends BroadcastReceiver {

  private static final String LOCAL_BR_LISTENER = "local-broadcast-receiver";

  @Override
  public void onReceive(Context context, Intent intent) {
    try {
      if (SmsRetriever.SMS_RETRIEVED_ACTION.equals(intent.getAction())) {
        Bundle extras = intent.getExtras();
        Status status = (Status) extras.get(SmsRetriever.EXTRA_STATUS);

        switch (status.getStatusCode()) {
          case CommonStatusCodes.SUCCESS:
            String message = (String) extras.get(
              SmsRetriever.EXTRA_SMS_MESSAGE
            );
            try {
              Intent i = new Intent(LOCAL_BR_LISTENER);
              // You can also include some extra data.
              i.putExtra("message", message);
              LocalBroadcastManager.getInstance(context).sendBroadcast(i);
            } catch (Exception e) {
              //TODO: handle exception
            }

            break;
          case CommonStatusCodes.TIMEOUT:
            break;
        }
      }
    } catch (Exception e) {
      //TODO: handle exception

    }
  }
}
