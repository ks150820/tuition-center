interface UserPreferences {
  // Application level selected language
  appLanguage: SupportedLanguage;
  // Language specific to video
  videoLanguage?: SupportedVideoLanguage;
  // Video quality preference
  quality?: VideoQuality;
  // Playback speed preference
  playbackSpeed?: PlaybackSpeed;
}
