import classNames from 'classnames/bind';
import styles from './OnboardingTab.module.scss';

const cx = classNames.bind(styles);

function OnboardingTab() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab', 'tab-active')}>Học</div>
            <div className={cx('tab')}>Luyện tập</div>
        </div>
    );
}

export default OnboardingTab;
