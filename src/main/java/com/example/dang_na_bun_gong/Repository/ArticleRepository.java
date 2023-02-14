package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dang_na_bun_gong.Entity.ArticleEntity;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleEntity, Integer>{
	Page<ArticleEntity> findByTitleContaining(String searchKeyword, Pageable pageable);
}
