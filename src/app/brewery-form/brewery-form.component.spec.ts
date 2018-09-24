import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryFormComponent } from './brewery-form.component';
import { BreweriesService } from '../services/breweries-service.service';

describe('BreweryFormComponent', () => {
  let component: BreweryFormComponent;
  let fixture: ComponentFixture<BreweryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryFormComponent ],
      providers: [ BreweriesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  
});
