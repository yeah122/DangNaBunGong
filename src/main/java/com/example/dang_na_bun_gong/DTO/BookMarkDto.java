package com.example.dang_na_bun_gong.DTO;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BookMarkDto {


    private String memberId;
    private Integer articleId;

    public BookMarkDto(String memberId, Integer articleId) {
        this.memberId = memberId;
        this.articleId = articleId;
    }
}
