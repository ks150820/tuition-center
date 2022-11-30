import {useSelector} from 'react-redux';

import { getAllFreeCourses } from '@store/entities/free-videos';

const useFreeCoursesComponentController = () => {
    const courses = useSelector(getAllFreeCourses);

    return {courses};
};

export default useFreeCoursesComponentController;
