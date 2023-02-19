package com.example.dang_na_bun_gong.Controller;

import com.example.dang_na_bun_gong.DTO.ArticleWriteDto;
import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import com.example.dang_na_bun_gong.Service.ArticleService;
import com.example.dang_na_bun_gong.Vo.ResultVo;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@Controller
public class ArticlceController {
    @Autowired
    private ArticleService articleService;


@GetMapping("/article/Write")
    public String article(){
return "board";
    }
@PostMapping("/article/WriteDo")
    public ResultVo articleWritedo(ArticleWriteDto article, List<MultipartFile> file, HttpSession session) throws IOException {
    String userid = session.getAttribute("memberid").toString();

    article.setSellmemberid(userid);
    System.out.println("내용 : "+ article);

    articleService.write(article,file);
    return new ResultVo(0, "true", "글쓰기 성공");
}

    @GetMapping("/article/View") // localhost:8080/article/View?id=1
    public String articleView(Model model, Integer id) {

    model.addAttribute("article",articleService.articleview(id));

        return "boardview";
    }







}
