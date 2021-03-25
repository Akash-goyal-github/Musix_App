import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AlbumSongComponent } from './album-song.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlbumSongComponent', () => {
  let component: AlbumSongComponent;
  let fixture: ComponentFixture<AlbumSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumSongComponent ],
      imports:[
        RouterTestingModule,
        BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    LayoutModule,
    MatListModule,
    HttpClientModule,
    Ng2SearchPipeModule,

    FormsModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Album by Search is done`, async(() => {
    component.passQueryString();
    expect(component.testsearch).toBeTruthy();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
