package com.exampur;

import android.app.Application;
import android.content.Context;
import com.exampur.newarchitecture.MainApplicationReactNativeHost;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.soloader.SoLoader;
import com.moe.pushlibrary.MoEHelper;
import com.moengage.core.DataCenter;
import com.moengage.core.MoEngage;
import com.moengage.core.MoEngage;
import com.moengage.core.config.NotificationConfig;
import com.moengage.react.MoEInitializer;
import com.moengage.react.MoEReactPackage;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.exampur.downloadService.DownloadPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      packages.add(new AppPackages());
      packages.add(new DownloadPackage());
      // packages.add(new MoEReactPackage());

      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  private final ReactNativeHost mNewArchitectureNativeHost = new MainApplicationReactNativeHost(
    this
  );

  @Override
  public ReactNativeHost getReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureNativeHost;
    } else {
      return mReactNativeHost;
    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    // If you opted-in for the New Architecture, we enable the TurboModule system
    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    // LeakCanary.config =
    //   LeakCanary.config.copy(onHeapAnalyzedListener = FlipperLeakListener());

    SoLoader.init(this, /* native exopackage */false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    // if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {
    //   val client = AndroidFlipperClient.getInstance(this);
    //   /*
    //   add leak canary plugin to flipper
    //   */
    //   client.addPlugin(LeakCanary2FlipperPlugin());
    //   client.start();
    // }

    // this is the instance of the application class and "XXXXXXXXXXX" is the APP ID from the dashboard.
    MoEngage.Builder moEngage = new MoEngage.Builder(
      this,
      "B2E68WVH8X21LQV6T71A765I"
    )
      .setDataCenter(DataCenter.DATA_CENTER_3)
      .configureNotificationMetaData(
        new NotificationConfig(
          R.drawable.jeet_logo,
          R.drawable.jeet_logo,
          R.color.colorPrimaryDark,
          null,
          true,
          false,
          true
        )
      );
    MoEInitializer.INSTANCE.initialize(getApplicationContext(), moEngage);
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
    Context context,
    ReactInstanceManager reactInstanceManager
  ) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.exampur.ReactNativeFlipper");
        aClass
          .getMethod(
            "initializeFlipper",
            Context.class,
            ReactInstanceManager.class
          )
          .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
