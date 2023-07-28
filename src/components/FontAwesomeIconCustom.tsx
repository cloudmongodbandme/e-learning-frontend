import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function FontAwesomeIconCustom(props) {
    return <FontAwesomeIcon icon={props.icon as IconProp} />;
}

export default FontAwesomeIconCustom;
