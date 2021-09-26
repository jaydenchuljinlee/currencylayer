package com.test.currencylayer.controller;

import com.test.currencylayer.service.CurrencyService;
import com.test.currencylayer.vo.ResultVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequestMapping("/api/currency")
@Controller
public class CurrencyController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CurrencyController.class);

    @Autowired
    private CurrencyService service;

    /**
     * 환율 정보를 요청한다.
     *
     * @return ResultVO
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     */
    @ResponseBody
    @GetMapping("/get-currency-info")
    public ResultVO getCurrencyInfo() {
        ResultVO resultVO = new ResultVO();

        try {
            resultVO.setData(service.getCurrencyInfo());
            resultVO.setSuccess(true);
        } catch (Exception e) {
            resultVO.setSuccess(false);
            LOGGER.error("[CurrencyController] getCurrencyInfo :", e.getMessage(), e);
        }

        return resultVO;
    };
}
