import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  musics:any;
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
    
    
    this.songservice.getrecommendationcounter().subscribe(data => {
      this.musics = data;
      
    });
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
      this.musics=this.musics.filter(res=>{
        return res.trackName.toLocaleLowerCase().match(this.searching.toLocaleLowerCase());
      });
    }
  }
}

