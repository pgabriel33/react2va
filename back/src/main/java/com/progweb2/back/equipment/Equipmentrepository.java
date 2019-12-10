package com.progweb2.back.equipment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface Equipmentrepository extends JpaRepository<equipment, Long> {

    public List<equipment> findByName(String name);

}
