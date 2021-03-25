export interface MusicList {
    resultCount: number;
    results: Songarr[];
  }
  
  export interface Songarr {
    artistName: string;
    trackName: string;
    collectionName: string;
    country: string;
    trackNumber: number;
    primaryGenreName: string;
  }
  