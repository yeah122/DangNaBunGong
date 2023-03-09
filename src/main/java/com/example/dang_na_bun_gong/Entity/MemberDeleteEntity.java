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
    @Column(name = "member_id")
    private String memberid;


    @Column(name = "member_name")
    private String membername;

    @Column(name = "member_tel")
    private String membertel;

    @Column(name = "member_mail")
    private String membermail;

    @Column(name = "member_deleted")
    private Timestamp memberdeleted;


    public static MemberDeleteEntity toSaveEntity(MemberDeleteDto memberDeleteDto) {
        MemberDeleteEntity memberDeleteEntity = new MemberDeleteEntity();
        memberDeleteEntity.setMemberid(memberDeleteDto.getMemberid());
        memberDeleteEntity.setMembermail(memberDeleteDto.getMembermail());
        memberDeleteEntity.setMembername(memberDeleteDto.getMembername());
        memberDeleteEntity.setMembertel(memberDeleteDto.getMembertel());
        memberDeleteEntity.setMemberdeleted(memberDeleteDto.getMemberdeleted());

        return memberDeleteEntity;

    }

}
