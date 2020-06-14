import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconLinkStyled from './IconLinkStyled';

const IconLink = ({ url, icon, size }) => {
    const { iconColor } = useContext(ThemeContext);

    return (
        <IconLinkStyled href={url} target="_blank" color={iconColor}>
            <FontAwesomeIcon icon={['fab', icon]} size={size} />
        </IconLinkStyled>
    );
};

IconLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['1x', '2x', '3x'])
};

IconLink.defaultProps = {
    size: '2x'
};

export default IconLink;