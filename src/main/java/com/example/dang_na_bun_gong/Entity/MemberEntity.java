package com.example.dang_na_bun_gong.Entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;

@Entity(name="member")
//@DynamicUpdate
@Getter
public class MemberEntity {

    @Id
    @Column(name = "member_id", nullable = false)
    private String memberid;

    @Column(name = "member_pw", nullable = false)
    private String memberpw;

    @Column(name = "member_name", nullable = false)
    private String membername;

    @Column(name = "member_tel", nullable = false)
    private String membertel;

    @Column(name = "member_mail", nullable = false)
    private String membermail;

    @Column(name = "member_created", nullable = false)
    private Timestamp membercreated;

    @Column(name = "member_gender")
    private String membergender;

    @Column(name = "member_birth")
    private String memberbirth;

    @Column(name = "member_region_id")
    private Integer memberregion;

    @Column(name = "member_changed")
    private Timestamp memberchanged;


    @Builder
    public MemberEntity(String memberid, String memberpw, String membername, String membertel, String membermail, Timestamp membercreated, String membergender, String memberbirth, Integer memberregion, Timestamp memberchanged) {
        this.memberid = memberid;
        this.memberpw = memberpw;
        this.membername = membername;
        this.membertel = membertel;
        this.membermail = membermail;
        this.membercreated = membercreated;
        this.membergender = membergender;
        this.memberbirth = memberbirth;
        this.memberregion = memberregion;
        this.memberchanged = memberchanged;
    }

    public MemberEntity() {

    }
}