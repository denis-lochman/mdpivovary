import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from '../../models/brewery.model';

@Component({
  selector: 'brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {
  @Input('brewery') brewery: Brewery;

  constructor() { }

  ngOnInit() {
  }

}
