import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private messageService: MessageService
  ) { }

  public showAlert({ severity, summary, detail }: any) {
    this.messageService.add({severity, summary, detail});
  }
}
