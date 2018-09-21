import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBreweryComponent } from '../add-brewery/add-brewery.component';
import { BreweryListComponent } from '../brewery-list/brewery-list.component';

const routes: Routes = [
  { path: 'home', component: BreweryListComponent },
  { path: 'add-brewery', component: AddBreweryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
