import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BreweriesService } from '../services/breweries-service.service';
import { Brewery } from '../../models/brewery.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brewery-form',
  templateUrl: './brewery-form.component.html',
  styleUrls: ['./brewery-form.component.css']
})
export class BreweryFormComponent implements OnInit, OnDestroy {
  brewery: Brewery = {
    id: '',
    name: '',
    city: '',
    state: '',
    logoUrl: '',
    gypsy: false    
  };

  private _breweryId: string;
  private _brewerySub: Subscription;

  constructor(
    private _breweriesService: BreweriesService,
    private _router: Router,
    private _route: ActivatedRoute) {
      this._breweryId = this._route.snapshot.paramMap.get('breweryId');

      if(this._breweryId)
        this._brewerySub = this._breweriesService.getBrewery(this._breweryId).subscribe(brewery => this.brewery = brewery);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._brewerySub.unsubscribe();
  }

  submitBrewery(brewery: Brewery): void {    
    if(this._breweryId) {
      brewery.id = this._breweryId;
      this._breweriesService.setExistingBrewery(brewery);
    }
    else
      this._breweriesService.addNewBrewery(brewery);

    this._router.navigate(['/home']);
  }
}
