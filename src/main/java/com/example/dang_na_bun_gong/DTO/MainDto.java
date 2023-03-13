package com.example.dang_na_bun_gong.DTO;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
public class MainDto {
    private String article_title, article_content_fp, price, region_name;
    private Integer article_id ,region_id;

    public MainDto(ArticleDto articleDto){
        this.article_id = articleDto.getArticle_id();
        this.region_id = articleDto.getRegion_id();
        this.article_title = articleDto.getArticle_title();
        this.article_content_fp = articleDto.getArticle_content_fp();
        this.price = articleDto.getPrice();
        this.region_name = articleDto.getRegion_name();
    }
}
