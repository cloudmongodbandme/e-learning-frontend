import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import styles from './RecommendList.module.scss';
import Course from '~/components/Course';
import { RecommendListProps } from '~/types';
import TitleText from '~/components/TitleText';

const cx = classNames.bind(styles);
function RecommendList(props: RecommendListProps) {
    const { title, icon, listCourse } = props;
    return (
        <div className={cx('wrapper')}>
            {title && <TitleText text={title || ''} rightIcon={icon} />}
            <Grid2 container spacing={2}>
                {listCourse &&
                    listCourse.map((course, index) => {
                        return (
                            <Grid2 sm={2} key={index}>
                                <Course title={course.title} name={course.name} image={course.image} />
                            </Grid2>
                        );
                    })}
            </Grid2>
        </div>
    );
}

export default RecommendList;
