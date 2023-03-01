package com.example.dang_na_bun_gong.Service;

import com.example.dang_na_bun_gong.DTO.BookMarkDto;
import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import com.example.dang_na_bun_gong.Entity.BookMarkEntity;
import com.example.dang_na_bun_gong.Entity.MemberEntity;
import com.example.dang_na_bun_gong.Repository.ArticleRepository;
import com.example.dang_na_bun_gong.Repository.BookMarkRepository;
import com.example.dang_na_bun_gong.Repository.MemberRepository;
import com.example.dang_na_bun_gong.Vo.ResultVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class BookMarkSerivce {

    @Autowired
    private BookMarkRepository bookMarkRepository;
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private MemberRepository memberRepository;

    public void addLike(BookMarkDto bookmarkDTO) {
        Integer articleId = bookmarkDTO.getArticleId();
        String memberId = bookmarkDTO.getMemberId();


        BookMarkEntity bookMark = new BookMarkEntity();
        bookMark.setArticle(articleId);
        bookMark.setMember(memberId);

        bookMarkRepository.save(bookMark);
        articleRepository.increaseLikeCnt(articleId);

    }

    public void deleteLike(BookMarkDto bookMarkDto) {
        Integer articleId = bookMarkDto.getArticleId();
        String memberId = bookMarkDto.getMemberId();

        BookMarkEntity bookMark = bookMarkRepository.findByMemberAndArticle(articleId, memberId);

        bookMarkRepository.delete(bookMark);
        articleRepository.decreaseLikeCnt(articleId);
    }
    public Integer Likecheck(Integer articleId,String memberId) {


         BookMarkEntity bookMark = bookMarkRepository.findByMemberAndArticle(articleId, memberId);

         if(bookMark == null){
             return 0;
         }else{
             return 1;
         }

    }


}