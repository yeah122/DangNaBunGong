package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.DTO.ArticleDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.dang_na_bun_gong.Entity.BoardEntity;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer>, JpaSpecificationExecutor<BoardEntity> {
	Page<BoardEntity> findByTitleContaining(String searchKeyword, Pageable pageable);

	@Query(value = "SELECT article_id, article_title, article_content_fp, price, article.region_id, region.region_name FROM article join region on article.region_id = region.region_id ORDER BY article_created DESC LIMIT 15", nativeQuery = true)
	List<ArticleDto> currentArticle();

	@Query(value = "SELECT article_id, article_title, article_content_fp, price, article.region_id, region.region_name FROM article join region on article.region_id = region.region_id ORDER BY like_cnt DESC LIMIT 15", nativeQuery = true)
	List<ArticleDto> popularArticle();
}
