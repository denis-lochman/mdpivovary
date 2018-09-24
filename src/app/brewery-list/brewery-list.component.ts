import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brewery } from '../../models/brewery.model';
import { BreweriesService } from '../services/breweries-service.service';

@Component({
  selector: 'brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.css']
})
export class BreweryListComponent implements OnInit {
  $breweries: Observable<Brewery[]>;
  breweries: Brewery[] = [];

  constructor(private _breweriesService: BreweriesService) { }

  ngOnInit() {    
    this._breweriesService.getAllBreweries().subscribe(result => {   
      this.mapToBreweries(result);              
    });  
  } 
  
  mapToBreweries(breweries: any[]): void {
    breweries.forEach(b => {   
      var brewery: Brewery = b.payload.val();
      brewery.id = b.key;
      this.breweries.push(brewery);
    });
  }
}
