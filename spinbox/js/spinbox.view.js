(function (exports) {
  function SpinboxView() {}

  SpinboxView.prototype = {
    render: function (value) {
      const result = document.querySelector(".result");
      result.innerText = value;
    },
  };

  exports.SpinboxView = SpinboxView;
})(this);

/* 
1. 생성자 함수 구현
view는 특별한 인스턴스를 포함하고 있을 필요가 없다. 

2. 메소드 구현 (prototype 객체의 메소드)
- render 함수  
화면을 그리는 역할

*/
