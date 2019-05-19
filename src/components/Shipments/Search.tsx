import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { observer, inject } from 'mobx-react';

import { IShipmentStore } from '../../stores/shipmentStore';
import { Button } from '../Shared/Button';
import { Input } from '../Shared/Input';
import Link from '../Shared/Link';

interface SearchProps {
  shipmentStore?: IShipmentStore;
}

@inject('shipmentStore')
@observer
class Search extends React.Component<SearchProps> {
  state = {
    searchValue: ''
  };

  private handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: e.currentTarget.value });
  };

  private searchShipment = (id: string) => {
    const { searchShipment } = this.props.shipmentStore!;
    searchShipment(id);
  };

  render() {
    const { searchResult } = this.props.shipmentStore!;

    let renderSearchResult: any;
    if (
      typeof searchResult === 'object' &&
      Object.keys(searchResult).length > 0
    ) {
      renderSearchResult = (
        <Text fontSize={4}>
          Search Result:{' '}
          <Link to={`/shipment/${searchResult.id}`} color="blue ">
            {searchResult.name}
          </Link>
        </Text>
      );
    } else if (searchResult === 'Not found') {
      renderSearchResult = <Text>Not Found</Text>;
    } else {
      renderSearchResult = null;
    }
    return (
      <Flex alignItems="center" mb={3}>
        <Box>
          <Input
            type="text"
            value={this.state.searchValue}
            placeholder="Enter Shipment ID..."
            required
            onChange={this.handleChange}
          />

          <Button
            ml={1}
            onClick={() => this.searchShipment(this.state.searchValue)}
          >
            Search By ID
          </Button>
        </Box>
        <Box ml={2}>
          <Text>{renderSearchResult}</Text>
        </Box>
      </Flex>
    );
  }
}

export default Search;
