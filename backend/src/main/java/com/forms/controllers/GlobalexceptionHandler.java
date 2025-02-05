package com.forms.controllers;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.net.BindException;

@ControllerAdvice
public class GlobalexceptionHandler {

    @ExceptionHandler(BindException.class)
    public String bindException(final BindException bindException){
        return "redirect:error.html";
    }
}
