package com.example.dang_na_bun_gong.Repository;

import com.example.dang_na_bun_gong.Entity.MemberEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, String> {

	//아이디, 전화번호, 이메일 확인
	boolean existsById(String memberid);
	boolean existsByMembertel(String membertel);
	boolean existsByMembermail(String membermail);

	Optional<MemberEntity> findByMemberidAndMemberpw(String memberid, String memberpw);
	
	@Query(value = "select count(member_id) from member where member_id = :memberid and member_pw = :memberpw", nativeQuery=true)
    Integer loginCheck(@Param("memberid") String memberid, @Param("memberpw") String memberpw);

	//아이디 찾기
    @Query(value = "select member_id from member where member_name = :membername and member_tel = :membertel", nativeQuery=true)
    String findIdByNameAndTel(@Param("membername") String membername, @Param("membertel") String membertel);

	//비밀번호 찾기
	@Query(value = "select count(member_id) from member where member_name = :membername and member_id = :memberid and member_tel = :membertel", nativeQuery=true)
	Integer checkByNameAndIdAndTel(@Param("membername") String membername, @Param("memberid") String memberid, @Param("membertel") String membertel);

	//비밀번호 변경
	@Transactional // insert, delete, update문을 쿼리로 사용하기 위함
	@Modifying // insert, delete, update문을 쿼리로 사용하기 위함
	@Query(value = "UPDATE member SET member_pw = :memberpw where member_id = :memberid", nativeQuery=true)
	void pwUpdate(@Param("memberid") String memberid, @Param("memberpw") String memberpw);

	List<MemberEntity> findByMemberid(String memberid);

}