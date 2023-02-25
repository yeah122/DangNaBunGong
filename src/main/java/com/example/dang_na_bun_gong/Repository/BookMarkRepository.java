package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.BookMarkEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookMarkRepository extends JpaRepository<BookMarkEntity, Integer> {
    BookMarkEntity findByMemberAndArticle(Integer articleId, String memberId);
}
