import classNames from 'classnames/bind';
import styles from './TitleText.module.scss';
import { TitleTextProps } from './../../types/TitleText';

const cx = classNames.bind(styles);

function TitleText(props: TitleTextProps) {
    const { large, small, color, text, rightIcon, leftIcon, className } = props;
    const propsClass = cx('wrapper', { large, small, color, className });

    return (
        <div className={propsClass}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{text}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </div>
    );
}

export default TitleText;
