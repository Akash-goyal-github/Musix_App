  export class User{
    id:string;
    artistId:number;
    collectionId:number;
    trackId:number;
    artistName:string;
    collectionName:string;
    trackName:string;
    artistViewUrl:string;
    collectionViewUrl:string;
    trackViewUrl:string;
    previewUrl:string;
    artworkUrl60:string;
    artworkUrl100:string;
    country:string;
    primaryGenreName:string;
    addfav:boolean;

  constructor()
  {
    this.id="";
    this.artistName='';
    this.collectionName='';
    this.trackName='';
    this.artistViewUrl='';
    this.collectionViewUrl='';
    this.trackViewUrl='';
    this.previewUrl='';
    this.artworkUrl60='';
    this.artworkUrl100='';
    this.country='';
    this.primaryGenreName='';
    this.addfav=false;
  }
}

