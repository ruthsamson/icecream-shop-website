import { Injectable } from '@angular/core';
import { Icecream } from './icecream';
import { ICECREAM } from './icecream-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class IcecreamService {

  getIcecream():Observable<Icecream[]> {
      this.messageService.add('IcecreamService: fetched icecream')
      return of(ICECREAM);
    }


  constructor(private messageService: MessageService) { }
}
