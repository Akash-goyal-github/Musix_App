import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication-service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
      ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have title as 'Home Page'`, async(() => {
    expect(component.text).toEqual('Home page');
  }));


  it(`form should be invalid`, async(() => {
    component.registerForm.controls['name'].setValue('');
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['pass'].setValue('');
    component.registerForm.controls['confpass'].setValue('');
    component.registerForm.controls['image'].setValue('');

    expect(component.registerForm.valid).toBeFalsy();

  }));

  it(`form should be Valid`, async(() => {
    component.registerForm.controls['name'].setValue('akash');
    component.registerForm.controls['email'].setValue('ak@gmail.com');
    component.registerForm.controls['pass'].setValue('12345678');
    component.registerForm.controls['confpass'].setValue('12345678');
    component.registerForm.controls['image'].setValue('picture.png');

    expect(component.registerForm.valid).toBeTruthy();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
