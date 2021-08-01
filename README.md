# toss

- back-end practice
- 수입, 지출의 data를 관리

### 기능

- 일별 리스트, 달력, 그래프에 수입, 지출표시
- 달력 이전달, 다음달 보는 모션(애니메이션 추가)
- 항목별 보기
- 페이지를 넘어가는 모션 만들지 않기 (anchor<a tag>걸지 않기)
- 로그인(나의 수입, 지출만 볼 수 있게) 모달창으로 만들기, 암호화.
- 회원가입할 경우 1000포인트 지급(되돌리기)
- 더미데이터 1년치를 랜덤하게 넣자(bulk insert)
  
### 참고사항
- mysql workbench에서 시각화된 툴로 테이블만들고 생성
- ERD
- 생성한 테이블을 entity로 변환하기(typeorm-model-generator)
- 폴더구조
  + 폴더는 resource단위로 나눌 것(dog, cat, cakes...)
  + router, controller, service 다 분리하고, 각각 클래스 형태로 만들 것(router제외)
  + dotenv를 사용하여 중요한 정보가 노출되지 않도록 관리
  
### module

- typescript
- typeorm
- express
- bcrypt
- mysql2
- dotenv
  
#### 필요 API예상
  

* 수입, 지출 표시, moneys, /money/:user_id, get (req.param으로 들어온 user_id를 통해 moneys테이블에서 수입과 지출을 꺼낸다.)

* 수입, 지출 입력, moneys, categories, payment, /money, post (req.body로 들어온 값들을 쿼리에 저장)

* 카테고리별 보기, moneys, categories, /money, get 
  
  
