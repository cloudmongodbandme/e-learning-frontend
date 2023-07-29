import classNames from 'classnames/bind';
import styles from './ModalCustom.module.scss';
import { Paper, Modal } from '@mui/material';
import { ModalCustomProps } from '~/types/Modal';

const cx = classNames.bind(styles);

function ModalCustom(props: ModalCustomProps) {
    const { open, onClose, children } = props;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '1.5rem',
        maxHeight: '80vh',
        overFlow: 'scroll',
    };

    return (
        <Modal open={open} className="modal-custom" onClose={onClose}>
            <Paper sx={style} className="wrapper">
                {children}
            </Paper>
        </Modal>
    );
}

export default ModalCustom;
