import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BreweryComponent } from './brewery/brewery.component';
import { BreweryListComponent } from './brewery-list/brewery-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


import { AddBreweryComponent } from './add-brewery/add-brewery.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { BreweryFormComponent } from './brewery-form/brewery-form.component';
import { BreweriesService } from './services/breweries-service.service';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    BreweryComponent,
    BreweryListComponent,
    AddBreweryComponent,
    NavbarComponent,
    HomeComponent,
    BreweryFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ClipboardModule,
    AngularFireModule.initializeApp(environment.firebase),       
    AngularFireDatabaseModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [ 
    BreweriesService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
