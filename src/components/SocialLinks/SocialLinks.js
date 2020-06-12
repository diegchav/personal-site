import React from 'react';

import IconLink from '../IconLink/IconLink';

import SocialLinksStyled from './SocialLinksStyled';

const SocialMediaLinks = () => (
    <SocialLinksStyled>
        <IconLink url='https://github.com/diegchav' icon='github' />
        <IconLink url='https://www.linkedin.com/in/diegchav' icon='linkedin' />
    </SocialLinksStyled>
);

export default SocialMediaLinks;