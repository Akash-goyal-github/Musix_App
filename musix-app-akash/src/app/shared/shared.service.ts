import { Injectable } from '@angular/core';
import { commentpassdata } from '../commentpassdata';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  //trackdata:commentpassdata;
  title:string;
  content:string;


  constructor() { }

  trackdata=new commentpassdata();

  setcommentdataState(trackname,trackId,trackImage){
    this.trackdata.trackname=trackname;
    this.trackdata.trackid=trackId;
    this.trackdata.trackImage=trackImage;

  }
 

  getcommentdataState(){
    return this.trackdata;

  }

  setdialogtitle(title:string){
    this.title=title;

  }

  setdialogcontent(content:string){
    this.content=content;

  }

  getdialogtitle(){
    return this.title;
  }
  getdialogcontent(){
    return this.content;

  }
}