package com.example.dang_na_bun_gong.Controller;

import com.example.dang_na_bun_gong.DTO.ArticleDto;
import com.example.dang_na_bun_gong.DTO.MemberDto;
import com.example.dang_na_bun_gong.DTO.MyPageDto;
import com.example.dang_na_bun_gong.DTO.MyPageMemberDto;
import com.example.dang_na_bun_gong.Entity.MemberEntity;
import com.example.dang_na_bun_gong.Service.MyPageService;
import com.example.dang_na_bun_gong.Vo.ResultVo;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.List;

@Controller
public class MyPageController {

    @Autowired
    private MyPageService myPageService;


    // 마이페이지 메인
    @GetMapping("/myPage")
    public @ResponseBody ResultVo myPage(HttpSession httpSession){

        String memberid = httpSession.getAttribute("memberid").toString();; // 세션에서 memberid 가져오기

        List<ArticleDto> myPageSell = myPageService.myPage_sellList(memberid);
        List<ArticleDto> myPageBuy = myPageService.myPage_buyList(memberid);
        List<ArticleDto> myPageLike = myPageService.myPage_likeList(memberid);

        JSONObject jsonObject = new JSONObject();

        List<MemberDto> myPageMemberInfo = myPageService.myPage_memberInfo(memberid);
        List<MyPageMemberDto> myPageMemberDto = new ArrayList<>();


        MyPageMemberDto data1 = new MyPageMemberDto(myPageMemberInfo.get(0)); // 프로필, 닉네임, 사진경로
        myPageMemberDto.add(data1);
        jsonObject.put("memberInfo", myPageMemberDto);
        myPageMemberDto.clear();

        List<MyPageDto> myPageDto = new ArrayList<>();

        for(int i = 0; i<myPageBuy.size(); i++){  //구매목록
            MyPageDto data = new MyPageDto(myPageBuy.get(i));
            myPageDto.add(data);
        }
        jsonObject.put("buyList", myPageDto);
        myPageDto.clear();

        for(int i = 0; i<myPageSell.size(); i++){ //판매목록
           MyPageDto data = new MyPageDto(myPageSell.get(i));
           myPageDto.add(data);
        }
        jsonObject.put("sellList", myPageDto);
        myPageDto.clear();

        for(int i = 0; i<myPageLike.size(); i++){ //찜 목록
            MyPageDto data = new MyPageDto(myPageLike.get(i));
            myPageDto.add(data);
        }
        jsonObject.put("likeList", myPageDto);
        myPageDto.clear();

        //거래후기 목록(아직 제작 안함)


        return new ResultVo(0,"true", "success", jsonObject.toString());
    }

    // 구매목록 전체보기


    //판매목록 전체보기


    //찜목록 전체보기


}
