package com.test.currencylayer.vo;

import lombok.Getter;
import lombok.Setter;
/**
 * Ajax 요청에 대한 결과 반환용 VO <br>
 * Ajax 요청에 대한 결과를 반환할 때 사용하는 VO.
 *
 * @author Cheoljin
 * @version 1.0
 */
@Getter @Setter
public class ResultVO {
    /**
     * Ajax data 정보
     */
    private Object data;
    /**
     * Ajax 요청 성공 여부
     */
    private boolean success;
}
