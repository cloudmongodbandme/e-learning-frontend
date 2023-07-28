import { Autocomplete, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './AutocompleteComp.module.scss';
import { AutocompleteProps } from '~/types/Autocomplete';

const cx = classNames.bind(styles);

function AutocompleteComp(props: AutocompleteProps) {
    const { options } = props;
    return (
        <div className={cx('wrapper')}>
            <Autocomplete
                options={options}
                clearOnEscape
                getOptionLabel={(option: any) => option.label}
                // renderOption={(props, option) => {
                //     return <div> {option}</div>;
                // }}
                disableListWrap={true}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Ngôn ngữ" />}
                disableClearable
            />
        </div>
    );
}

export default AutocompleteComp;
