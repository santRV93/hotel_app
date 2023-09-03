import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public bookingList: any = [];

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingList = this.bookingService.getAllBooking();
  }

  goToDetail(id: number) {
    this.router.navigate([`index/reservas/detalle/${id}`]);
  }

}
