type ILanguageObject = {
    [key in SupportedLanguage]: string;
  };
  
  interface IStringConstants {
    [key: string]: ILanguageObject;
  }

export const CONSTANT: IStringConstants = {
    VIEW_ALL: {
        en: 'View all',
        hi: 'View all',
    },
    WHY_EXAMPUR: {
        en: 'Why Exampur?',
        hi: 'Why Exampur?',
    },
    COURSES_BY_EXAM: {
        hi: 'Courses By Exam',
        en: 'Courses By Exam',
    },
    SHARE: {
        en: 'Share',
        hi: 'Share',
    },
    LIVE_CLASS_INC: {
        en: 'Live class included',
        hi: 'Live class included',
    },
    VIDEOS: {
        en: 'Videos',
        hi: 'Videos',
    },
    BATCH_NAME: {
        en: 'ABHIMANYU BATCH',
        hi: 'ABHIMANYU BATCH',
    },
    COURSES_BOUGHT_STATS: {
        en: 'Course bought by over 1000 Users in last 1 Month',
        hi: 'Course bought by over 1000 Users in last 1 Month',
    },
    STARTS: {
        en: 'Starts:',
        hi: 'Starts:',
    },
    COUPON_DESCRIPTION: {
        en: '*आप 50% छूट पाने के लिए EXAMPUR10 कूपन का उपयोग कर सकते हैं|',
        hi: '*आप 50% छूट पाने के लिए EXAMPUR10 कूपन का उपयोग कर सकते हैं|',
    },
    DURATION: {
        en: 'Duration:',
        hi: 'Duration:',
    },
    TXT_STUDENT: {
        en: 'Students watching',
        hi: 'Students watching',
    },
    TXT_SCHEDULED: {
        en: 'Scheduled time:',
        hi: 'Scheduled time:',
    },
    TXT_RECORDED: {
        en: 'Recorded on:',
        hi: 'Recorded on:',
    },
};

export const HEADINGS: IStringConstants = {
    COURSES_BY_CATEGORY: {
        en: 'Courses By Category',
        hi: 'Courses By Category',
    },
    COULD_NOT_FIND: {
        en: `Couldn’t find ${"\n"}something?`,
        hi: `Couldn’t find ${'\n'}something?`,
    },
    UPDATE_CATEGORY: {
        en: 'Update your category',
        hi: 'Update your category',
    },
    BOOKS_RELATED: {
        en: 'Books Related to course',
        hi: 'Books Related to course',
    },
    CHANGE_EXAM: {
        en: 'Change Exam Preference',
        hi: 'Change Exam Preference',
    },
    BATCH_START: {
        en: 'Batch Start',
        hi: 'Batch Start',
    },
    MISSED_LIVE: {
        en: 'Missed Live Classes',
        hi: 'Missed Live Classes',
    },
    STUDENTS_ENROLL: {
        en: 'Students enrolled',
        hi: 'Students enrolled',
    },
    POPULAR_SERIES: {
        en: 'Popular series',
        hi: 'Popular series',
    },
    COURSE_DETAILS: {
        en: 'Course Details',
        hi: 'Course Details',
    },
};

export const UPCOMING_COURSES: string = 'UPCOMING_COURSES';
export const LATEST_COURSES: string = 'LATEST_COURSES';

export const HEADER_EMPTY_TITLE: ILanguageObject = {
    en: 'select course',
    hi: 'select course',
};
