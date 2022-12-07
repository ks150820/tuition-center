import {useSelector} from 'react-redux';

import { getAllFreeCourses } from '@store/entities/free-videos';

const useFreeCoursesComponentController = () => {
    const courses = useSelector(getAllFreeCourses);

    const handleOnCardPress = (): void => {};

    return {courses, handleOnCardPress};
};

export default useFreeCoursesComponentController;
