import React from 'react';
import { Text } from 'rebass';

import Link from '../components/Shared/Link';

const columns = [
  {
    Header: 'ID',
    accessor: 'id',
    maxWidth: 80,
    Cell: (props: any) => <Text fontSize={[1, 2, 3]}>{props.row.id}</Text>
  },
  {
    Header: 'Name',
    accessor: 'name',
    Cell: (props: any) => (
      <Text fontSize={[1, 2, 3]}>
        <Link to={`/shipment/${props.row.id}`} color="blue ">
          {props.row.name}
        </Link>
      </Text>
    )
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: (props: any) => (
      <Text
        fontSize={[1, 2, 3]}
        color={props.row.status === 'ACTIVE' ? 'black' : 'green'}
        fontWeight="bold"
      >
        {props.row.status}
      </Text>
    ),
    maxWidth: 140
  }
];

export default columns;
