package com.project.Controllers;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.Entities.Video;
import com.project.Services.VideoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/video")
public class VideoController {
	@Autowired
	private VideoService videoService;

	@GetMapping("/getById/{videoId}")
	public ResponseEntity<Video> getVideoById(@PathVariable int videoId) {
		Optional<Video> video = videoService.getVideoById(videoId);
		if (video.isPresent())
			return new ResponseEntity<>(video.get(), HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}

	@GetMapping("/all")
	public List<Video> getAllVideos() {
		return videoService.getAllVideos();
	}

	@PostMapping("/add")
	public ResponseEntity<Video> addVideo(@RequestBody Video video) {
		Video video1 = videoService.addVideo(video);
		return ResponseEntity.status(HttpStatus.CREATED).body(video1);
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateVideo(@RequestBody Video video) {
		boolean isUpdated = videoService.updateVideo(video);
		if (isUpdated)
			return new ResponseEntity<>("Video Updated", HttpStatus.OK);
		else
			return new ResponseEntity<>("There was a problem updating the Video", HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/delete/{videoId}")
	public ResponseEntity<String> deleteVideo(@PathVariable int videoId) {
		videoService.deleteVideo(videoId);
		return ResponseEntity.ok().body("Video Deleted");
	}

	@GetMapping("/activate/{videoId}")
	public ResponseEntity<String> activateVideo(@PathVariable int videoId, @RequestParam boolean videoIsActive) {
		videoService.activateVideo(videoId, videoIsActive);
		return ResponseEntity.ok().body("Video Activated");
	}

	@GetMapping("/findByBatchId/{batchId}")
	public ResponseEntity<List<Video>> findByBatchId(@PathVariable int batchId) {
		List<Video> videos = videoService.findByBatchId(batchId);
		if (videos.isEmpty())
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok().body(videos);
	}

	@GetMapping("/findByVideoName/{courseId}")
	public ResponseEntity<List<Video>> findByVideoName(@PathVariable int courseId) {
		List<Video> videos = videoService.findByVideoName(courseId);
		if (videos.isEmpty())
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok().body(videos);
	}
}
