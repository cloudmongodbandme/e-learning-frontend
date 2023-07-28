import { faChalkboardUser, faComment, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './HomeSidebar.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function HomeSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="" className={cx('logo-img')} />
            </div>
            <ul className={cx('menu')}>
                <li className={cx('menu-item', 'active')}>
                    <Link to="">
                        {' '}
                        <FontAwesomeIcon className={cx('icon')} icon={faHouse as IconProp} />
                        <span className="title">Trang chủ</span>
                    </Link>
                </li>
                <li className={cx('menu-item')}>
                    <Link to="">
                        {' '}
                        <FontAwesomeIcon className={cx('icon')} icon={faChalkboardUser as IconProp} />
                        <span className="title">Học</span>
                    </Link>
                </li>
                <li className={cx('menu-item')}>
                    <Link to="">
                        {' '}
                        <FontAwesomeIcon className={cx('icon')} icon={faComment as IconProp} />
                        <span className="title">Giao tiếp</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HomeSidebar;
