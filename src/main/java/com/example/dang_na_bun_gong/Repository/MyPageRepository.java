package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.DTO.ArticleDto;
import com.example.dang_na_bun_gong.DTO.MemberDto;
import com.example.dang_na_bun_gong.Entity.BoardEntity;
import com.example.dang_na_bun_gong.Entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyPageRepository extends JpaRepository<BoardEntity, Integer>, JpaSpecificationExecutor<BoardEntity> {

    @Query(value = "Select article_id, photo_fp From article where article.sell_member_id = :memberid Order by article_created DESC limit 5", nativeQuery = true)
    List<ArticleDto> sellList(String memberid);

    @Query(value = "Select article_id, photo_fp From article where article.buy_member_id = :memberid Order by article_created DESC limit 5", nativeQuery = true)
    List<ArticleDto> buyList(String memberid);

    @Query(value = "Select member_nickname, member_photo_fp, member_intro From member where member_id = :memberid", nativeQuery = true)
    List<MemberDto> memberInfo(String memberid);

    @Query(value = "Select article.article_id, article.photo_fp From article join bookmark where bookmark.member_id = :memberid AND article.article_id = bookmark.article_id AND bookmark.like = 1 Order by bookmark.bookmarknuml DESC limit 5", nativeQuery = true)
    List<ArticleDto> likeList(String memberid);

    @Query(value = "select :review, count(review_key = :review) From article where sell_member_id = :memberid", nativeQuery = true)
    List<ArticleDto> reviewCount(String memberid, String review);

    @Query(value = "select sell_member_id from article where article_id = :articleId", nativeQuery = true)
    String getmemberid(String articleId);
}