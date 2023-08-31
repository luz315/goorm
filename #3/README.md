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
<br/><br/>  

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
     <br/> 

2. bootswatch 이용하기 (index.html)
   - [minty 테마](https://bootswatch.com/minty/)
   - nav 스타일 많이 참고
     <br/>

3. keyup 이벤트 기능
   - 입력창에 사용자 이름 입력하면 연관 사용자가 자동으로 뜬다
  
   - 
  
4. #profile (main.js)   
   - 흰색 배경에 앱 화면 구현
 
7. todo h2 (styles.css) 
   - Todo 앱 아이콘, "Todos 앱" 글자 넣기 

8. row 클래스
   - 할 일 입력창 만들기 (styles.css - input)
   - [추가] 버튼 만들기 (styles.css - button)

   
   - 할 일 마다 클릭할 수 있는 아이콘 넣기 (checked.png & unchecked.png)
   - line-through 사용해서 아이콘 뿐만 아니라 할 일을 완료했다는 표시 추가하기
   - 맨 끝에 삽입된 x 문자에 호버 기능 구현
<br/>
   <img width="440" alt="image" src="https://github.com/luz315/goorm/assets/125282732/144c83c6-887a-4c72-80e5-f3f9b446fe7d">
<br/><br/> 
   
</div>
<br/>  

### ◎ script.js (Todo 기능 구현)

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


