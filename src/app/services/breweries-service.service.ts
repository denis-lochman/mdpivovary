import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private _db: AngularFireDatabase) { }

  getAllBreweries(): Observable<any[]> {
    return this._db.list("breweries").valueChanges();
  }
}
