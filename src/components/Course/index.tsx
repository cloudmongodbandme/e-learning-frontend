import classNames from 'classnames/bind';
import styles from './Course.module.scss';
import { CourseProps } from '../../types/Course';
import ButtonCustom from '../ButtonCustom';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Course(props: CourseProps) {
    const { title, name, progress, image, onClick } = props;

    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <div className={cx('left-content')}>
                <h5 className={cx('title')}>{title && title}</h5>
                <div className={cx('body')}>
                    <div className={cx('name')}>{name}</div>
                    {progress && <ButtonCustom color="primary" variant="contained" children="Tiếp tục" />}
                </div>
                {progress && (
                    <div className={cx('progress')}>
                        <LinearProgress
                            id="linearmui"
                            sx={{
                                borderRadius: '10px',
                            }}
                            color="inherit"
                            variant="determinate"
                            value={progress}
                        />
                    </div>
                )}
            </div>
            <div className={cx('right-content')}>
                <img src={image} className={cx('image')} alt="" />
            </div>
        </div>
    );
}

export default Course;
