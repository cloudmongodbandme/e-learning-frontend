import {CourseProps} from '~/types'

export interface ModalContentCourseProps {
    open: boolean;
    onClose ?: function(): void;
    course?:CourseProps;
}
export interface ModalCustomProps {
    open: boolean;
    onClose ?: function(): void;
    children:any;
}
