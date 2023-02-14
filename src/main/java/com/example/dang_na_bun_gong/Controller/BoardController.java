package com.example.dang_na_bun_gong.Controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.dang_na_bun_gong.Entity.ArticleEntity;
import com.example.dang_na_bun_gong.Service.BoardService;

@Controller
public class BoardController {

	@Autowired
	private BoardService boardService;

	//게시글 작성 page
	@GetMapping("/article/write")
	public String articleWrite(Model model, HttpSession session) {
		model.addAttribute("userid", session.getAttribute("userid"));
		return "board";
	}

	// 게시물 작성 Post
	@PostMapping("/board/writedo")
	public String boardWriteDo(BoardEntity board, Model model, @RequestParam("file") List<MultipartFile> file, HttpSession session) throws IOException{
		System.out.println("제목: " + board.getTitle());
		System.out.println("내용: " + board.getContent());
		System.out.println("파일: " + file);

		String userid = session.getAttribute("userid").toString();

		board.setUserid(userid);
		boardService.write(board, file);

		model.addAttribute("message", "글 작성이 완료되었습니다.");
        model.addAttribute("searchUrl", "/board/list");
        model.addAttribute("userid", userid);


		return "board";
	}

	//게시물 리스트 보기
	@GetMapping("/board/list")
    public String boardList(Model model,
                            @PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable,
                            String searchKeyword) {

        Page<BoardEntity> list = null;

        if(searchKeyword == null) {
            list = boardService.boardList(pageable);
        }else {
            list = boardService.boardSearchList(searchKeyword, pageable);
        }

        int nowPage = list.getPageable().getPageNumber() + 1;
        int startPage = Math.max(nowPage - 4, 1);
        int endPage = Math.min(nowPage + 5, list.getTotalPages());

        System.out.println("list: " + list);
        model.addAttribute("list", list);
        model.addAttribute("nowPage", nowPage);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);

        return "boardList";
    }

	// 특정 게시물 보기
	@GetMapping("/board/view") // localhost:8080/board/view?id=1
    public String boardView(Model model, Integer id, HttpSession session) {

        model.addAttribute("board", boardService.boardView(id));
        model.addAttribute("userid", session.getAttribute("userid"));

        return "boardview";
    }

	//게시물 수정
	@GetMapping("/board/modify/{id}")
    public String boardModify(Model model, @PathVariable("id") Integer id, HttpSession session) {

        model.addAttribute("board", boardService.boardView(id));
        model.addAttribute("userid", session.getAttribute("userid"));

        return "boardModify";
    }

	// 게시물 수정 Post
	@PostMapping("/board/modifydo/{id}")
	public String boardModifyDo(@PathVariable("id") Integer id, BoardEntity board, MultipartFile file) throws Exception{

		//원래 데이터 가져와서 파일 수정
        BoardEntity boardTemp = boardService.boardView(id);
        boardTemp.setTitle(board.getTitle());
        boardTemp.setContent(board.getContent());
        boardTemp.setPrice(board.getPrice());

        //원래 경로의 있던 파일은 삭제
        System.out.println(boardTemp.getFilepath());
        File fileDel =  new File("/static/" + boardTemp.getFilepath());

        if(fileDel.exists()) { //원해 경로에 있던 파일 삭제하는 방법 알아보기
        	System.out.println("delete, abs Path: " + fileDel.getAbsolutePath());
        }
        else {
        	System.out.println("can't delete, Path: " + fileDel.getPath());
        }



        //boardService.write(boardTemp, file);

        //return "redirect:/board/view?id="+id;
        return "";
    }


}
