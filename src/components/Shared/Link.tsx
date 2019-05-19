import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link as RebassLink } from 'rebass';

const LinkStyled = styled(RebassLink)`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Link = (props: any) => <LinkStyled {...props} as={RouterLink} />;

export default Link;
