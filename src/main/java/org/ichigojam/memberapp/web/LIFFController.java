package org.ichigojam.memberapp.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LIFFController {

    @GetMapping("/liff")
    public String liff(Model model) {
        return "liff";
    }
}
