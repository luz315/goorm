## ◇ 구름톤 트레이닝 3번째 과제입니다◇
###   🪄주제: 자바스크립트를 이용해 Github Finder 앱 만들기
<br/> 

###   🪄필요기능
       - 자바스크립트 OOP 이용해서구현
       - 비동기 통신 이용


### 🪄효과 및 기능 구현
<br/> 


### ◎ 앱화면 
<br/> 

<img width="800" alt="image" src="https://github.com/luz315/goorm/assets/125282732/54547df7-358c-4975-9aa7-b52e2825a07d">


<div>

1. bootstrap 이용하기 (index.html)

   - 기본적인 구조틀을 만드는데 활용
   - [Sticky footer navbar 테마](https://getbootstrap.com/docs/5.2/examples/sticky-footer-navbar/)  
   - [jQuery 3.x 버전 추가](https://releases.jquery.com/) 
   - [JavaScript 5.2.3 버전 추가](https://www.bootstrapcdn.com/)
   - Giuhub Finder 상단바 구현
   - 텍스트 구현
   - 사용자 이름 입력창 구현
  
  * Ctrl + u : 코드 보기
  * Ctrl + Shift + i : 콘솔창 보기
     <br/><br/> 

2. bootswatch 이용하기 (index.html)
   - [minty 테마](https://bootswatch.com/minty/)
   - nav 스타일 많이 참고
     <br/><br/>
3. keyup 이벤트 기능
   - 입력창에 사용자 이름 입력하면 연관 사용자가 자동으로 뜬다
  <br/><br/>
4. ajax 구현 (main.js) 
   - OAuth Apps 통해서 Github 연동
  <br/><br/>
5. #profile (main.js)   
   - 사용자 프로필 부분 구현
   - [Card 사용](https://getbootstrap.com/docs/5.3/components/card/) container 박스 구현
   - 그리드 시스템 사용 (3:9 비율)
   - 사용자 이름 구현
   - 사용자 프로필 사진 구현
   - [List group 사용](https://getbootstrap.com/docs/5.3/components/list-group/)사용자 정보 나열
   - [Badge 사용](https://getbootstrap.com/docs/5.3/components/badge/) badge 디자인 설정
   - [Buttons 사용](https://getbootstrap.com/docs/5.3/components/buttons/) button 디자인 설정
 <br/><br/>
6. #repos (main.js)
   - Least Repository 부분 구현
   - 그리드 시스템 사용 (7:4:1 비율)
   - [Badge 사용](https://getbootstrap.com/docs/5.3/components/badge/) badge 디자인 설정
   - [Buttons 사용](https://getbootstrap.com/docs/5.3/components/buttons/) button 디자인 설정
<br/><br/>
7. style.css
   - 프로필 사진 크기 설정
   - profile, repos 여백 설정

   
<br/><br/> 
   
</div>
<br/>  

### ◎ 영상화면

<br/>
<div>

1. 아무것도 입력하지 않고 버튼 클릭했을 경우에 뜨는 경고창 기능 구현
<br/>
<img width="500" alt="image" src="https://github.com/luz315/goorm/assets/125282732/e8ef6903-45c8-499c-8aa5-9e912c897b58">
<br/><br/><br/>
2. 입력창에 할 일을 입력하면 등록되는 기능 구현
<br/><br/>
<img width="500" alt="image" src="https://github.com/luz315/goorm/assets/125282732/b618455c-c490-4d83-957b-7c50b33f6169">
<br/><br/><br/>
3. 할 일 끝마다 x 문자 넣기 (특수문자 \u00d7 사용)
<br/><br/>
4. checked 토글 만들기
<br/><br/>
5. x 문자 클릭하면 데이터 지워주는 기능 구현
<br/><br/>
6. localStorage와 saveData를 통해 새로고침되어도 데이터 유지해주는 기능 구현


