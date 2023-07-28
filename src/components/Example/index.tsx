import classNames from 'classnames/bind';
import styles from './Example.module.scss';

const cx = classNames.bind(styles);

function Example() {
    return <div className={cx('wrapper')}></div>;
}

export default Example;
