import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  title:string;
  content:string;

  constructor(private sharedservice:SharedService) { }

  ngOnInit(): void {
    
  this.title=this.sharedservice.getdialogtitle();
  this.content=this.sharedservice.getdialogcontent();
  }



}
