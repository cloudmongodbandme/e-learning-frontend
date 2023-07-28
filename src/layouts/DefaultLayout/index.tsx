import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import HomeSidebar from '~/components/Student/HomeSidebar';
import Navbar from '~/components/Student/Navbar';

const cx = classNames.bind(styles);
interface DefaultLayoutProps {
    children: any;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className={cx('wrapper')}>
            <HomeSidebar />

            <div className={cx('main')}>
                <Navbar />

                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
