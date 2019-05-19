import React from 'react';
import Link from './Shared/Link';
import { Heading, Box } from 'rebass';

const Header = () => (
  <Box bg="black" color="white" p="1rem">
    <Link to="/">
      <Heading color="white">FreightHub Frontend Challenge</Heading>
    </Link>
  </Box>
);

export default Header;
