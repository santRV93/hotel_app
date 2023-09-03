import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  selector: 'app-create-edit-hotel',
  templateUrl: './create-edit-hotel.component.html',
  styleUrls: ['./create-edit-hotel.component.scss']
})
export class CreateEditHotelComponent implements OnInit {

  public action: string = '';
  public actionTitle: string = '';
  public currentId: any = '';
  public currentHotels: any = [];
  public stateOptions = [{label: 'Si', value: true}, {label: 'No', value: false}];

  public newHotel = {
    id: 0,
    name: '',
    city: '',
    address: '',
    active: true,
    rooms: [
      {
        id: 0,
        price: 0,
        tax: 0,
        type: '',
        active: true
      }
    ]
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
    this.currentHotels = this.hotelService.getDummyList();
    this.activatedRoute.params.subscribe((param: any) => {
      this.action = param.action;
      if (param.id) {
        this.currentId = param.id;
        this.newHotel = this.hotelService.getHotel(this.currentId);
        this.actionTitle = this.action === 'create' ? 'Crear hotel' : 'Editar hotel';
      }
    })
  }

  saveHotel() {
    if (!this.validateHotel() || !this.validateRoom()) {
      this.alertService.showAlert({
        severity: 'warn',
        summary: 'Atención',
        detail: 'Completa toda la información'
      });
      return;
    }
    this.setIds();
    this.hotelService.setDummyList(this.newHotel);
    this.alertService.showAlert({
      severity: 'success',
      summary: 'Registro completado',
      detail: 'Un nuevo hotel se ha registrado correctamente'
    });
    this.newHotel = {
      id: 0,
      name: '',
      city: '',
      address: '',
      active: true,
      rooms: [
        {
          id: 0,
          price: 0,
          tax: 0,
          type: '',
          active: true
        }
      ]
    }
    setTimeout(() => {
      this.router.navigate(['index/hoteles']);
    }, 3000);
  }

  editHotel() {
    if (!this.validateHotel() || !this.validateRoom()) {
      this.alertService.showAlert({
        severity: 'warn',
        summary: 'Atención',
        detail: 'Completa toda la información'
      });
      return;
    }
    this.hotelService.setHotelById(this.currentId, this.newHotel);
    this.alertService.showAlert({
      severity: 'success',
      summary: 'Edicíon completada',
      detail: 'El hotel se ha modificado correctamente'
    });
    setTimeout(() => {
      this.router.navigate(['index/hoteles']);
    }, 3000);
  }

  addRoom() {
    this.newHotel.rooms = [ ...this.newHotel.rooms, {
      id: 0,
      price: 0,
      tax: 0,
      type: '',
      active: true
    }];
  }

  deleteRoom(index: number) {
    this.newHotel.rooms.splice(index, 1);
  }

  validateHotel() {
    return (
      this.newHotel.name &&
      this.newHotel.city &&
      this.newHotel.address
    );
  }

  validateRoom() {
    const rooms = this.newHotel.rooms;
    let errors = 0;
    for (let room of rooms) {
      if (room.price === 0 || !room.price || room.tax === 0 || !room.tax || !room.type) {
        errors++;
      }
    }
    if (errors > 0) {
      return false;
    } else {
      return true;
    }
  }

  setIds() {
    const currentPosHotel = this.currentHotels.length - 1;
    this.newHotel.id = this.currentHotels[currentPosHotel].id + 1;

    const rooms = this.newHotel.rooms;
    const currentPosRoom = this.currentHotels[currentPosHotel].rooms.length - 1; 
    let lastIdRoom = this.currentHotels[currentPosHotel].rooms[currentPosRoom].id;
    for (let room of rooms) {
      lastIdRoom ++;
      room.id = lastIdRoom;
    }
  }

  redirectHotels() {
    this.router.navigate(['index/hoteles']);
  }

}
