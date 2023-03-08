package com.example.dang_na_bun_gong.Service;

import java.util.List;

import com.example.dang_na_bun_gong.DTO.MemberDeleteDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.dang_na_bun_gong.Entity.MemberEntity;
import com.example.dang_na_bun_gong.Repository.MemberRepository;

@Service
public class MemberService {
	//test 만들기: 컨트롤 쉬프트 t

	@Autowired
	private MemberRepository memberRepository;
	
	//아이디 확인
	public boolean memberIDcheck(String memberid) {

		return memberRepository.existsById(memberid);
	}

	public boolean memberTelcheck(String membertel) {

		return memberRepository.existsByMembertel(membertel);
	}

	public boolean memberMailcheck(String membermail) {

		return memberRepository.existsByMembermail(membermail);
	}
	
	//로그인 확인
	public Integer loginCheck(String memberid, String memberpw) {
		 
		return memberRepository.loginCheck(memberid, memberpw);
	}
	
	//회원 정보 가져오기
    public List<MemberEntity> memberInfo(String memberid) {
    	System.out.println("memberid: " + memberid);

        return memberRepository.findByMemberid(memberid);
    }
    
	//회원가입
	public String memberWrite(MemberEntity member) {
		memberRepository.save(member);

		return member.getMemberid();
	}
	
	//회원수정
	public void memberUpdate(List<MemberEntity> findEntity) {
		memberRepository.saveAll(findEntity);
	}
	
	//회원탈퇴
	
	// 게시글 리스트 처리
    public Page<MemberEntity> boardList(Pageable pageable) {
    	System.out.println("pageable: " + pageable);

        return memberRepository.findAll(pageable);
    }

	public void memberDelete(MemberDeleteDto memberDeleteDto){
		String memberid = memberDeleteDto.getMemberid();
		List<MemberEntity> memberEntity = memberRepository.findByMemberid(memberid);
		memberRepository.delete((MemberEntity) memberEntity);

	}

    
}
