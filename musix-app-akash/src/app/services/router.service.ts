import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  routeToDashboard(){
    this.router.navigate(['dashboard']);
  }

  routeToAlbumView() {
    this.router.navigate(['dashboard','AlbumSong']);
  }

  routeToArtistView() {
    this.router.navigate(['dashboard','ArtistSong']);
  }

  routeToVideoSongView(){
    this.router.navigate(['dashboard','VideoSong']);
  }

  routeToHome(){
    this.router.navigate(['home']);
  }


}
