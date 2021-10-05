# Module Pattern

- JS의 코드 관리 기법 중 하나로 객체 핸들링을 위한 방법론 중 하나
- 객체에 유효범위를 주어 private, public을 구분하여 **캡슐화**를 할 때 사용하는 방법
- namespace pattern에 lexical scope를 추가한 것으로 보면 된다.
- 모듈 패턴을 사용하면 객체 지향적인 코드를 작성할 수 있다.
- 모듈 시스템이란, 즉시 실행 함수에 this인자를 넘겨주고 함수 내부에서 exports란 인자로 접근할 수 있는 패턴을 말한다

```
(function(){
  // something to do
})()
```

```js
// 패턴 적용 전
// global scope에 변수, 함수 모두 존재하는 상황
var countGlobal = 0;
var increaseCountGlobal = function () {
  return ++countGlobal;
};
var decreaseCountGlobal = function () {
  return --countGlobal;
};

// 패턴 적용 후
// test라는 객체에 변수와 함수를 모두 집어넣었다.
// -> 전역 변수가 없음
// 필요한 함수만, 즉 public으로 만들 함수(increaseCount, decreaseCount)만 리턴함으로써
// 변수 count는 외부에서 접근할 수 없는 private 변수로 만들었다.
var test = (function () {
  var count = 0;
  return {
    increaseCount: function () {
      return ++count;
    },
    decreaseCount: function () {
      return --count;
    },
  };
})();

// 네임스페이스 패턴과 함께 사용하기
// app 이라는 전역 객체에 testModule이라는 모듈을 추가시켰다.
// 모듈 패턴과 네임 스페이스 패턴을 함께 사용하면 보다 깔끔한 코드가 완성된다.
var app = app || {};
app.testModule = (function() {
  var count = 0
  return (
    increaseCount: function(){},
    decreaseCount: function(){}
  )
})
```

## Q&A

- 모듈 시스템
- namespace pattern은 뭐지?  
  전역 변수?
- 캡슐화 vs 정보은닉? 캡슐화 === 정보은닉?
- 모듈 패턴과 네임스페이스 패턴을 같이 사용하는 장점?  
  왜 그렇게 쓰는거지?
