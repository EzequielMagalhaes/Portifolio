package com.forms.controllers;

import com.domain.ContactForm;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ContactFormController {

    @RequestMapping(path = "/contact", method = RequestMethod.POST)
    public String contactFormSubmission(@Valid @ModelAttribute final ContactForm contactForm){

        return "redirect:success.html";
    }
}