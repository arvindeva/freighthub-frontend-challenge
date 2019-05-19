import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Heading, Flex } from 'rebass';

import { Button } from '../Shared/Button';
import { Input } from '../Shared/Input';
import { DetailEntry } from '../Shared/DetailEntry';
import { IShipmentStore } from '../../stores/shipmentStore';
import Cargo from './Cargo';
import Services from './Services';

interface MatchParams {
  id: string;
}

interface DetailsProps extends RouteComponentProps<MatchParams> {
  shipmentStore?: IShipmentStore;
}

export interface RouteComponentProps<P> {
  match: match<P>;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

const ShipmentDetailsStyled = styled.div``;

@inject('shipmentStore')
@observer
class ShipmentDetails extends React.Component<DetailsProps> {
  state = {
    newName: ''
  };

  componentDidMount() {
    const { fetchShipment } = this.props.shipmentStore!;
    const { id } = this.props.match.params;
    fetchShipment(id);
  }

  private changeName = (name: string) => {
    if (name === '') {
      alert('cannot be empty');
    } else {
      const { editName } = this.props.shipmentStore!;
      const { id } = this.props.match.params;
      editName(id, name);
    }
  };

  private handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ newName: e.currentTarget.value });
  };

  render() {
    const { match } = this.props;
    const { shipment, mode, isLoading } = this.props.shipmentStore!;
    return (
      <ShipmentDetailsStyled className="shipment-details">
        <Heading fontSize={[3, 4, 5]} mb={3}>
          Shipment Details for id: {match.params.id}
        </Heading>
        {!isLoading ? (
          <Heading fontSize={[3, 4, 5]} mb={3}>
            {shipment.name}
          </Heading>
        ) : (
          <Heading fontSize={[3, 4, 5]} mb={3}>
            LOADING
          </Heading>
        )}
        <Flex mb={3}>
          <Input
            type="text"
            value={this.state.newName}
            placeholder="New Name..."
            required
            onChange={this.handleChange}
          />
          <Button onClick={() => this.changeName(this.state.newName)} ml={1}>
            Edit name
          </Button>
        </Flex>
        <DetailEntry>Mode: {mode}</DetailEntry>
        <DetailEntry>Type: {shipment.type}</DetailEntry>
        <DetailEntry>Destination: {shipment.destination}</DetailEntry>
        <DetailEntry>Origin: {shipment.origin}</DetailEntry>
        <Cargo cargo={shipment.cargo} />
        <Services services={shipment.services} />
      </ShipmentDetailsStyled>
    );
  }
}

export default ShipmentDetails;
