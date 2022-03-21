import { Component, OnInit, Input } from '@angular/core';
import { Icecream } from '../icecream';

@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.css']
})
export class IcecreamDetailComponent implements OnInit {

  @Input() icecream?: Icecream;

  constructor() { }

  ngOnInit(): void {
  }

}
