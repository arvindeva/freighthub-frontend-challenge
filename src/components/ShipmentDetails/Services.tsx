import React from 'react';
import { Box, Heading } from 'rebass';

import { Card } from '../Shared/Card';
import { IService } from '../../stores/shipmentStore';
import { DetailEntry } from '../Shared/DetailEntry';

interface ServicesProps {
  services?: IService[];
}

class Services extends React.Component<ServicesProps> {
  render() {
    return (
      <Box>
        <Heading fontSize={[2, 3, 4]} mb={3}>
          Services
        </Heading>
        {this.props.services
          ? this.props.services.map((service, index) => {
              return (
                <Card key={index}>
                  <DetailEntry>Item {index + 1}</DetailEntry>
                  <DetailEntry>Type: {service.type}</DetailEntry>
                  <DetailEntry>Value: {service.value || 'N/A'}</DetailEntry>
                </Card>
              );
            })
          : null}
      </Box>
    );
  }
}

export default Services;
