package com.example.dang_na_bun_gong.Vo;

import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor // 모든 값을 파라미터로 받는 생성자를 생성
@Data
public class ResultVo {
    private int stateCode;

    private String isTrue;

    private String message;

}
