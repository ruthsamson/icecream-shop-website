import { Component, OnInit } from '@angular/core';
import { Icecream } from '../icecream';
import { ICECREAM } from '../icecream-list';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {
  icecream = ICECREAM;

  selectedIcecream?: Icecream;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(icecream: Icecream): void {
    this.selectedIcecream = icecream;
  }

}
