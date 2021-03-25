import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MusicList,Songarr } from '../music-list';
import { publishReplay, refCount } from 'rxjs/operators';
import { comments } from '../comment';
import { tap } from 'rxjs/operators';
import { favouriteSong } from '../favouriteSong';
import { recommendedSong } from '../recommendedSong';
import { registeruser } from '../registeruser';
import { recommendedcounter } from '../recommendcounter';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  allcomment: Array<comments>=[];

  subject:BehaviorSubject<Array<comments>>=new BehaviorSubject(this.allcomment);

  constructor(private httpclient:HttpClient) {
    this.fetchCommentsFromeServer();
   }

  newsongcomment: comments = new comments();

  favsong: favouriteSong = new favouriteSong();

  recsong: recommendedSong = new recommendedSong();
  reccounter: recommendedcounter = new recommendedcounter();

  registerUser: registeruser = new registeruser();

  fetchCommentsFromeServer(){
    return this.httpclient.get<Array<comments>>('http://localhost:3005/comments').subscribe((data)=>{
      this.allcomment=data;
      this.subject.next(this.allcomment);
    });
 
  }

  registeringuser(registerUser: registeruser): Observable<registeruser> {

    return this.httpclient.post<registeruser>('http://localhost:8282/register',registerUser);

  }

  getComments(): Observable<Array<comments>> {
        return this.subject;
      }

  addComments(givecomment: comments): Observable<comments> {

    
    return this.httpclient.post<comments>('http://localhost:3005/comments',givecomment).pipe(tap(
      newcomment=>{
        console.log(newcomment);
        this.allcomment.push(newcomment);
        this.subject.next(this.allcomment);
      }
    ));
  }


  addtofavourite(addfavouritesong: favouriteSong): Observable<favouriteSong> {

    
    return this.httpclient.post<favouriteSong>('http://localhost:8080/favourites/addtofav',addfavouritesong);
  }
  
  getFavouriteSongs(): Observable<Array<favouriteSong>> {
    return this.httpclient.get<Array<favouriteSong>>('http://localhost:8080/favourites/getallfav');
  }



  addtorecommendation(addrecommendation:recommendedSong): Observable<recommendedSong> {

    
    return this.httpclient.post<recommendedSong>('http://localhost:8080/recommend/addtorecommend',addrecommendation);
  }
  
  getRecommendedSongs(): Observable<Array<recommendedSong>> {
    return this.httpclient.get<Array<recommendedSong>>('http://localhost:8080/recommend/getallrecommend');
  }


  addtorecommendationcounter(addrecommendationcounter:recommendedcounter): Observable<recommendedcounter> {

    
    return this.httpclient.post<recommendedcounter>('http://localhost:8080/recommendcounter/addtorecommendcounter',addrecommendationcounter);
  }


  getrecommendationcounter(): Observable<Array<recommendedcounter>> {
    return this.httpclient.get<Array<recommendedcounter>>('http://localhost:8080/recommendcounter/getallrecommendcounter');
  }

  getRegisteredUser(userid:String):Observable<registeruser>{
    return this.httpclient.get<registeruser>(`http://localhost:8282/getuserdetails/${userid}`);
  }


  getCountryNamebyisoCode():Observable<any>{

    return this.httpclient.get<any>('https://api.printful.com/countries');

  }

  //fetching itune data
  iTunesUrl = 'https://itunes.apple.com/search'; 
  musicList: Observable<MusicList[]>;


  getMusicList(queryString): Observable<MusicList[]> {


    console.log(queryString);
    
      if (!this.musicList) {
        this.musicList = this.httpclient.get<MusicList[]>(`${this.iTunesUrl}?term=${queryString}`).pipe(
          publishReplay(1),
          refCount()
        );  
      }
      console.log(this.musicList);
      return this.musicList;
      
  
  }


  //Getting country specific song data

  getCountryWiseMusicList(countrycode,song): Observable<MusicList[]> {

      if (!this.musicList) {
        this.musicList = this.httpclient.get<MusicList[]>(`${this.iTunesUrl}?term=${song}&country=${countrycode}`).pipe(
          publishReplay(1),
          refCount()
        );  
      }
      console.log(this.musicList);
      return this.musicList;
      
  
  }

  clearCache() {
    this.musicList = null;
  }

      //Getting artist specific song data

      getArtistWiseMusicList(artistname): Observable<MusicList[]> {

        if (!this.musicList) {
          this.musicList = this.httpclient.get<MusicList[]>(`${this.iTunesUrl}?term=${artistname}&artistName=${artistname}`).pipe(
            publishReplay(1),
            refCount()
          );  
        }
        console.log(this.musicList);
        return this.musicList;
        

    }

    //Getting Album specific song data
    getAlbumWiseMusicList(albumname): Observable<MusicList[]> {

      if (!this.musicList) {
        this.musicList = this.httpclient.get<MusicList[]>(`${this.iTunesUrl}?term=${albumname}&collectionName=${albumname}`).pipe(
          publishReplay(1),
          refCount()
        );  
      }
      console.log(this.musicList);
      return this.musicList;
      

  }

}
