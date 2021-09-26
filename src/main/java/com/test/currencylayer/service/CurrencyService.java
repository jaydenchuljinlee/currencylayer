package com.test.currencylayer.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.test.currencylayer.CurrencyDTO;
import com.test.currencylayer.define.CurrencyApiDefine;
import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriTemplateHandler;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CurrencyService {
    private static final String ACCESS_KEY = "access_key";

    @Value("${api.currencylayer.accessKey}")
    private String accessKey;

    private UriTemplateHandler uriTemplateHandler = getUriTemplateHandler();

    /**
     * 환율 정보를 요청한다.
     *
     * @return ResultVO
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     * @Exception URISyntaxException, JsonProcessingException, UnsupportedEncodingException
     */
    public CurrencyDTO getCurrencyInfo() throws URISyntaxException, JsonProcessingException, UnsupportedEncodingException {
       ResponseEntity<String> response = this.executeHttpMethod(new RestTemplate(), CurrencyApiDefine.API_URL, HttpMethod.GET, accessKey);

       ObjectMapper mapper = new ObjectMapper();

       CurrencyDTO data = mapper.readValue(response.getBody(), new TypeReference<CurrencyDTO>(){});

       return data;
    }

    /**
     * http method를 수행한다.
     *
     * @param restTemplate
     * @param url
     * @param method
     * @param accessKey
     * @return ResponseEntity<String>
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     * @Exception URISyntaxException, JsonProcessingException, UnsupportedEncodingException
     */
    private ResponseEntity<String> executeHttpMethod(RestTemplate restTemplate, String url, HttpMethod method, String accessKey) throws URISyntaxException, JsonProcessingException, UnsupportedEncodingException {
        URI uri = new URI(url);
        StringBuilder path = new StringBuilder(uri.getPath());
        if (uri.getQuery() != null) {
            path.append(CurrencyApiDefine.STRING_QUESTION).append(uri.getQuery());
        }

        Map<String, Object> params = new HashMap<String, Object>();
        params.put(ACCESS_KEY, accessKey);
        String urlParameter = this.createUrlParameter(params);
        url = this.createUrlIncludeQueryString(url, urlParameter);

        HttpEntity<byte[]> entity = this.getEntity(accessKey);
        return restTemplate.exchange(url, method, entity, String.class);
    }

    /**
     * http Entity 객체를 반환한다.
     *
     * @param accessKey
     * @return HttpEntity<byte[]>
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     * @Exception JsonProcessingException
     */
    private HttpEntity<byte[]> getEntity(String accessKey) throws JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        ObjectMapper mapper = new ObjectMapper();

       return new HttpEntity<byte[]>(mapper.writeValueAsBytes(accessKey), headers);
    }

    /**
     * 전달 받은 맵을 쿼리 스트링으로 변환하여 반환한다.
     *
     * @param paramMap
     * @return String
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     * @Exception UnsupportedEncodingException
     */
    private String createUrlParameter(Map<String, Object> paramMap) throws UnsupportedEncodingException {
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        if (paramMap != null && !paramMap.isEmpty())
        {
            for (Map.Entry<String, Object> paramEntry : paramMap.entrySet())
            {
                Object value = paramEntry.getValue();
                if (value != null)
                {
                    params.add(new BasicNameValuePair(paramEntry.getKey(), value.toString()));
                }
            }
        }
        return URLEncodedUtils.format(params, StandardCharsets.UTF_8);
    }

    /**
     * url 쿼리스트링을 만들어 반환한다.
     *
     * @param url
     * @param urlParameter
     * @return String
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     */
    private String createUrlIncludeQueryString(String url, String urlParameter)
    {
        return new StringBuilder(url).append(CurrencyApiDefine.STRING_QUESTION).append(urlParameter).toString();
    }

    /**
     * ResTemplate을 만들어 반환한다.
     *
     * @return RestTemplate
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     */
    public RestTemplate getRestTemplate()
    {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setUriTemplateHandler(getUriTemplateHandler());
        return restTemplate;
    }

    /**
     * Url 인코딩 방지를 위한 default 핸들러
     *
     * @return UriTemplateHandler
     * @author Cheoljin
     * @create-date : 2021. 9. 25.
     */
    private UriTemplateHandler getUriTemplateHandler()
    {
        if (uriTemplateHandler == null)
        {
            uriTemplateHandler = new DefaultUriBuilderFactory();
        }
        return uriTemplateHandler;

    }
}
