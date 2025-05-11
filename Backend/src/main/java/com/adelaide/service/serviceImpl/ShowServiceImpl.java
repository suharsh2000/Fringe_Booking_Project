package com.adelaide.service.serviceImpl;

import com.adelaide.dto.ShowDto;
import com.adelaide.entity.Show;
import com.adelaide.repo.ShowRepository;
import com.adelaide.service.ShowService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShowServiceImpl implements ShowService {
    @Autowired
    private ShowRepository repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public ShowDto addShow(ShowDto showDto) {
        Show show = mapper.map(showDto, Show.class);
        repo.save(show);
        return mapper.map(show, ShowDto.class);
    }

    @Override
    public ShowDto updateShow(ShowDto showDto) {
        Optional<Show> show = repo.findById(showDto.getId());
        Show show2 = new Show();
        if (show.isPresent()) {
            show2.setStartDate(showDto.getStartDate());
            show2.setStartDate(showDto.getEndDate());
            show2.setDescription(showDto.getDescription());
            show2.setTitle(showDto.getTitle());
            show2.setLocation(showDto.getLocation());
            show2.setImageUrl(showDto.getImageUrl());
            show2.setTime(showDto.getTime());
        }
        repo.save(show2);
        return mapper.map(show, ShowDto.class);
    }

    @Override
    public boolean deleteShow(int id) {
        Optional<Show> show = repo.findById(id);
        show.ifPresent(value -> repo.delete(value));
        return true;
    }

    @Override
    public List<ShowDto> getAllShows() {
        return repo.findAll().stream().map(dto -> mapper.map(dto, ShowDto.class)).toList();
    }

    @Override
    public ShowDto getShow(int id) {
        Optional<Show> show = repo.findById(id);
        return mapper.map(show, ShowDto.class);
    }

    @Override
    public ShowDto updateShowStatus(ShowDto showDto) {
        System.out.println(showDto.getStatus());
        Optional<Show> optionalShow = repo.findById(showDto.getId());

        if (optionalShow.isPresent()) {
            Show show = optionalShow.get();
            show.setStatus(showDto.getStatus());
            show.setNoOfSeats(showDto.getNoOfSeats());
            show.setUserId(showDto.getUserId());
            Show updatedShow = repo.save(show);
            return mapper.map(updatedShow, ShowDto.class);
        } else {
            throw new EntityNotFoundException("Show not found with ID: " + showDto.getId());
        }
    }

}
