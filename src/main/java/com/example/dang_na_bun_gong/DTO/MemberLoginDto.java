package com.example.dang_na_bun_gong.DTO;

import com.example.dang_na_bun_gong.Entity.MemberEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberLoginDto {
    private String memberid, memberpw;

    public MemberLoginDto(String memberid, String memberpw){
        this.memberid = memberid;
        this.memberpw = memberpw;
    }

}
