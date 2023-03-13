package com.example.dang_na_bun_gong.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyPageMemberDto implements MemberDto {
    String member_id, member_nickname, member_photo_fp, member_intro;

    public MyPageMemberDto(MemberDto memberDto) {
        this.member_id = memberDto.getMember_id();
        this.member_nickname = memberDto.getMember_nickname();
        this.member_photo_fp = memberDto.getMember_photo_fp();
        this.member_intro = memberDto.getMember_intro();
    }
}
