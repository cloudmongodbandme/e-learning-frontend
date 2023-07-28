import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import HomeSidebar from '~/components/Student/HomeSidebar';
import Navbar from '~/components/Student/Navbar';

const cx = classNames.bind(styles);
interface HomeLayoutProps {
    children: any;
}
function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-sidebar')}>
                <HomeSidebar />
            </div>

            <div className={cx('main')}>
                <Navbar />

                {children}
            </div>
        </div>
    );
}

export default HomeLayout;
