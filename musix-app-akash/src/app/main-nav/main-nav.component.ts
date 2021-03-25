import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  userurl:any;
  name:any;
  isLoggedin:boolean=true;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(){

    this.userurl="../../assets/images/"+ JSON.parse(localStorage.getItem('userimage'));
   
    if(JSON.parse(localStorage.getItem("name"))===null){
      this.name="Guest";
      this.isLoggedin=false;

    }
    else
    {
      this.name=JSON.parse(localStorage.getItem("name"));
    }
    



  }

  funct(){
  }

  cleardata(){

    localStorage.removeItem('userid');
    localStorage.removeItem('userimage');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    
    console.log("All Clear");
  }


}
