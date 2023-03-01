package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.BookMarkEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookMarkRepository extends JpaRepository<BookMarkEntity, Integer> {
    @Query(value = "select * from bookmark where article_id = :articleid and member_id = :memberid", nativeQuery=true)
    BookMarkEntity findByMemberAndArticle(Integer articleid, String memberid);

}
