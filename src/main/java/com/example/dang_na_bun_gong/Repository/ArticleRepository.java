package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleEntity, Integer> {

}
