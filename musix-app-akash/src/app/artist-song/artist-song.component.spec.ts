import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSongComponent } from './artist-song.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

describe('ArtistSongComponent', () => {
  let component: ArtistSongComponent;
  let fixture: ComponentFixture<ArtistSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSongComponent ],
      imports:[
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
