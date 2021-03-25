import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-video-songs',
  templateUrl: './video-songs.component.html',
  styleUrls: ['./video-songs.component.css']
})
export class VideoSongsComponent implements OnInit {

  
  panelOpenState = false;
  constructor(private routerservice:RouterService) { }

  ngOnInit(): void {
  }
  goToArtist(){
    this.routerservice.routeToArtistView();

  }
  goToAlbum(){
    this.routerservice.routeToAlbumView();

  }
}
