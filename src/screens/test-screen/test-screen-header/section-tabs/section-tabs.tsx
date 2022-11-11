import React from 'react';

import useSectionTabViewModel from './section-tabs-controller';
import SectionTabView from './section-tabs-view';

const SectionTab: React.FC<ISectionTabProps> = () => {
  const {
    sections,
    isBottomSheetVisible,
    sectionIndex,
    sectionName,
    handleSectionPress,
    toggleBottomSheet,
  } = useSectionTabViewModel();
  return (
    <SectionTabView
      sections={sections}
      isBottomSheetVisible={isBottomSheetVisible}
      sectionIndex={sectionIndex}
      sectionName={sectionName}
      handleSectionPress={handleSectionPress}
      toggleBottomSheet={toggleBottomSheet}
    />
  );
};

export default SectionTab;
