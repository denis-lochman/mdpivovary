import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../models/brewery.model';
import { BreweriesService } from '../services/breweries-service.service';

@Component({
  selector: 'add-brewery',
  templateUrl: './add-brewery.component.html',
  styleUrls: ['./add-brewery.component.css']
})
export class AddBreweryComponent implements OnInit {
  breweryToAdd: Brewery;

  constructor(private _breweriesService: BreweriesService) { }

  ngOnInit() {
   
  }

  addNewBrewery(brewery: Brewery): void {    
    this._breweriesService.addNewBrewery(brewery);
  }
}
