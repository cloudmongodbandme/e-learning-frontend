import { faBell, faCircleQuestion, faCircleUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import AutocompleteComp from '~/components/AutocompleteComp';
import styles from './Navbar.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function Navbar() {
    const language = [
        { label: 'Tiếng Anh', code: 'en' },
        { label: 'Tiếng Pháp', code: 'fr' },
        { label: 'Tiếng Trung', code: 'cn' },
        { label: 'Tiếng Nhật', code: 'nh' },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-nav')}>
                <AutocompleteComp options={language} />
            </div>
            <div className={cx('right-nav')}>
                <FontAwesomeIcon className={cx('icon')} icon={faMessage as IconProp} />
                <FontAwesomeIcon className={cx('icon')} icon={faCircleQuestion as IconProp}></FontAwesomeIcon>
                <FontAwesomeIcon className={cx('icon')} icon={faBell as IconProp}></FontAwesomeIcon>
                <FontAwesomeIcon className={cx('icon', 'user-icon')} icon={faCircleUser as IconProp}></FontAwesomeIcon>
            </div>
        </div>
    );
}

export default Navbar;
