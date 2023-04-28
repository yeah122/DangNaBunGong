package com.example.dang_na_bun_gong.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
public class ArticleWriteDto {

    private Integer articleid;
    private String articletitle;
    private String articlecontentfp;
    private String articlecontent;
    private String sellmemberid;
    private Integer photocnt;
    private String photofp;
    private String price;
    private Integer productcategoryid;
    private Integer regionid;
    private String regionname;
    private Timestamp articlecreatede;
    private Integer likecnt;

    public ArticleWriteDto(){

    }

}
