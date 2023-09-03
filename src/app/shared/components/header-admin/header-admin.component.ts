import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  @Input() title: string = '';
  @Input() back: boolean = false;
  @Output() redirect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.redirect.emit();
  }

}
