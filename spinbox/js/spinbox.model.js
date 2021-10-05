(function (exports) {
  function SpinboxModel(value) {
    value = value || 100;
    this.data = value;
  }

  SpinboxModel.prototype = {
    increase: function (value) {
      value = value || 1;
      this.data += value;
      return this.data;
    },
    decrease: function (value) {
      value = value || 1;
      this.data -= value;
      return this.data;
    },
    getData: function () {
      return this.data;
    },
  };

  exports.SpinboxModel = SpinboxModel;
})(this);

/*
1. 생성자 함수 작성 (데이터)
model은 데이터를 담고 있다.
여기서는 필요한 데이터를 data라는 프로퍼티에 저장한다.

2. 메소드 작성
model에는 data를 읽고 변경할 수 있는 함수를 추가한다.
프로토타입을 통해 메소드를 정의해주게 되면 불필요한 메모리 낭비를 방지할 수 있다
- data를 읽을 수 있는 getData()
- data를 감소시키는 decrease()
- data를 증가시키는 increase()

*/
