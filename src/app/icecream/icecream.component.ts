import { Component, OnInit } from '@angular/core';
import { Icecream } from '../icecream';
import { ICECREAM } from '../icecream-list';
import { IcecreamService } from '../icecream.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {
  icecream?: Icecream[];

  selectedIcecream?: Icecream;

  constructor(private icecreamService: IcecreamService, private messageService: MessageService) { }

  getIcecream(): void {
    this.icecreamService.getIcecream().subscribe(icecream => this.icecream = icecream);
  }

  ngOnInit(): void {
    this.getIcecream();
  }

  onSelect(icecream: Icecream): void {
    this.selectedIcecream = icecream;
    this.messageService.add(`IcecreamComponent: Selected icecream id= ${icecream.id}`);
  }

}
