package com.progweb2.back.equipment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/equipments")
public class equipmentcontroller {

    @Autowired
    equipmentservice equipmentservice;

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody equipment equipment) {
        return null;
    }

    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody equipment equipment) {
        return null;
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        return null;
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(equipmentservice.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        return null;
    }

}
