package com.scarycoders.learn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by mohammad on 18/3/17.
 */
@Controller
public class HomePagelanding {

  @GetMapping(value = "/")
  public String landingPage(){
    return "index";
  }
}
