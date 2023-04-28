package com.example.dang_na_bun_gong.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "bookmark")
public class BookMarkEntity {

    @Column(name = "member_id")
    private String member;


    @Column(name = "article_id")
    private Integer article;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "like")
    private Integer like;

}
