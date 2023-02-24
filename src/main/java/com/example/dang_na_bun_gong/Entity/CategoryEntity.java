package com.example.dang_na_bun_gong.Entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity(name = "article_category")
@Data
public class CategoryEntity {

	@Id
	@Column(name="product_category_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pcategoryid;
	
	@Column(name="product_b_category", nullable = false)
	private String bcategory;

	@Column(name="product_s_category", nullable = false)
	private String scategory;

}
