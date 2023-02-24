package com.example.dang_na_bun_gong.Controller;

import com.example.dang_na_bun_gong.DTO.MemberDto;
import com.example.dang_na_bun_gong.DTO.MemberFindDto;
import com.example.dang_na_bun_gong.Vo.ResultVo;
import com.example.dang_na_bun_gong.Entity.MemberEntity;
import com.example.dang_na_bun_gong.Repository.MemberRepository;
import com.example.dang_na_bun_gong.Service.MemberService;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpSession;

import java.util.List;
import java.util.regex.Pattern;

@Controller
public class MemberController {

	private final MemberRepository memberRepository = null;

	@Autowired
	private MemberService memberService;

	@PersistenceContext
	private EntityManager entityManager;

	//로그인
	@GetMapping("/login")
	public String login(Model model, HttpSession session) {
		model.addAttribute("memberid", session.getAttribute("memberid"));
		return "login";
	}

	@PostMapping("/loginDo")
	public @ResponseBody ResultVo loginDo(MemberDto memberLoginDto, Model model, HttpSession session) {

		System.out.println("memberLoginDto = " + memberLoginDto.getMemberid() +" "+ memberLoginDto.getMemberpw());
		Integer loginCheck = memberService.loginCheck(memberLoginDto.getMemberid(), memberLoginDto.getMemberpw());
		System.out.println("loginCheck: "+loginCheck);
		
		if (loginCheck == 1) {
			session.setAttribute("memberid", memberLoginDto.getMemberid());
			return new ResultVo(0, "true", "로그인 성공");
		}

		else if(loginCheck == 0){
			System.out.println("아이디나 비밀번호가 잘못되었습니다." + memberLoginDto.getMemberid());
			return new ResultVo(100, "false", "아이디나 비밀번호가 잘못되었습니다.");
		}

		else {//음수 혹은 2 이상일 때
			return new ResultVo(299, "false", "회원정보가 잘못되었습니다. 고객센터에 문의바랍니다.");
		}
	}

	//로그아웃
	@GetMapping("/logout")
	public String logout(HttpSession session) {

		//session.removeAttribute("memberid");
		if(session.getAttribute("memberid") != null) {
			System.out.println("Logout session: " + session.getAttribute("memberid").toString());
		}
		session.removeAttribute("memberid");
		session.invalidate(); // 세션 초기화

		return "home";
	}

	//회원가입
	@GetMapping("/memberJoin")
	public String member(Model model, HttpSession session) {
		model.addAttribute("memberid", session.getAttribute("memberid"));
		return "memberJoin";
	}

	@PostMapping("/memberJoinDo")
	public @ResponseBody ResultVo memberJoinDo(MemberDto memberJoinDto, Model model) {
		boolean memberId, memberTel, memberMail, isTel, isMail;

		//null값 확인
		String null_id = memberJoinDto.getMemberid();
		String null_pw = memberJoinDto.getMemberpw();
		String null_name = memberJoinDto.getMembername();
		String null_tel = memberJoinDto.getMembertel();
		String null_mail = memberJoinDto.getMembermail();

		if(null_id.isEmpty() || null_pw.isEmpty() || null_name.isEmpty() || null_mail.isEmpty() || null_tel.isEmpty()){
			return new ResultVo(101, "false", "필수 입력 정보를 모두 입력해주십시오.");
		}

		//아이디 중복 확인
		memberId = memberService.memberIDcheck(memberJoinDto.getMemberid());
		if (memberId) { // memberid == true
			System.out.println("이미 존재하는 아이디");
			String message = "이미 존재하는 아이디입니다.";
			model.addAttribute("message", message);
			return new ResultVo(201, "false", "아이디 중복");
		}

		//전화번호 양식 확인
		isTel = Pattern.matches("^\\d{2,3}\\d{3,4}\\d{4}$", memberJoinDto.getMembertel());
		if (!isTel) { // isTel == true
			System.out.println("유효하지 않은 형식의 전화번호");
			String message = "유효한 전화번호를 입력해주십시오.";
			model.addAttribute("message", message);
			return new ResultVo(203, "false", "유효하지 않은 전화번호");
		}

		//전화번호 중복 확인
		memberTel = memberService.memberTelcheck(memberJoinDto.getMembertel());
		if (memberTel) { // memberTel == true
			System.out.println("이미 존재하는 전화번호");
			String message = "이미 사용 중인 전화번호입니다.";
			model.addAttribute("message", message);
			return new ResultVo(204, "false", "전화번호 중복");
		}

		//이메일 양식 확인"^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$"
		isMail = Pattern.matches("^[a-zA-Z0-9]+\\@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$", memberJoinDto.getMembermail());
		if (!isMail) { // isMail == true
			System.out.println("유효하지 않은 형식의 이메일");
			String message = "유효한 이메일 입력해주십시오.";
			model.addAttribute("message", message);
			return new ResultVo(205, "false", "유효하지 않은 이메일");
		}

		//이메일 중복 확인
		memberMail = memberService.memberMailcheck(memberJoinDto.getMembermail());
		if (memberMail) { // memberMail == true
			System.out.println("이미 존재하는 이메일");
			String message = "이미 사용 중인 이메일입니다.";
			model.addAttribute("message", message);
			return new ResultVo(206, "false", "이메일 중복");
		}

		//회원가입 실행
		else {
			String findMember = memberService.memberWrite(memberJoinDto.toMemberEntity());
			if(memberService.memberIDcheck(findMember)) { //회원 정보 삽입 후 확인
				String message = "회원가입이 완료되었습니다.";
				model.addAttribute("message", message);
				return new ResultVo(0, "true", "회원가입 성공");
				//return "memberJoin";
			}
			else {
				System.out.println("가입 실패");
				String message = "가입 실패";
				model.addAttribute("message", message);
				return new ResultVo(300, "false", "가입 실패");
				//return "memberJoin";
			}
		}

	}

