package com.example.dang_na_bun_gong.Vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.json.JSONObject;


@AllArgsConstructor // 모든 값을 파라미터로 받는 생성자를 생성
@Data
public class ResultVo {
    private int stateCode;

    private String isTrue;

    private String message;

    private String data = null;

    public ResultVo(int stateCode, String isTrue, String message){
        this.stateCode = stateCode;
        this.isTrue = isTrue;
        this.message = message;
        this.data = null;
    }

}
