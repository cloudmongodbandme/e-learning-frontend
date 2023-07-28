import classNames from 'classnames/bind';

import styles from './FilterOptionCustom.module.scss';
import ButtonCustom from '../ButtonCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faHeart, faSliders } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { useRef, useState } from 'react';
import { Menu } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const cx = classNames.bind(styles);

function FilterOptionCustom() {
    const poperRef: any = useRef();
    const language = [
        { label: 'Tiếng Anh', code: 'en', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Pháp', code: 'fr', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Trung', code: 'cn', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Nhật', code: 'nh', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Anh', code: 'en', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Pháp', code: 'fr', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Trung', code: 'cn', icon: 'fa-solid fa-heart' as IconProp },
        { label: 'Tiếng Nhật', code: 'nh', icon: 'fa-solid fa-heart' as IconProp },
    ];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = (e) => {
        setAnchorEl(null);
    };
    const onToggleFilter = () => {
        // setToggleFilter(!toggleFilter);
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    // const id = toggleFilter ? 'simple-popper' : undefined;
    return (
        <div className={cx('wrapper')} onClick={onToggleFilter} ref={poperRef as any}>
            <ButtonCustom
                // aria-describedby={id}
                variant="outlined"
                children="Công việc"
                onClick={handleClick}
                startIcon={<FontAwesomeIcon className={cx('icon')} icon={faSliders as IconProp} />}
                endIcon={
                    open ? (
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleDown as IconProp} />
                    ) : (
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleUp as IconProp} />
                    )
                }
                classCustom={cx('filter-button')}
            />
            <Menu
                aria-haspopup="true"
                sx={{
                    '& .MuiMenu-paper': {
                        marginTop: '8px',
                        borderRadius: '1.8rem',
                        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px',
                    },
                    '& .MuiMenu-list': {
                        borderRadius: '1.8rem',
                        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px',
                    },
                }}
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
                onClick={onToggleFilter}
            >
                <div className={cx('wrapper-poper')}>
                    <div className={cx('header')}>
                        <div className={cx('left-header')}>Chủ đề</div>
                        <div className={cx('right-header')}>Bỏ lọc</div>
                    </div>
                    <Grid2 className={cx('content')}>
                        {language.map((item, index) => {
                            return (
                                <ButtonCustom
                                    variant="outlined"
                                    classCustom="filter-button"
                                    key={index}
                                    children={item.label}
                                    endIcon={<FontAwesomeIcon icon={item.icon} />}
                                />
                            );
                        })}
                    </Grid2>
                </div>
            </Menu>
        </div>
    );
}

export default FilterOptionCustom;
