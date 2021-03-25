package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection= "Recommendwithcounter")
public class Recommendwithcounter {
	
	
	@Id
	private String trackId;
	private String trackName;
	private String artistName;
	private String albumName;
	private String trackurl;
	private String trackGenre;
	private int counter;
	
	public Recommendwithcounter() {
		
	}
	public Recommendwithcounter(String trackId, String trackName, String artistName, String albumName,
			String trackurl, String trackGenre, int counter) {
		super();
		this.trackId = trackId;
		this.trackName = trackName;
		this.artistName = artistName;
		this.albumName = albumName;
		this.trackurl = trackurl;
		this.trackGenre = trackGenre;
		this.counter = counter;
	}



	public String getTrackId() {
		return trackId;
	}


	public void setTrackId(String trackId) {
		this.trackId = trackId;
	}


	public String getTrackName() {
		return trackName;
	}


	public void setTrackName(String trackName) {
		this.trackName = trackName;
	}


	public String getArtistName() {
		return artistName;
	}


	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}


	public String getAlbumName() {
		return albumName;
	}


	public void setAlbumName(String albumName) {
		this.albumName = albumName;
	}


	public String getTrackurl() {
		return trackurl;
	}


	public void setTrackurl(String trackurl) {
		this.trackurl = trackurl;
	}


	public String getTrackGenre() {
		return trackGenre;
	}


	public void setTrackGenre(String trackGenre) {
		this.trackGenre = trackGenre;
	}



	public int getCounter() {
		return counter;
	}



	public void setCounter(int counter) {
		this.counter = counter;
	}



	@Override
	public String toString() {
		return "Recommendwithcounter [trackId=" + trackId + ", trackName=" + trackName + ", artistName="
				+ artistName + ", albumName=" + albumName + ", trackurl=" + trackurl + ", trackGenre=" + trackGenre
				+ ", counter=" + counter + "]";
	}


	
	

}
