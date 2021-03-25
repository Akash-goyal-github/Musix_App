import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongService } from '../services/song.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {


  musics:any;
  favmusicbyid:any;
  player = new Audio;
  searching:any;
  p:number=1;
  panelOpenState = false;
  isLoggedin:boolean;
  constructor(private songservice:SongService,private sharedservice:SharedService) {
    if(JSON.parse(localStorage.getItem("name"))===null){
      this.isLoggedin=true;
    }
    else
    {
      this.isLoggedin=false;
    }
   }

  ngOnInit(): void {
    this.songservice.getFavouriteSongs().subscribe(data => {
      this.musics = data;

      this.favmusicbyid = this.musics.filter(music => music.userEmail == JSON.parse(localStorage.getItem("userid")));

      // console.log(this.musics);
      // console.log(this.musics[0].artistName);
      // console.log(this.musics[0].albumName);
    })
  }
  playSong(audio) {
    this.player.pause();
    this.player.src = audio.trackurl;
    this.player.play();
  }
  stopSong(audio) {
    this.player.pause();
  }

  passvaluetocomment(trackname,trackId){
    this.sharedservice.setcommentdataState(trackname,trackId,"https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg");
  }


  //searching
  Searchingfun(){
    if(this.searching=="")
    {
      this.ngOnInit();
    }
    else{
      this.favmusicbyid=this.favmusicbyid.filter(res=>{
        return res.trackName.toLocaleLowerCase().match(this.searching.toLocaleLowerCase());
      });
    }
  }


}
