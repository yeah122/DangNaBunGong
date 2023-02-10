package com.example.dang_na_bun_gong.DTO;

import com.example.dang_na_bun_gong.Entity.MemberEntity;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
public class MemberJoinDto {
    private String memberid, memberpw, membername, membertel, membermail;
    private Timestamp membercreated;

    public MemberJoinDto(String memberid, String memberpw, String membername, String membertel, String membermail){
        this.memberid = memberid;
        this.memberpw = memberpw;
        this.membername = membername;
        this.membertel = membertel;
        this.membermail = membermail;

        LocalDateTime now = LocalDateTime.now();
        this.membercreated = Timestamp.valueOf(now);
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
