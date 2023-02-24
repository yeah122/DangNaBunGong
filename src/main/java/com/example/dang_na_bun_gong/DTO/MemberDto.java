package com.example.dang_na_bun_gong.DTO;

import com.example.dang_na_bun_gong.Entity.MemberEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class MemberDto {
    //필수
    private String memberid, memberpw, membername, membertel, membermail;
    private Timestamp membercreated;

    //선택
    private String member_nickname, member_gender, member_birth, member_intro;
    private Integer member_region_id;
    private Timestamp member_changed;

    public MemberDto(String memberid, String memberpw){
        this.memberid = memberid;
        this.memberpw = memberpw;
    }

    public MemberDto(String memberid, String memberpw, String membername, String membertel, String membermail){
        this.memberid = memberid;
        this.memberpw = memberpw;
        this.membername = membername;
        this.membertel = membertel;
        this.membermail = membermail;

        LocalDateTime now = LocalDateTime.now();
        this.membercreated = Timestamp.valueOf(now);
    }

    public MemberDto(MemberEntity memberEntity){
        this.memberid = memberEntity.getMemberid();
        this.memberpw = memberEntity.getMemberpw();
        this.membername = memberEntity.getMembername();
        this.membertel = memberEntity.getMembertel();
        this.membermail = memberEntity.getMembermail();
        this.membercreated = memberEntity.getMembercreated();

        this.member_nickname = memberEntity.getMembernickname();
        this.member_gender = memberEntity.getMembergender();
        this.member_birth = memberEntity.getMemberbirth();
        this.member_region_id = memberEntity.getMemberregion();
        this.member_intro = memberEntity.getMemberintro();
        this.member_changed = memberEntity.getMemberchanged();

    }

    public MemberEntity toMemberEntity(){
        return MemberEntity.builder()
                .memberid(memberid)
                .memberpw(memberpw)
                .membername(membername)
                .membertel(membertel)
                .membermail(membermail)
                .membercreated(membercreated)
                .build();
    }
}
