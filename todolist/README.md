# To do list - MVC pattern

> MVC 패턴으로 투두리스트 만들기
> [Jbee 블로그](https://asfirstalways.tistory.com/248)

---

서버: http-server

```terminal
// 서버 시작
http-server -a 0.0.0.0 -p 8000
```

---

## 각 JS 파일 모듈화하고 의존성 관계 확립하기

모듈화시키기 위해 즉시 실행 함수로 app.js에 작성될 코드를 감싸준다.

### 각 파일의 관계 확립

- 변수 app에 생성자 함수 Storage, Model, Template, View, Controller가 메소드로 저장되어 있다. 전역 공간을 최대한 깨끗하게 사용하기 위함이다.
- 생성자 함수 App의 인스턴스에는 위의 생성자 함수로 만들어진 인스턴스가 각각 storage, model, template, view, controller 프로퍼티로 저장되어 있다.
- storage는 model와 의존성 관계이다. (storage <-> model)
- template은 view와 의존성 관계이다. (template <-> view)
- storage와 template는 독립적인 관계이다.
- view와 model은 controller로 연결된다. (view - controller - model)

### Template

View가 렌더할 때 넘겨받는 data 인자를 html 코드로 치환하는 역할을 한다.

Template가 데이터와 html 틀을 결합하여 실제 컴포넌트를 만든다면 View가 그것을 화면에 렌더한다고 이해하면 될까?

### View

- template을 인자로 받아 자신의 프로퍼티로 가지고 있는다.
- 이벤트를 등록한다.

### Controller

- 모델과 뷰를 연결하는 역할
- 컨트롤러에서 모델과 뷰에 접근할 것이기 때문에 컨트롤러 객체 안에서 모델과 뷰의 객체를 가지고 있는다. 이때 모델과 뷰는 인자로 전달받는다.
- 사용자의 요청과 액션을 받는다.

---

## Q&A

- 모듈화시키기 위해서는 왜 즉시 실행 함수로 코드를 감싸주는 거지?  
  즉시 실행하니까 따로 호출할 필요가 없지  
  즉시 실행하고 의존성 관계가 없는 변수는 가비지 컬렉팅에 의해서 삭제가 되겠지

- 이벤트는 컨트롤러나 뷰 둘 중 어디에서 등록해도 괜찮은건가?  
  그게 가능한가? 이벤트 핸들러를 컨트롤러에서 정의하지 않나?
