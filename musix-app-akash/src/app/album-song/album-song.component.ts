import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { favouriteSong } from '../favouriteSong';
import { recommendedSong } from '../recommendedSong';
import { RouterService } from '../services/router.service';
import { SongService } from '../services/song.service';
import { SharedService } from '../shared/shared.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { recommendedcounter } from '../recommendcounter';

@Component({
  selector: 'app-album-song',
  templateUrl: './album-song.component.html',
  styleUrls: ['./album-song.component.css']
})
export class AlbumSongComponent implements OnInit {

  
  music:any;
  player = new Audio;
  timer:any;
  recsong: recommendedSong = new recommendedSong();
  favflag:number=0;
  checkfav:any;
  favsong: favouriteSong = new favouriteSong();
  recflag:number=0;
  checkrec:any;
  count:number=0;
  recommendcount:recommendedcounter=new recommendedcounter();
  countadded:number=0;
  counterrec:any;
  isLoggedin:boolean;

  testsearch:boolean;

    constructor(private routerservice:RouterService,private songservice:SongService,private sharedservice:SharedService,public dialog: MatDialog) { }

    ngOnInit(): void {

      //by default searching
        this.searchSong("Love");
        this.songservice.clearCache();

        
         this.songservice.getFavouriteSongs().subscribe(data => {
        this.checkfav = data;
      });

        this.songservice.getRecommendedSongs().subscribe(data => {
          this.checkrec = data;
        });

        this.songservice.getrecommendationcounter().subscribe(data => {
          this.counterrec = data;
          
        });
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
      this.testsearch=true;
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
        this.ngOnInit();
      }
      this.searchSong(this.searching);
      
      this.songservice.clearCache();
    }

      //fetching data from api
      searchSong(value) {
        this.songservice.getAlbumWiseMusicList(value).subscribe(music => {
          this.music = music;
        })
      }

      
    openDialog() {
      this.dialog.open(DialogComponent);
    }

      

      addtofav(musicdata){

        
      if(JSON.parse(localStorage.getItem("token"))===null){
        //populate message box
        this.openDialog();
      
        }
        else
        {
  

        
      this.favflag=0;
      
      this.favsong.userEmail=JSON.parse(localStorage.getItem("userid"));
      this.favsong.trackName=musicdata.trackName;
      this.favsong.trackId=musicdata.trackId;
      this.favsong.artistName=musicdata.artistName;
      this.favsong.albumName=musicdata.collectionName;
      this.favsong.trackurl=musicdata.previewUrl;
      this.favsong.trackGenre=musicdata.primaryGenreName;


      this.checkfav.forEach(element => {

        if(element.userEmail==this.favsong.userEmail &&  this.favsong.trackId==element.trackId)
        {
            this.favflag=1;
            console.log(this.favflag);
        }
        
      });

      console.log(this.favflag);

      if(this.favflag==0)
      {

        this.songservice.addtofavourite(this.favsong).subscribe(
          data=>{
            
            console.log("add");
            console.log(data);
            
          },error=>{
            console.error();
          }
        );
  
        this.sharedservice.setdialogtitle("Added");
        this.sharedservice.setdialogcontent("Added in your Favourite list");
        this.openaddDialog();
        this.ngOnInit();
  
      }
      else
      {
        this.sharedservice.setdialogtitle("Already Added");
        this.sharedservice.setdialogcontent("Already in your Favourites");
        this.openaddDialog();
        
      }

       
    }
      }
  
      
  
  
      addtorecommend(musicdata){
        
      if(JSON.parse(localStorage.getItem("token"))===null){
        //populate message box
        this.openDialog();
      
        }
        else
        {
  
  
        this.recflag=0;
      this.recsong.userEmail=JSON.parse(localStorage.getItem("userid"));
      this.recsong.trackName=musicdata.trackName;
      this.recsong.trackId=musicdata.trackId;
      this.recsong.artistName=musicdata.artistName;
      this.recsong.albumName=musicdata.collectionName;
      this.recsong.trackurl=musicdata.previewUrl;
      this.recsong.trackGenre=musicdata.primaryGenreName;

      
      this.checkrec.forEach(element => {

        if(element.userEmail==this.recsong.userEmail &&  this.recsong.trackId==element.trackId)
        {
            this.recflag=1;
            console.log(this.recflag);
        }
        
      });


      if(this.recflag==0)
      {

        this.countadded=0;
        
        this.counterrec.forEach(element => {

          console.log(element);

          if(element.trackId==musicdata.trackId){
            
            console.log("early"+element.counter )
            this.count=element.counter+1;
            

            
            this.recommendcount.counter=this.count;
            this.recommendcount.trackName=musicdata.trackName;
            this.recommendcount.trackId=musicdata.trackId;
            this.recommendcount.artistName=musicdata.artistName;
            this.recommendcount.albumName=musicdata.collectionName;
            this.recommendcount.trackurl=musicdata.previewUrl;
            this.recommendcount.trackGenre=musicdata.primaryGenreName;

            console.log(this.recommendcount.counter);
              this.countadded=1;

          }
      
        });

        if(this.countadded==0){

          this.recommendcount.counter=1;
          this.recommendcount.trackName=musicdata.trackName;
          this.recommendcount.trackId=musicdata.trackId;
          this.recommendcount.artistName=musicdata.artistName;
          this.recommendcount.albumName=musicdata.collectionName;
          this.recommendcount.trackurl=musicdata.previewUrl;
          this.recommendcount.trackGenre=musicdata.primaryGenreName;
        }

        this.songservice.addtorecommendationcounter(this.recommendcount).subscribe(
          data=>{
            console.log(data);
          }
        )

        
        this.songservice.addtorecommendation(this.recsong).subscribe(
          data=>{
            
            
            console.log("add");
            console.log(data);
           
            
          },error=>{
            console.error();
          }
        );
  
        
        this.sharedservice.setdialogtitle("Added");
        this.sharedservice.setdialogcontent("Now Everyone can see your Recommendation");
        this.openaddDialog();
        this.ngOnInit();
      }
      else
      {
        this.sharedservice.setdialogtitle("Alredy in Added");
        this.sharedservice.setdialogcontent("You have already recommended this song");
        this.openaddDialog();
      }
    }
    }
 
    openaddDialog() {
      this.dialog.open(AddDialogComponent);
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

    goToArtist(){
      this.routerservice.routeToArtistView();

    }
    goToCountry(){
      this.routerservice.routeToVideoSongView();

    }

}
