package com.test.currencylayer;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Map;

/**
 * 환율 정보 API DTO.
 *
 * @author Cheoljin
 * @version 1.0
 */
@Getter @Setter
public class CurrencyDTO {
    private boolean success;
    private String terms;
    private String privacy;
    private Timestamp timestamp;
    private String source;
    private Map<String, Double> quotes;
}
