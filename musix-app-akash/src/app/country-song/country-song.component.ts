import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterService } from '../services/router.service';
import { SongService } from '../services/song.service';
import { SharedService } from '../shared/shared.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-country-song',
  templateUrl: './country-song.component.html',
  styleUrls: ['./country-song.component.css']
})
export class CountrySongComponent implements OnInit {

    music:any;
    player = new Audio;
    timer:any;
    countrybycode:any;
    contrycode:any;
    isLoggedin:boolean;
  
    testsearch:boolean;

  constructor(private routerservice:RouterService,private songservice:SongService,private sharedservice:SharedService,public dialog: MatDialog) { }

  ngOnInit(): void {

    //by default searching
    this.contrycode="in";
      this.searchSong("arijit singh");
      this.songservice.clearCache();

      this.songservice.getCountryNamebyisoCode().subscribe(
        data=>{
                  this.countrybycode=data['result'];
                  console.log(this.countrybycode);
        },
        error=>{
                  console.log(error);
        }
      )
     

      if(JSON.parse(localStorage.getItem("name"))===null){
      
        this.isLoggedin=false;
  
      }
      else
      {
        this.isLoggedin=true;
      }
  
        
  }
  
//searching
  searching:any;
  search=new FormGroup({
    searchfield: new FormControl('')

  })

//debouncing
  passQueryString() {
    this.testsearch=true;//for testing
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>
    {
      this.apiCall();
    },500);
    
  }

  //searching and calling method to fetch api data
  apiCall(){
    
    if(this.searching=="")
    {
      console.log("yes in this");
      this.songservice.clearCache();
      this.ngOnInit();
    }
    this.searchSong(this.searching);
    
    this.songservice.clearCache();
  }

    //fetching data from api
    searchSong(value) {
      this.songservice.getCountryWiseMusicList(this.contrycode,value).subscribe(music => {
        this.music = music;
      })
    }
  
  playSong(audio) {
    this.player.pause();
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio) {
    this.player.pause();
  }

  passvaluetocomment(trackname,trackId,trackImage){
    this.sharedservice.setcommentdataState(trackname,trackId,trackImage);
  }


  askingtocomment(){
    this.openDialog();

  }

  
  openDialog() {
    this.dialog.open(DialogComponent);
  }

  
  onOptionsSelected(contrycode:string){
    this.contrycode=contrycode;
    console.log("the selected value is " + contrycode);
}

}