	@GetMapping("/findIdPage")
	public String findIdPage(){
		return "findIdPage";
	}

	// 아이디 찾기
	@GetMapping("/findId")
	public @ResponseBody ResultVo findId(MemberFindDto memberFindDto, Model model){
		String name = memberFindDto.getMembername();
		String tel = memberFindDto.getMembertel();

		boolean isTel;

		//null값 확인
		if(name.isEmpty() || tel.isEmpty()){ // 이름 null
			return new ResultVo(101, "false", "정보를 바르게 입력해주세요.");
		}

		//전화번호 양식 확인
		isTel = Pattern.matches("^\\d{2,3}\\d{3,4}\\d{4}$", tel);
		if (!isTel) { // isTel == true
			System.out.println("유효하지 않은 형식의 전화번호");
			String message = "유효한 전화번호를 입력해주십시오.";
			model.addAttribute("message", message);
			return new ResultVo(203, "false", "유효하지 않은 전화번호");
		}

		String findId = memberService.findId(name, tel);
		//일치하는 정보 없음
		if(findId == null){
			return new ResultVo(207, "false", "일치하는 회원정보가 없습니다.");
		}

		//일치하는 아이디 확인
		else{
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("member_id", findId);
			return new ResultVo(0, "true", "아이디 찾기 성공", jsonObject.toString());
		}
	}

	@GetMapping("/findPwPage")
	public String findPwPage(){
		return "findPwPage";
	}

	// 비밀번호 찾기
	@GetMapping("findPw")
	public @ResponseBody ResultVo findPw(MemberFindDto memberFindDto, Model model){
		String name = memberFindDto.getMembername();
		String id = memberFindDto.getMemberid();
		String tel = memberFindDto.getMembertel();

		boolean isTel;

		//null값 확인
		if(name.isEmpty() || id.isEmpty() || tel.isEmpty()){
			return new ResultVo(101, "false", "정보를 바르게 입력해주세요.");
		}

		//전화번호 양식 확인
		isTel = Pattern.matches("^\\d{2,3}\\d{3,4}\\d{4}$", tel);
		if (!isTel) { // isTel == true
			System.out.println("유효하지 않은 형식의 전화번호");
			String message = "유효한 전화번호를 입력해주십시오.";
			model.addAttribute("message", message);
			return new ResultVo(203, "false", "유효하지 않은 전화번호");
		}

		Integer findPw = memberService.findPw(name, id, tel);
		//일치하는 정보 없음
		if(findPw == 0){
			return new ResultVo(207, "false", "일치하는 회원정보가 없습니다.");
		}
		//일치하는 아이디 확인
		else if(findPw == 1){
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("member_id", findPw);
			return new ResultVo(0, "true", "비밀번호 찾기 성공");
		}
		else{//findPw가 음수 혹은 2 이상일 때
			return new ResultVo(299, "false", "회원정보가 잘못되었습니다. 고객센터에 문의바랍니다.");
		}
	}

