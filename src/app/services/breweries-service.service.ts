import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Brewery } from '../../models/brewery.model';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private _db: AngularFireDatabase) { }

  getAllBreweries(): Observable<any[]> {
    return this._db.list("breweries", ref => ref.orderByChild("name")).snapshotChanges();
  }

  getBrewery(breweryId: string): Observable<any> {
    return this._db.object('breweries/' + breweryId).valueChanges();
  }

  addNewBrewery(brewery: Brewery): void {    
    this._db.list("breweries").push(brewery);
  }

  setExistingBrewery(brewery: Brewery): void {    
    this._db.object('breweries/' + brewery.id).set(brewery);
  }
}
