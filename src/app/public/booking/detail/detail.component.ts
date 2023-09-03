import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../core/services/booking.service';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dataBooking: any = {};
  bookingId: any = '';

  constructor(
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.bookingId = param.id;
      this.dataBooking = this.bookingService.getBookingById(this.bookingId);
    })
  }

  goToBooking() {
    this.router.navigate(['index/reservas']);
  }

}
