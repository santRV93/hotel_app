import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {

  public userSession: any = JSON.parse(localStorage.getItem('user')!);

  public items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: ['/cliente/home']
    },
    {
      label: `${this.userSession.name} ${this.userSession.lastName}`,
      icon: 'pi pi-user'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {/**/}

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
