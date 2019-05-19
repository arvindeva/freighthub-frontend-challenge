import { observable, action, computed, toJS } from 'mobx';
import axios from 'axios';

const url = process.env.DB_URL;

export interface IShipment {
  id?: string;
  name?: string;
  cargo?: ICargo[];
  mode?: string;
  type?: string;
  destination?: string;
  origin?: string;
  services?: IService[];
  total?: string;
  status?: string;
  userId?: string;
}

export interface ICargo {
  type: string;
  description: string;
  volume: string;
}

export interface IService {
  type: string;
  value?: string;
}

export interface IShipmentStore {
  shipments: IShipment[];
  shipment: IShipment;
  isLoading: boolean;
  searchResult?: any;
  mode: string;
  fetchShipments(): void;
  fetchShipment(id: string): void;
  searchShipment(id: string): any;
  clearResult(): void;
  editName(id: string, name: string): void;
}

export class ShipmentStore implements IShipmentStore {
  @observable
  shipments = [];

  @observable
  shipment: IShipment = {};

  @observable
  isLoading: boolean = false;

  @observable
  searchResult: any;

  // Capitalize the mode
  @computed
  public get mode(): string {
    const { mode } = this.shipment;
    if (mode) {
      return (
        this.shipment.mode!.charAt(0).toUpperCase() +
        this.shipment.mode!.slice(1)
      );
    }
    return '';
  }

  @action.bound
  public fetchShipments(): void {
    this.isLoading = true;
    console.log(process.env.DB_URL);
    axios
      .get(`${url}`)
      .then(response => {
        this.shipments = response.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  @action.bound
  public fetchShipment(id: string): void {
    this.isLoading = true;
    axios
      .get(`${url}/${id}`)
      .then(response => {
        this.shipment = response.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  @action.bound
  public editName(id: string, name: string): void {
    axios({
      method: 'patch',
      url: `${url}/${id}`,
      data: {
        name: name
      }
    })
      .then(response => {
        this.shipment.name = response.data.name;
      })
      .catch(error => console.log(error));
  }

  @action.bound
  public searchShipment(id: string): any {
    let clone = toJS(this.shipments);
    let result = clone.find((shipment: any) => shipment.id === id);
    this.searchResult = result || 'Not found';
  }

  @action.bound
  public clearResult() {
    this.searchResult = {};
  }
}
