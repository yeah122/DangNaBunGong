package com.example.dang_na_bun_gong.Controller;

import com.example.dang_na_bun_gong.DTO.BookMarkDto;
import com.example.dang_na_bun_gong.Service.BookMarkSerivce;
import com.example.dang_na_bun_gong.Vo.ResultVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpSession;

@Controller
public class BookMarkCotroller {

    @Autowired
    private BookMarkSerivce bookMarkSerivce;


    @PostMapping("/addLike")
    public ResultVo addLike(@RequestBody BookMarkDto bookMarkDto, HttpSession session) {
        Integer article = (Integer)session.getAttribute("articleid");
        String member=(String)session.getAttribute("memberid");
        bookMarkDto.setArticleId(article);
        bookMarkDto.setMemberId(member);

            bookMarkSerivce.addLike(bookMarkDto);
            return new ResultVo(0, "true", "좋아요 완료", null);


    }
    @DeleteMapping("/deleteLike")
    public ResultVo deleteLike(@RequestBody BookMarkDto bookMarkDto,HttpSession session) {
        Integer article = (Integer)session.getAttribute("articleid");
        String member=(String)session.getAttribute("memberid");
        bookMarkDto.setArticleId(article);
        bookMarkDto.setMemberId(member);
        bookMarkSerivce.deleteLike(bookMarkDto);
        return new ResultVo(0, "true", "좋아요 삭제 완료",null);
    }
}
