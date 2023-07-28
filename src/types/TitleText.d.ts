import { ReactInstance } from 'react';

export interface TitleTextProps {
    small?: boolean;
    large?: boolean;
    text: string;
    color?: string;
    rightIcon?: ReactElement<any, any>;
    leftIcon?: ReactElement<any, any>;
    className?: string;
}
