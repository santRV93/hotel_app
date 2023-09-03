import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../core/services/hotel.service';
import { Router } from '@angular/router';
import { AlertService } from '../../core/services/alert.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataForm: any = {
    initDate: '',
    endDate: '',
    city: '',
    quantity: 0
  }

  hotels: any = [];

  constructor(
    private hotelService: HotelService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.hotels = this.hotelService.getDummyList();
  }

  goToBooking(id: number) {
    if (!this.dataForm.initDate ||
        !this.dataForm.endDate ||
        !this.dataForm.city ||
        !this.dataForm.quantity ||
        this.dataForm.quantity === 0) {
      this.alertService.showAlert({
        severity: 'warn',
        summary: 'Ateción',
        detail: 'Completa todos los campos para continuar'
      });
      return;
    }
    const initDate = moment(this.dataForm.initDate).format('DD-MM-YYYY');
    const endDate = moment(this.dataForm.endDate).format('DD-MM-YYYY');
    this.router.navigate([`cliente/nueva-reserva/${initDate}/${endDate}/${id}`]);
  }

}
