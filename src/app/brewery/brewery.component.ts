import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'
import { Brewery } from '../../models/brewery.model';

@Component({
  selector: 'brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {
  @Input('brewery') brewery: Brewery;  

  constructor(private _clipboardService: ClipboardService) { }

  ngOnInit() {    
  }

  copyBreweryInfo() {
    let breweryString = "° " + this.brewery.name + " -\n" + this.brewery.state + " - " + this.brewery.city;
    this._clipboardService.copyFromContent(breweryString);
  }
}
