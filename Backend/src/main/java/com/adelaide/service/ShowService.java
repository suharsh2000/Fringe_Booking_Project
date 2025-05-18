package com.adelaide.service;

import com.adelaide.dto.ShowDto;

import java.util.List;

public interface ShowService {
    ShowDto addShow(ShowDto showDto);

    ShowDto updateShow(ShowDto showDto);

    boolean deleteShow(int id);

    List<ShowDto> getAllShows();

    ShowDto getShow(int id);

    ShowDto updateShowStatus(ShowDto showDto);
}
