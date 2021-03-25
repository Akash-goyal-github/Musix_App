package com.example.demo.model;

import javax.annotation.processing.Generated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection= "Favourite")
public class Favourite {
	
	@Id
	private int id;
	private String userEmail;
	private String trackId;
	private String trackName;
	private String artistName;
	private String albumName;
	private String trackurl;
	private String trackGenre;
	private boolean isaddedtofav=false;
	
	public Favourite() {
		
	}


	public Favourite(int id, String userEmail, String trackId, String trackName, String artistName, String albumName,
			String trackurl, String trackGenre, boolean isaddedtofav) {
		super();
		this.id = id;
		this.userEmail = userEmail;
		this.trackId = trackId;
		this.trackName = trackName;
		this.artistName = artistName;
		this.albumName = albumName;
		this.trackurl = trackurl;
		this.trackGenre = trackGenre;
		this.isaddedtofav = isaddedtofav;
	}





	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
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

	

	public boolean isIsaddedtofav() {
		return isaddedtofav;
	}


	public void setIsaddedtofav(boolean isaddedtofav) {
		this.isaddedtofav = isaddedtofav;
	}


	@Override
	public String toString() {
		return "Favourite [id=" + id + ", userEmail=" + userEmail + ", trackId=" + trackId + ", trackName=" + trackName
				+ ", artistName=" + artistName + ", albumName=" + albumName + ", trackurl=" + trackurl + ", trackGenre="
				+ trackGenre + ", isaddedtofav=" + isaddedtofav + "]";
	}


	
	
	

}
