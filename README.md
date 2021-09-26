# 스프링을 이용한 환율 계산 프로그램

![thumbnail](https://user-images.githubusercontent.com/34643599/134797400-d546f39c-8884-4f7b-ab9d-e7a8a566cf2e.png)
- 클라이언트는 Vue로 작성하여 build한 파일로 작성했습니다.
- 서버는 Spring Boot / IntelliJ / jdk 1.8 을 통하여 작성했습니다.

### 환율 정보
 - 수취 국가를 변경할 때마다 API를 요청하는 방식으로 작성 (환율 정보는 지속적으로 변하기 때문에)

### 예외 처리
 - input 타입을 Number로 지정하여 숫자만 입력받도록 구현
 - 0보다 작은 금액에 대한 예외 처리
 - 10,000 USD보다 큰 금액에 대한 예외 처리

### Submit
 - 결과는 단순 계산 결과이기 때문에 Client에서만 처리하도록 구현했습니다.
 - 수취 국가 선택으로 인한 (환율 * 송금액)을 소수점 3자리에서 반올림하여 2자리까지 표현하도록 구현했습니다.

### 조회 URL
 - Spring Boot Runner를 통해 실행한 다음 Http://localhost:8080/#/ 으로 접속 후 확인 가능합니다.
