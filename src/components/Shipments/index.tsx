import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Heading, Text } from 'rebass';

import ShipmentsTable from './ShipmentsTable';
import Search from './Search';
import { Section } from '../Section';
import { IShipmentStore } from '../../stores/shipmentStore';

const ShipmentsStyled = styled.div``;

interface ShipmentsProps {
  shipmentStore?: IShipmentStore;
}

@inject('shipmentStore')
@observer
class Shipments extends React.Component<ShipmentsProps> {
  componentDidMount() {
    const { fetchShipments } = this.props.shipmentStore!;
    fetchShipments();
  }

  componentWillUnmount() {
    const { clearResult } = this.props.shipmentStore!;
    clearResult();
  }

  render() {
    const { shipments } = this.props.shipmentStore!;

    return (
      <ShipmentsStyled>
        <Section>
          <Heading fontSize={[3, 4, 5]}>FreightHub Shipments</Heading>
        </Section>
        <Search />
        <Section>
          <Text>Sort by clicking column title</Text>
        </Section>
        <ShipmentsTable shipments={shipments} />
      </ShipmentsStyled>
    );
  }
}

export default Shipments;
