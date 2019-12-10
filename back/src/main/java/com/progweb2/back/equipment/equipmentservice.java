package com.progweb2.back.equipment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class equipmentservice {

    @Autowired
    Equipmentrepository Equipmentrepository;

    public equipment save(equipment equipment){
        return Equipmentrepository.save(equipment);
    }

    public equipment update(equipment equipment){ return null;}

    public boolean delete(long id){ return true;}

    public List<equipment> findAll(){ return Equipmentrepository.findAll(); }

    public equipment findById(long id){ return null;}

    public List<equipment> findByName(String name){ return null;}

}