	@GetMapping("/changePwPage")
	public String changePwPage(){
		return "changePwPage";
	}
	//비밀번호 변경
	@PatchMapping("changePw")
	public @ResponseBody ResultVo changePw(String memberid, String memberpw, Model model){
		//null값 확인
		if(memberid.isEmpty() || memberpw.isEmpty()){
			return new ResultVo(101, "false", "정보를 바르게 입력해주세요.");
		}

		//비밀번호 양식 확인
		boolean isPw = Pattern.matches("^([a-zA-Z]+[0-9]+\\W+)", memberpw);
		if (!isPw) { // isPw == true
			System.out.println("유효하지 않은 형식의 비밀번호");
			String message = "비밀번호는 영어+숫자+특수문자으로 만들어주십시오.";
			model.addAttribute("message", message);
			return new ResultVo(202, "false", "비밀번호 양식 오류");
		}

		//아이디 확인
		boolean idCheck = memberService.memberIDcheck(memberid);
		if (idCheck){
			String re = memberService.pwUpdate(memberid, memberpw);
			//변경 성공
			if(re.equals("success")){
				return new ResultVo(0, "true", "비밀번호 변경 성공");
			}
			//변경 실패
			else if (re.equals("fail")) {
				return new ResultVo(190, "false", "데이터베이스 연결에 실패했습니다.");
			}
			//알 수 없는 오류
			else {
				return new ResultVo(199, "false", "오류가 발생하였습니다. 잠시 후 다시 요청해주세요.");
			}
		}
		//존재하지 않는 아이디
		else{
			return new ResultVo(207, "false", "존재하지 않는 아이디");
		}

	}

	// 회원 리스트 처리
	@GetMapping("/member/list")
	public String memberList(Model model, @PageableDefault(page = 0, size = 10) Pageable pageable) {

		Page<MemberEntity> list = null;

		list = memberService.boardList(pageable);

		model.addAttribute("list", list);

		return "memberList";
	}

	// 마이페이지 보기
	@GetMapping("/member/mypage") // localhost:8080/board/view?id=1
    public String mypage(Model model, HttpSession session) {

		if(session.getAttribute("memberid") != null) {
			List<MemberEntity> memberInfo = null;

			memberInfo = memberService.memberInfo(session.getAttribute("memberid").toString());
			model.addAttribute("memberInfo", memberInfo);

		}

        return "mypage";
    }

	// 회원정보 수정
	/*@GetMapping("/member/modify") // localhost:8080/board/view?id=1
	public String memberModify(Model model, HttpSession session, MemberEntity memberEntity) {

		//회원 수정 못하고 있음. 변경된 필드만 DB update 하고싶다
		//아이디를 가지고 와서 다른 엔티티에 저장
		//넘어오는 엔티티에서 get할 수 있는 데이터는 위 다른 엔티티에 저장하기
		//위 엔티티로 save 하기

		List<MemberEntity> findEntity = memberService.memberInfo(session.getAttribute("memberid").toString());
		System.out.println("findEntity: " + findEntity.toString());

		if(session.getAttribute("memberid") != null) {
			System.out.println(memberEntity);
			findEntity.get(0).setMembername(memberEntity.getMembername());
			findEntity.get(0).setMembertel(memberEntity.getMembertel());

			LocalDateTime now = LocalDateTime.now();
			findEntity.get(0).setMemberchanged(Timestamp.valueOf(now));
//
//			 List<UserEntity> memberInfo = null; memberInfo =
//			 memberService.memberInfo(session.getAttribute("memberid").toString());
//			 model.addAttribute("memberInfo", memberInfo);
//
			memberService.memberUpdate(findEntity);
			model.addAttribute("message", "변경이 완료되었습니다.");
		}

	       return "redirect:/member/mypage";
	   }
    */

	/*
	 * @GetMapping("update") public String updateMember(@RequestParam(value =
	 * "name") String name, @RequestParam(value = "age") int age) {
	 * if(memberEntityRepository.findById(name).isEmpty()) { // 값 존재여부 확인 return
	 * "입력한 " + name + "이 존재하지 않습니다"; } else {
	 * memberEntityRepository.save(UserEntity.builder().name(name).age(age).build());
	 * return name + "의 나이를 " + age + "로 변경 완료"; } }
	 *
	 * @GetMapping("delete") public String deleteMember(@RequestParam(value =
	 * "name") String name) { if(memberEntityRepository.findById(name).isEmpty()) { //
	 * 값 존재여부 확인
	 *
	 * } }
	 *
	 *
	 * @GetMapping("search") public String searchAllMember() {
	 * System.out.println(memberEntityRepository.findAll().toString()); return
	 * memberEntityRepository.findAll().toString(); }
	 *
	 * @GetMapping("searchParam") public String
	 * searchParamMember(@RequestParam(value = "age") int age) { List resultList =
	 * entityManager.createQuery("select name from member where age > :age")
	 * .setParameter("age", age) .getResultList(); return resultList.toString(); }
	 *
	 * @GetMapping("searchParamRepo") public String
	 * searchParamRepoMember(@RequestParam(value = "name") String name) { return
	 * memberEntityRepository.searchParamRepo(name).toString(); }
	 */

}