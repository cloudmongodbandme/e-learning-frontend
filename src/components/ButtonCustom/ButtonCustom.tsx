import classNames from 'classnames/bind';
import styles from './ButtonCustom.module.scss';
import { ButtonCustomProps } from '../../types/Button';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

function ButtonCustom(props: ButtonCustomProps) {
    const { to, href, classCustom, large, children, variant, color, startIcon, endIcon, onClick } = props;
    const classes = {
        onClick,
        variant,
        color,
        [classCustom]: classCustom,
        large,
    };
    return (
        <Button
            className={cx(classes)}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            onClick={onClick}
            {...props}
        ></Button>
    );
}

export default ButtonCustom;
