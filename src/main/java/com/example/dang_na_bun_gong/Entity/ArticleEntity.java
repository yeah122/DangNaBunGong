package com.example.dang_na_bun_gong.Entity;

import com.example.dang_na_bun_gong.DTO.ArticleWriteDto;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity(name = "article")
@Data
public class ArticleEntity {
    @Id
    @Column(name="article_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer articleid;
    @Column(name="article_title", nullable = false)
    private String articletitle;
    @Column(name="article_content_fp", nullable = false)
    private String articlecontentfp;

    @Column(name="sell_member_id")
    private String sellmemberid;
    @Column(name="photo_cnt")
    private Integer photocnt;
    @Column(name="photo_fp")
    private String photofp;
    private String price;

    @Column(name="product_category_id")
    private Integer productcategoryid;
    @Column(name="region_id")
    private Integer regionid;
    @Column(name="region_name")
    private String regionname;

    @Column(name="like_cnt")
    private Integer likecnt;
    @Column(name="buy_member_id")
    private String buymemberid;
    @Column(name="review_key")
    private String reviewkey;

    private String review;

    @Column(name="article_changed")
    private Timestamp articlechanged;

    @Column(name="article_created")
    private Timestamp articlecreatede;

public static ArticleEntity toSaveEntity(ArticleWriteDto articleWriteDto) {
    ArticleEntity articleEntity = new ArticleEntity();
    articleEntity.setArticleid(articleWriteDto.getArticleid());
    articleEntity.setArticletitle(articleWriteDto.getArticletitle());
    articleEntity.setArticlecontentfp(articleWriteDto.getArticlecontentfp());
    articleEntity.setSellmemberid(articleWriteDto.getSellmemberid());
    articleEntity.setPhotocnt(articleWriteDto.getPhotocnt());
    articleEntity.setPhotofp(articleWriteDto.getPhotofp());
    articleEntity.setPrice(articleWriteDto.getPrice());
    articleEntity.setArticlecreatede(articleWriteDto.getArticlecreatede());
    articleEntity.setRegionid(articleWriteDto.getRegionid());
    articleEntity.setRegionname(articleWriteDto.getRegionname());
    articleEntity.setProductcategoryid(articleWriteDto.getProductcategoryid());
    articleEntity.setLikecnt(0);
    LocalDateTime now = LocalDateTime.now();
    articleEntity.setArticlecreatede(Timestamp.valueOf(now));
    return articleEntity;
}
}
