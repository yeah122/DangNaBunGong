package com.example.dang_na_bun_gong.Entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "article")
@Data
public class ArticleEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="article_id", nullable = false)
	private Integer articleid;
	
	@Column(name="sell_member_id", nullable = false)
	private String sellmemberid;
	@Column(name="article_created", nullable = false)
	private Timestamp articlecreated;
	@Column(name="article_title", nullable = false)
	private String	articletitle;
	@Column(name="photo_cnt", nullable = false)
	private int photocnt;
	@Column(name="photo_fp", nullable = false)
	private String photofp;
	@Column(name="price", nullable = false)
	private String price;
	@Column(name="product_category_id", nullable = false)
	private int productcategoryid;
	@Column(name="region_id", nullable = false)
	private int regionid;
	@Column(name="article_content_fp", nullable = false)
	private String articlecontentfp;
	@Column(name="like_cntd", nullable = false)
	private int likecnt;
	@Column(name = "article_changed")
	private Timestamp articlechanged;
	@Column(name = "buy_member_id")
	private String buymemberid;
	@Column(name = "review_key")
	private String reviewkey;
	@Column(name = "review")
	private String review;

}
