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

  constructor(private _breweriesService: BreweriesService) { }

  ngOnInit() {
    this.$breweries = this._breweriesService.getAllBreweries();
  }

}
