package com.example.dang_na_bun_gong.DTO;


import com.example.dang_na_bun_gong.Entity.MemberEntity;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
public class MemberDeleteDto {


    private String memberid;


    private String membername;


    private String membertel;


    private String membermail;


    private Timestamp memberdeleted;

public MemberDeleteDto(MemberEntity memberEntity){
    this.memberid = memberEntity.getMemberid();
    this.membername = memberEntity.getMembername();
    this.membertel = memberEntity.getMembertel();
    this.membermail = memberEntity.getMembermail();
    LocalDateTime now = LocalDateTime.now();
    this.memberdeleted = Timestamp.valueOf(now);
}
}
