import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {

  public initDate: string = '';
  public endDate: string = '';
  public hotelId: any = '';
  public dataHotel: any = {};
  public genders: any = [
    {
      name: 'Femenino'
    },
    {
      name: 'Masculino'
    },
    {
      name: 'Sin especificar'
    }
  ];
  public documentTypes: any = [
    {
      name: 'Cédula de ciudadanía'
    },
    {
      name: 'Cédula de extranjería'
    },
    {
      name: 'Pasaporte'
    }
  ]
  public newBooking: any = {
    name: '',
    lastName: '',
    gender: {},
    documentType: {},
    document: '',
    email: '',
    phone: '',
    phoneContact: '',
    nameContact: '',
    hotel: '',
    city: '',
    startDate: '',
    endDate: ''
  }
  public selectedRoom: any = {
    id: 0
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.initDate = param.initDate;
      this.endDate = param.endDate;
      this.hotelId = param.id;

      this.dataHotel = this.hotelService.getHotel(this.hotelId);
    });
  }

  setBooking() {
    if (!this.validateData()) {
      return;
    }
    this.alertService.showAlert({
      severity: 'success',
      summary: 'Proceso completado',
      detail: 'Reserva realizada correctamente'
    });
    this.newBooking = {
      name: '',
      lastName: '',
      gender: {},
      documentType: {},
      document: '',
      email: '',
      phone: '',
      phoneContact: '',
      nameContact: '',
      hotel: '',
      city: '',
      startDate: '',
      endDate: ''
    }
    setTimeout(() => {
      this.router.navigate(['cliente/home']);
    }, 3000);
  }

  validateData() {
    if (this.selectedRoom.id === 0) {
      this.alertService.showAlert({
        severity: 'warn',
        summary: 'Atención',
        detail: 'Selecciona una habitación'
      });
      return false;
    }
    if (!this.newBooking.name ||
      !this.newBooking.lastName ||
      !this.newBooking.gender?.name ||
      !this.newBooking.documentType?.name ||
      !this.newBooking.document ||
      !this.newBooking.email ||
      !this.newBooking.phone ||
      !this.newBooking.phoneContact ||
      !this.newBooking.nameContact ||
      !this.newBooking.city) {
      this.alertService.showAlert({
        severity: 'warn',
        summary: 'Atención',
        detail: 'Completa todos los datos'
      });
      return false;
    }
    return true;
  }

  selectRoom(id: number) {
    if (this.selectedRoom.id === id ) {
      this.selectedRoom.id = 0;
    } else {
      this.selectedRoom.id = id;
    }
  }

}
