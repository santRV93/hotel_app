import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public hotelsList: any = [
    {
      id: 1,
      name: 'Hotel A',
      city: 'Cartagena',
      address: 'Calle 50',
      active: true,
      rooms: [
        {
          id: 1,
          price: 280000,
          tax: 19,
          type: 'Estándar',
          active: true
        },
        {
          id: 2,
          price: 380000,
          tax: 19,
          type: 'Deluxe con vista al mar',
          active: true
        }
      ]
    },
    {
      id: 2,
      name: 'Hotel B',
      city: 'Medellín',
      address: 'Calle 10',
      active: true,
      rooms: [
        {
          id: 3,
          price: 240000,
          tax: 19,
          type: 'Estándar',
          active: true
        },
        {
          id: 4,
          price: 340000,
          tax: 19,
          type: 'Deluxe',
          active: true
        }
      ]
    }
  ];

  constructor() {}

  getDummyList() {
    return this.hotelsList;
  }

  setDummyList(newHotel: any) {
    this.hotelsList.push(newHotel);
  }

  getHotel(id: any) {
    return this.hotelsList.find((hotel: any) => hotel.id === parseInt(id));
  }

  setHotelById(id: any, dataHotel: any) {
    const index = this.hotelsList.findIndex((hotel: any) => hotel.id === parseInt(id));
    this.hotelsList[index] = dataHotel;
  }
}
