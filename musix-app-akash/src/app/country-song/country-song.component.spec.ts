import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySongComponent } from './country-song.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

describe('CountrySongComponent', () => {
  let component: CountrySongComponent;
  let fixture: ComponentFixture<CountrySongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySongComponent ],
      imports:[
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Country Search is done`, async(() => {
    component.passQueryString();
    expect(component.testsearch).toBeTruthy();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
