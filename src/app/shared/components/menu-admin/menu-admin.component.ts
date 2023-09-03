import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  public userSession: any = {};

  public currentPage: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        this.getPath(val.url);
      }
    });
  }

  ngOnInit(): void {
    this.userSession = JSON.parse(localStorage.getItem('user')!);
  }

  getPath(url: string) {
    const extractUrl = url.split('/');
    this.currentPage = extractUrl[2];
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  goToPage(page: string) {
    this.router.navigate([`index/${page}`]);
  }

}
