## ◇ 구름톤 트레이닝 1번째 과제입니다◇
###   🪄주제: HTML, CSS를 이용해 넷플릭스 홈페이지 만들기
<br/> 

###   🪄필요기능
       - Flex-Box를 이용해 이미지 나열
       - 영화에 마우스로 호버하면 영화 이미지 크기 확대


### 🪄효과 및 기능 구현
<br/> 


### ◎ header

<img width="893" alt="image" src="https://github.com/luz315/goorm/assets/125282732/27f42816-7524-4d41-a097-f597f675e83f">
<br/><br/>  

<div>

1. banner__titile 클래스 
   - 타이틀 제목 "노팅힐" 지정
   - 버튼 만들기 : [재생], [내가 찜한 콘텐츠]
   - 재생

2. banner__info 클래스
   - 영화 연도
   - 연령 제한
   - 영화 시간
   - 장르

3. banner__description 클래스
   - 메인 포스터를 넘어가지 않는 선에서 크기 조정
   - 줄거리 내용
   - 등장인물  

4. banner--fadeBottom 속성
   - 메인 포스터 하단 부분을 그라데이션 처리
</div>
<br/>  

### ◎ list
<img width="944" alt="image" src="https://github.com/luz315/goorm/assets/125282732/2db966ef-8829-40f9-a6a3-628511a7a766">
<img width="943" alt="image" src="https://github.com/luz315/goorm/assets/125282732/9051fca1-e095-4fbd-91fc-c3ff46d7cb6e">
<br/><br/>
<div>

1. 이미지 정렬
   - [포스터 참고 사이트 1](https://www.themoviedb.org/?language=ko-KR)
   - [포스터 참고 사이트 2](https://www.wallpaperbetter.com/ko)
   - Flex Box로 정렬
   - [지금 뜨는 콘텐츠]와 나머지 list [어워즈 수상 한국 시리즈, 애니, 등등]의 이미지 크기에 차이를 둠
 
2. 포스터 스크롤
   - 스크롤 형태 숨기기 
   - 배경은 고정된 상태에서 이미지 스크롤만 가능하게 설정 
 
3. 포스터 호버
   - [요즘 뜨는 콘텐츠] transform 조금 더 크게 확대
   - posterLarge: scale(1.1)
   - poster: scale(1.09)
</div>
<br/>  


### ◎ etc
<img width="894" alt="image" src="https://github.com/luz315/goorm/assets/125282732/6614c82f-b9d0-4ef3-87b7-b56ebcea8c7a">
<img width="893" alt="image" src="https://github.com/luz315/goorm/assets/125282732/9f15e9e7-f16e-4efa-a00e-c3b156d499ab">
<br/><br/>  
<div>

1. nav
   - 상단 좌측에 넷플릭스 로고 넣기
   - 상단 우측에 아바타 로고 넣기
   - 스크롤 할 때 마다 검정색 띠 모양의 transition-timing-function 발생
</div>


