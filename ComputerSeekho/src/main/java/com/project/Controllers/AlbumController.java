package com.project.Controllers;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Album;
import com.project.Services.AlbumService;

@RestController
@RequestMapping("/api/album")
public class AlbumController {
	@Autowired
	private AlbumService albumService;

	@GetMapping("/getById/{albumId}")
	public ResponseEntity<Album> getAlbumById(@PathVariable int albumId) {
		Optional<Album> album = albumService.getAlbumById(albumId);
		if (album.isPresent())
			return new ResponseEntity<>(album.get(), HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}

	@GetMapping("/all")
	public List<Album> getAllAlbums() {
		return albumService.getAllAlbums();
	}

	@PostMapping("/add")
	public ResponseEntity<Album> addAlbum(@RequestBody Album album) {
		Album album1 = albumService.addAlbum(album);
		return ResponseEntity.status(HttpStatus.CREATED).body(album1);
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateAlbum(@RequestBody Album album) {
		boolean isUpdated = albumService.updateAlbum(album);
		if (isUpdated)
			return new ResponseEntity<>("Album Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the album", HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/delete/{albumId}")
	public ResponseEntity<String> deleteAlbum(@PathVariable int albumId) {
		albumService.deleteAlbum(albumId);
		return ResponseEntity.ok().body("Album Deleted");
	}
}
