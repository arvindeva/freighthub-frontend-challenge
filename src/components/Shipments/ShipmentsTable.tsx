import React from 'react';
import ReactTable from 'react-table';

import { IShipment } from '../../stores/shipmentStore';
import { Section } from '../Section';
import columns from '../../utils/columns';

interface ShipmentsTableProps {
  shipments: IShipment[];
}

const ShipmentsTable = (props: ShipmentsTableProps) => (
  <Section>
    <ReactTable data={props.shipments} columns={columns} minRows={0} />
  </Section>
);

export default ShipmentsTable;
