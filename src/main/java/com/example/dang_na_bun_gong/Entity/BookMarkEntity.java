package com.example.dang_na_bun_gong.Entity;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

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
