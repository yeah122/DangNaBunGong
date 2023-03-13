package com.example.dang_na_bun_gong.Entity;

import java.sql.Timestamp;

import javax.persistence.*;

import lombok.Data;

@Entity(name = "article")
@Data
public class BoardEntity {

	@Id
	@Column(name="article_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer article_id;

	@Column(name = "article_title", nullable = false)
	private String article_title;

	@Column(name = "article_content_fp", nullable = false)
	private String article_contnet_fp;

	@Column(name = "price", nullable = false)
	private String price;

	@Column(name = "region_id", nullable = false)
	private String regionid;

	//region 에서 region_id 가져와서 사용
	/*@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "region_id")
	private RegionEntity regionId;*/


}
