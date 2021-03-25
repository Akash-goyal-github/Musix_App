import { Component, OnInit } from '@angular/core';
import { comments } from '../comment';
import { SongService } from '../services/song.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  songcomment:any;

  constructor(private sharedservice:SharedService, private songservice:SongService) { }

  trackpassdata;
  showcomments=[];
  comment_text:any;
  commenter_name:any;
  errMessage: string;
  newsongcomment: comments = new comments();
  newsongcomments: Array<comments> = [];
  successMessage:string;

  ngOnInit(): void {

    this.trackpassdata=this.sharedservice.getcommentdataState();
   

    this.songservice.getComments().subscribe(data => {
      this.songcomment = data;

      
      for(let element in this.songcomment)
      {
      if(this.songcomment[element]['trackid']===this.trackpassdata.trackid)
      {
        //console.log(this.songcomment[element]['trackid']);
        this.showcomments.push(this.songcomment[element]);

      }
      }

      console.log(this.trackpassdata.trackImage);
    })

  }

  cancelComment(){
    this.successMessage="";
  }

  submitComment(){
    this.newsongcomment.trackid=this.trackpassdata.trackid;
    this.newsongcomment.name=this.commenter_name;
    this.newsongcomment.comment=this.comment_text;
    
    console.log(this.newsongcomment);    
    if (!this.commenter_name || !this.comment_text) {
      this.errMessage = 'Name and Comment both are required fields';
      return;
    }
    this.songservice.addComments(this.newsongcomment).subscribe(response => {
      if (response) {
        
        //this.newsongcomments.push(response);
        //this.showcomments=[];
        this.successMessage="Your comment has been successfully submitted";

      } else {
        this.errMessage = 'We are unable to add the selected comment.';
      }
    }, error => {
      this.errMessage = error.message;
    });
  }
}
