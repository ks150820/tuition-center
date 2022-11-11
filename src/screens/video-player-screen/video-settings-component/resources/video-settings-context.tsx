import React, {useContext} from 'react';

export type VideoSettingsContextType = {
  // Currently selected option
  selectedSettingOption: ISelectedSettingOptionProps;
  // Handler to update selected option
  updateSelectedSettingOption: (payload: ISelectedSettingOptionProps) => void;
};

// Create video setting context
export const VideoSettingContext =
  React.createContext<VideoSettingsContextType | null>(null);

// Export context use by its child components
export function useVideoSettingsContext() {
  const context = useContext(VideoSettingContext) as VideoSettingsContextType;
  if (context === undefined) {
    throw new Error(
      'useVideoSettingsContext must be used within a <VideoSettingsComponent />',
    );
  }
  return context;
}
