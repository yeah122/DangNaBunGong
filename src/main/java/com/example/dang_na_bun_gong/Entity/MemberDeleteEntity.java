package com.example.dang_na_bun_gong.Entity;

import com.example.dang_na_bun_gong.DTO.ArticleWriteDto;
import com.example.dang_na_bun_gong.DTO.MemberDeleteDto;
import lombok.Data;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name="member_delete")
//@DynamicUpdate
@Data
public class MemberDeleteEntity {
    @Id
    @Column(name = "member_id", nullable = false)
    private String memberid;


    @Column(name = "member_name", nullable = false)
    private String membername;

    @Column(name = "member_tel", nullable = false)
    private String membertel;

    @Column(name = "member_mail", nullable = false)
    private String membermail;

    @Column(name = "member_delete", nullable = false)
    private Timestamp memberdelete;


    public static MemberDeleteEntity toSaveEntity(MemberDeleteDto memberDeleteDto) {
        MemberDeleteEntity memberDeleteEntity = new MemberDeleteEntity();
        memberDeleteEntity.setMemberid(memberDeleteDto.getMemberid());
        memberDeleteEntity.setMembermail(memberDeleteDto.getMembermail());
        memberDeleteEntity.setMembername(memberDeleteDto.getMembername());
        memberDeleteEntity.setMembertel(memberDeleteDto.getMembertel());
        memberDeleteEntity.setMemberdelete(memberDeleteDto.getMemberdelete());

        return memberDeleteEntity;

    }

}
