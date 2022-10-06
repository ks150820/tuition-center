import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  getSelectedSection,
  getSections,
  updateSection,
} from '@store/entities/test-experience';

type UseSectionTabsControllerType = () => ISectionTabViewProps;

const useSectionTabViewModel: UseSectionTabsControllerType = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] =
    useState<boolean>(false);
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  const sections = useSelector(getSections);
  const selectedSection = useSelector(getSelectedSection);

  const dispatch = useDispatch<Dispatch>();

  /**
   * to toggle the bottom sheet - open/close - most of the time this method is used to close the bottom sheet
   */
  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  /**
   * function to change section
   * @param {String} params.selectedSectionName this is the selected Section Name when user press on any section tab
   * @param {number} params.index index number of selected section
   */
  const handleSectionPress = (selectedSectionName: String, index: number) => {
    dispatch(updateSection(selectedSectionName));
    setSectionIndex(index);
    toggleBottomSheet();
  };

  const sectionName = selectedSection;

  return {
    sections,
    isBottomSheetVisible,
    sectionName,
    sectionIndex,
    handleSectionPress,
    toggleBottomSheet,
  };
};

export default useSectionTabViewModel;
