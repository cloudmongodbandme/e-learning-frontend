import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import TitleText from '~/components/TitleText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faGraduationCap,
    faHeart,
    faPersonCircleExclamation,
    faSuitcase,
    faSuitcaseRolling,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import OnboardingTab from '~/components/OnboardingTab';
import FilterOptionCustom from '~/components/FilterOptionCustom';
import Course from '~/components/Course';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Checkbox, FormControlLabel, Modal } from '@mui/material';
import RecommendList from './components/RecommendList/index';
import { ModalContentCourse } from '~/components/Modal';
import { useState } from 'react';
import { CourseProps } from '~/types';
const cx = classNames.bind(styles);

function Home() {
    const [open, setOpen] = useState(false);
    const [couseSelected, setCourseSelected] = useState<CourseProps | undefined>();

    const handleCourseClick = (course: CourseProps) => {
        setOpen(true);
        setCourseSelected(course);
        console.log(course, 'coures now', open);
    };

    const handleCloseModalContentCourse = (course) => {
        setOpen(false);
    };
    const listRecommend = [
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    pronounce:'kənˈtent',
                    sample:"It was with great feelings of content that she ate her breakfast.",
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Content',
                    mean: 'Nội dung',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    word: 'Buffalo',
                    mean: 'Chị Châu',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    title: 'Kiến thức cơ bản',
                    name: 'Chào hỏi',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                    progress: 0.5,
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    title: 'Kiến thức cơ bản',
                    name: 'Chào hỏi',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                    progress: 0.5,
                },
            ],
        },
        {
            isKnown: false,
            icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
            title: 'Kiến thức cơ bản',
            name: 'Chào hỏi',
            image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
            progress: 0.5,
            wordCount: 10,
            content: [
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    title: 'Kiến thức cơ bản',
                    name: 'Chào hỏi',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                    progress: 0.5,
                },
                {
                    isKnown: false,
                    icon: <FontAwesomeIcon icon={faHeart as IconProp} />,
                    title: 'Kiến thức cơ bản',
                    name: 'Chào hỏi',
                    image: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg',
                    progress: 0.5,
                },
            ],
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('boarding-tab')}>
                <OnboardingTab />
            </div>
            <div className={cx('progress-block')}>
                <div className={cx('progress-title')}>
                    <TitleText text="Tiếp tục học" large={true} />
                    <TitleText
                        small
                        text="Các tình huống đã học "
                        rightIcon={<FontAwesomeIcon icon={faArrowRight as IconProp} />}
                    />
                </div>
                <div className={cx('progress-list')}>
                    <Grid2 container spacing={3}>
                        {listRecommend.map((course, index) => {
                            return (
                                <Grid2 sm={4} key={index}>
                                    <Course
                                        progress={course.progress * 100}
                                        title={course.title}
                                        name={course.name}
                                        image={course.image}
                                        onClick={() => {
                                            handleCourseClick(course);
                                            console.log('course', course);
                                        }}
                                    />
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </div>
            </div>
            <div className={cx('recommend-block')}>
                <div className={cx('recommend-title')}>
                    <div className={cx('recommend-filter')}>
                        <TitleText text="Tiếp tục" large={true} />
                        <div className={cx('filter-action')}>
                            <FormControlLabel
                                sx={{ '& .MuiTypography-root': { fontSize: '16px', fontWeight: 400 } }}
                                label="Chỉ hiện thị các khóa học miễn phí"
                                control={
                                    <Checkbox
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 32, fontWeight: 300 } }}
                                        inputProps={{ 'aria-label': 'Check' }}
                                    />
                                }
                            />
                            <FilterOptionCustom />
                        </div>
                    </div>
                </div>
                <div className={cx('recommend-body')}>
                    <RecommendList
                        listCourse={listRecommend}
                        title="Lộ trình học được khuyên dùng"
                        icon={<FontAwesomeIcon icon={faPersonCircleExclamation as IconProp} />}
                    />
                    <RecommendList
                        listCourse={listRecommend}
                        title="Các mối quan hệ"
                        icon={<FontAwesomeIcon icon={faHeart as IconProp} />}
                    />
                    <RecommendList
                        listCourse={listRecommend}
                        title="Công việc"
                        icon={<FontAwesomeIcon icon={faSuitcase as IconProp} />}
                    />
                    <RecommendList
                        listCourse={listRecommend}
                        title="Du lịch"
                        icon={<FontAwesomeIcon icon={faSuitcaseRolling as IconProp} />}
                    />
                    <RecommendList
                        listCourse={listRecommend}
                        title="Giáo dục"
                        icon={<FontAwesomeIcon icon={faGraduationCap as IconProp} />}
                    />
                </div>
            </div>
            <ModalContentCourse open={open} course={couseSelected} />
        </div>
    );
}

export default Home;
