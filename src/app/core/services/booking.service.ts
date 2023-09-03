import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public bookingList: any = [
    {
      id: 1,
      name: 'Santiago',
      lastName: 'Ramirez',
      gender: 'Masculino',
      documentType: 'Cédula de ciudadanía',
      document: '1000202010',
      email: 'sarv114@gmail.com',
      phone: '3012003000',
      phoneContact: '3003280000',
      nameContact: 'Contacto',
      hotel: 'Hotel A',
      city: 'Cartagena',
      startDate: '10/10/2023',
      endDate: '17/10/2023'
    },
    {
      id: 2,
      name: 'John',
      lastName: 'Doe',
      gender: 'Masculino',
      documentType: 'Cédula de ciudadanía',
      document: '1000202010',
      email: 'john@gmail.com',
      phone: '304123456',
      phoneContact: '3003250000',
      nameContact: 'Contacto',
      hotel: 'Hotel B',
      city: 'Medellín',
      startDate: '01/02/2024',
      endDate: '10/12/2024'
    }
  ];

  constructor() { }

  getAllBooking() {
    return this.bookingList;
  }

  getBookingById(id: any) {
    return this.bookingList.find((booking: any) => booking.id === parseInt(id));
  }

  setBooking() {

  }
}
