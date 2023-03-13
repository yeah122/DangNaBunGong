package com.example.dang_na_bun_gong.Entity;

import lombok.Data;

import javax.persistence.*;

@Entity(name = "region")
@Data
public class RegionEntity {

    @Id
    @Column(name="region_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="region_b_code", nullable = false)
    private String bcode;

    @Column(name="region_sido", nullable = false)
    private String sido;

    @Column(name="region_name", nullable = false)
    private String name;

}