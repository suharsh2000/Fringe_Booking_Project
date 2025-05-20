package com.adelaide.controller;

import com.adelaide.dto.ShowDto;
import com.adelaide.service.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://fringe-booking.vercel.app")
@RestController
@RequestMapping("/show")
public class ShowController {
    @Autowired
    private ShowService service;

    @PostMapping("/addShow")
    public ShowDto saveShow(@RequestBody ShowDto showDto) {
        return service.addShow(showDto);
    }

    @GetMapping("/getShow/:id")
    public ShowDto getShow(@RequestParam int id) {
        return service.getShow(id);
    }
    @GetMapping("/getAllShows")
    public List<ShowDto> getAll(){
        return service.getAllShows();
    }
    @PutMapping("/updateShow")
    public ShowDto updateShow(@RequestBody ShowDto showDto){
        return service.updateShow(showDto);
    }
    @DeleteMapping("/deleteShow/{id}")
    public boolean deleteShow(@PathVariable int id){
        return service.deleteShow(id);
    }
    @PutMapping("/updateShowStatus")
    public ShowDto updateShowStatus(@RequestBody ShowDto showDto){
        return service.updateShowStatus(showDto);
    }
}
