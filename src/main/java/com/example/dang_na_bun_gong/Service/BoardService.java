package com.example.dang_na_bun_gong.Service;

import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.dang_na_bun_gong.Entity.BoardEntity;
import com.example.dang_na_bun_gong.Repository.BoardRepository;

@Service
public class BoardService {
	
	@Autowired
	private BoardRepository boardRepository;
	
	//게시글 작성
	public void write(BoardEntity board, List<MultipartFile> file) throws IOException{
		String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";

        UUID uuid = UUID.randomUUID();
        
        //String fileName = uuid + "_" + file.getOriginalFilename();
        String fileName = uuid.toString().replaceAll("-", "").toUpperCase();
        
        int fileCount = 0;
        for(MultipartFile f: file) {
        	File saveFile = new File(projectPath, fileName + Integer.toString(fileCount) + ".jpg");
            //file.get(i).transferTo(saveFile);
            System.out.println("uuid: " + fileName);
        	f.transferTo(saveFile);
        	fileCount += 1;
        }
        


        /*Timestamp timestamp = Timestamp.valueOf(LocalDateTime.now());
        
        board.setFilename(fileName);
        board.setFilepath("/files/" + fileName);
        board.setWritedate(timestamp);

        boardRepository.save(board);*/
	}
	
	// 게시글 리스트 처리
    public Page<BoardEntity> boardList(Pageable pageable) {

        return boardRepository.findAll(pageable);
    }
    
    // 특정 게시글 불러오기
    public BoardEntity boardView(Integer id) {

        return boardRepository.findById(id).get();
    }
    
    // 게시글 리스트 검색
    public Page<BoardEntity> boardSearchList(String searchKeyword, Pageable pageable) {

        return boardRepository.findByTitleContaining(searchKeyword, pageable);
    }
   
}
