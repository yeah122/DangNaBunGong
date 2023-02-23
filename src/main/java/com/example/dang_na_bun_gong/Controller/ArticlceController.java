package com.example.dang_na_bun_gong.Controller;

import com.example.dang_na_bun_gong.DTO.ArticleWriteDto;
import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import com.example.dang_na_bun_gong.Service.ArticleService;
import com.example.dang_na_bun_gong.Vo.ResultVo;
import lombok.Getter;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@Controller
public class ArticlceController {
    @Autowired
    private ArticleService articleService;


@GetMapping("/articleWrite")
    public String article(){
return "board";
    }
@PostMapping("/articleWriteDo")
    public @ResponseBody ResultVo articleWritedo(ArticleWriteDto article, List<MultipartFile> file, HttpSession session) throws IOException {
    String userid = session.getAttribute("memberid").toString();

    article.setSellmemberid(userid);

    /*
    // Null값 체크
    System.out.println("내용 : "+ article);
    String null_title = article.getArticletitle();
    String null_content = article.getArticlecontent();
    String null_prince = article.getPrice();
    Integer null_categoryid = article.getProductcategoryid();
    Integer null_regionid = article.getRegionid();

    if(null_title.isEmpty() || null_content.isEmpty() || null_prince.isEmpty() || null_categoryid == null || null_regionid == null){
        return new ResultVo(301, "false", "필수 입력 정보를 모두 입력해주십시오.");
    }

*/

    articleService.write(article,file);


    return new ResultVo(0, "true", "글쓰기 성공" ,null);
}

    @GetMapping("/articleView") // localhost:8080/article/View?id=1
    public @ResponseBody ResultVo articleView(Model model, Integer id) {
    model.addAttribute("article",articleService.articleview(id));


        ArticleEntity jsonObject = articleService.articleview(id);
        System.out.println(jsonObject.toString());

        return new ResultVo(0, "true", "불러오기 성공", jsonObject.toString());
    }







}
