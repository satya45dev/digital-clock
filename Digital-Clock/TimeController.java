package com.digital_clock.Digital.Clock;

import org.springframework.web.bind.annotation.*;
import java.time.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allows frontend to fetch without CORS errors
public class TimeController {

    @GetMapping("/time")
    public Map<String, Object> getTime(@RequestParam(required = false, defaultValue = "local") String timezone) {
        ZonedDateTime now;
        
        // Handle the requested time zone
        if ("local".equalsIgnoreCase(timezone)) {
            now = ZonedDateTime.now(ZoneId.systemDefault());
        } else {
            try {
                now = ZonedDateTime.now(ZoneId.of(timezone));
            } catch (Exception e) {
                now = ZonedDateTime.now(ZoneId.of("UTC")); 
            }
        }

        // Build a structured JSON response passing exact integers (100% bug-proof for JS)
        Map<String, Object> response = new HashMap<>();
        response.put("year", now.getYear());
        response.put("month", now.getMonthValue());
        response.put("day", now.getDayOfMonth());
        response.put("hours", now.getHour());
        response.put("minutes", now.getMinute());
        response.put("seconds", now.getSecond());
        
        return response;
    }
}