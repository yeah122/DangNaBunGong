package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import io.swagger.models.auth.In;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleEntity, Integer> {

    @Modifying
    @Query("UPDATE article p SET p.likecnt = p.likecnt + 1 WHERE p.articleid = :postId")
    void increaseLikeCnt(@Param("postId") Integer postId);

    @Modifying
    @Query("UPDATE article p SET p.likecnt = p.likecnt - 1 WHERE p.articleid = :postId")
    void decreaseLikeCnt(@Param("postId") Integer postId);
}
