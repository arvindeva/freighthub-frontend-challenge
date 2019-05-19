import React from 'react';
import { Box, Heading } from 'rebass';

import { Card } from '../Shared/Card';
import { ICargo } from '../../stores/shipmentStore';
import { DetailEntry } from '../Shared/DetailEntry';

interface CargoProps {
  cargo?: ICargo[];
}

class Cargo extends React.Component<CargoProps> {
  render() {
    return (
      <Box>
        <Heading fontSize={[2, 3, 4]} mb={3}>
          Cargo
        </Heading>
        {this.props.cargo
          ? this.props.cargo.map((item, index) => {
              return (
                <Card key={index}>
                  <DetailEntry>Type: {item.type}</DetailEntry>
                  <DetailEntry>Description: {item.description}</DetailEntry>
                  <DetailEntry>Volume: {item.volume}</DetailEntry>
                </Card>
              );
            })
          : null}
      </Box>
    );
  }
}

export default Cargo;
