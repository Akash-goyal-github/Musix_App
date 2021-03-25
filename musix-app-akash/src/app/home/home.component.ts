import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { AbstractControl, FormControl,  FormGroup,  Validator, Validators } from "@angular/forms";
import { HttpService } from './http.service';
import { registeruser } from '../registeruser';
import { SongService } from '../services/song.service';
import { AuthenticationService } from '../services/authentication-service';
import { loginuser } from '../loginuser';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  text='Home page';
  loading = false;
  buttionText = "Submit";
  matchpass:boolean=false;
  imageurl:string;
  imagename:string;
  splitted:any;
  namesplit:any;
  registerUser: registeruser = new registeruser();
  loginUser: loginuser = new loginuser();
  selectedfile=null;


  constructor(private routerservice: RouterService,public http: HttpService, private songservice: SongService,private authService: AuthenticationService,public dialog: MatDialog,private sharedservice:SharedService) { }

  ngOnInit(): void {

  }


  //Registration form----------------------------------------------------------------------------------------------------

  registerForm=new FormGroup({
    
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confpass: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })

  get name(){
    return this.registerForm.get('name');
  }


  get email(){
    return this.registerForm.get('email');
  }

  get pass(){
    return this.registerForm.get('pass');
  }

  get confpass(){
    return this.registerForm.get('confpass');
  }

 
  get image(){
    return this.registerForm.get('image');
  }


  onFileSelected(event){
    this.selectedfile=event.target.files[0];
    console.log(this.selectedfile);
  }


  // converttobinary(dataURI:any):any {
  //   var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
  //   var base64 = dataURI.substring(base64Index);
  //   var raw = window.atob(base64);
  //   var rawLength = raw.length;
  //   var array = new Uint8Array(new ArrayBuffer(rawLength));
  //   var i =0;
  //   for(i = 0; i < rawLength; i++) {
  //     array[i] = raw.charCodeAt(i);
  //   }
  //   return array;
  // }

  register()
  {
    if(this.pass.value===this.confpass.value){


  //     const file = this.selectedfile;
  
  // const reader = new FileReader();
  // let byteArray;

  // reader.addEventListener("loadend", function () {
  //   // convert image file to base64 string
  //   console.log('base64', reader.result);
   
  //   byteArray = this.converttobinary(reader.result);
  //   console.log('byte array', byteArray);
  // }, false);

  // if (file) {
  //   reader.readAsDataURL(file);
  // }

     // console.log(this.selectedfile);
      // const uploadImageData = new FormData();
      // uploadImageData.append('imageFile', this.selectedfile,this.selectedfile.name);

      // console.log("---->"+uploadImageData.get("imageFile"));

      this.imageurl=this.image.value;
       this.splitted =  this.imageurl.split("\\");
       this.imagename=this.splitted[this.splitted.length-1];
       console.log(this.imagename);//Use this for image


      this.registerUser.email=this.email.value;
     
      this.registerUser.name=this.name.value;
      console.log(this.registerUser.name);
      this.registerUser.image=this.imagename;
      this.registerUser.password=this.pass.value;
      console.log(this.registerUser);

      this.songservice.registeringuser(this.registerUser).subscribe(data => {
       
        console.log(data);
        // console.log(this.musics);
        // console.log(this.musics[0].artistName);
        // console.log(this.musics[0].albumName);
      })

       //Email sending

    this.loading = true;
    this.buttionText = "Submiting...";
    console.log(this.email.value);
    console.log(this.name.value);
    let user = {
      name: this.name.value,
      email: this.email.value,
     // Password: this.pass.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submitted";
        
        this.sharedservice.setdialogtitle("Registration Successfull!");
        this.sharedservice.setdialogcontent("Registration Successfull! We have sent you a cofirmation Mail! Thank you");
        this.openaddDialog();
      }
      );
      
    }
    else{
      this.matchpass=true;
      
      this.sharedservice.setdialogtitle("Registration UnSuccessfull!");
      this.sharedservice.setdialogcontent("Registration UnSuccessfull! Password and confirm password should match");
      this.openaddDialog();
      
    }


  }

    //Registration form----------------------------------------------------------------------------------------------------

  //Login form

  loginForm=new FormGroup({
    username: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])

  })

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  signIn()
  {

    this.loginUser.email=this.username.value;
    this.loginUser.password=this.password.value;

    this.authService.authenticateUser(this.loginUser).subscribe(
      data=>{
        console.log(data);
        localStorage.setItem("token",JSON.stringify(data['token']));
        //this.authService.setBearerToken(data['token']);
        


        this.songservice.getRegisteredUser(this.loginUser.email).subscribe(
          data=>{
            console.log(data);
            
            this.namesplit =  data['name'].split(" ");
           

              localStorage.setItem('userid',JSON.stringify(data['email']));
              localStorage.setItem('userimage',JSON.stringify(data['image']));
              localStorage.setItem('name',JSON.stringify(this.namesplit[0]));

            

              this.gotoDashboard();
          }
        )
      },
       err=>{
         this.sharedservice.setdialogtitle("Wrong Credentials");
        this.sharedservice.setdialogcontent("Please check your Credentials!");
        this.openaddDialog();
       
      }
    )


    //userid will be set in local storage


  }

  
  openaddDialog() {
    this.dialog.open(AddDialogComponent);
  }
  

  public gotoDashboard(){
    this.routerservice.routeToDashboard()

  }

  
 

}
