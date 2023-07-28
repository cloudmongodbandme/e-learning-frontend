export interface CourseProps {
    title?: string;
    name: string;
    description?: string;
    image: string;
    icon?: IconProp;
    progress?: number;
    wordCount?: number;
    content?: any[];
    onClose?: (() => void | undefined) | undefined | any;
    onClick?: (() => void | undefined) | undefined | any;
}

export interface RecommendListProps {
    title?: string;
    icon?: any;
    listCourse: Course[];
}

export interface WordProps {
    icon?: IconProp;
    word?: string;
    meaning?: string;
    image?: string;
}
