import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  public hotels: any = [];

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this.hotels = this.hotelService.getDummyList();
  }

  goToEdit(id: number) {
    this.router.navigate([`index/hoteles/edit/${id}`]);
  }

  goToCreate() {
    this.router.navigate(['index/hoteles/create']);
  }

}
