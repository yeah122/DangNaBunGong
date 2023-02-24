package com.example.dang_na_bun_gong.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberFindDto {
    private String memberid, membername, membertel;

    public MemberFindDto(String membername, String membertel){
        this.membername = membername;
        this.membertel = membertel;
    }

    public MemberFindDto(String membername, String memberid, String membertel){
        this.membername = membername;
        this.memberid = memberid;
        this.membertel = membertel;
    }

}
