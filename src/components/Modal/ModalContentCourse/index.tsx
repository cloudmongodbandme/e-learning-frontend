import classNames from 'classnames/bind';
import styles from './ModalContentCourse.module.scss';
import {
    Box,
    List,
    ListItem,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { ModalContentCourseProps } from '~/types/Modal';
import { ModalCustom } from '~/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonCustom from '~/components/ButtonCustom/ButtonCustom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function ModalContentCourse(props: ModalContentCourseProps) {
    const { open, onClose, course } = props;

    const Children = () => (
        <div className={cx('wrapper')}>
            <div className={cx('header-modal')}>
                <div className={cx('icon')}>{course?.icon}</div>
                <div className={cx('title')}>{course?.title}</div>
                <div className={cx('name')}>{course?.name}</div>
                <div className={cx('count')}>Từ và cụm từ: {course?.wordCount}</div>
                <div className={cx('btn-continue')}>
                    {' '}
                    {course?.progress && <ButtonCustom color="primary" variant="contained" children="Tiếp tục" />}
                </div>
                <div className={cx('is-known')}>
                    <ButtonCustom
                        color="info"
                        startIcon={<FontAwesomeIcon icon={faCircleCheck as IconProp} />}
                        children="Đánh dấu là đã biết"
                    />
                </div>
            </div>
            <div className={cx('modal-content')}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {course?.content?.map((item, index) => {
                                return (
                                    <TableRow>
                                        <TableCell>{item?.icon}</TableCell>
                                        <TableCell>{item?.word}</TableCell>
                                        <TableCell>{item?.mean}</TableCell>
                                        <TableCell>{item?.pronounce}</TableCell>
                                        <TableCell>{item?.sample}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );

    return <ModalCustom open={open} onClose={onClose} children={<Children />}></ModalCustom>;
}

export default ModalContentCourse;
