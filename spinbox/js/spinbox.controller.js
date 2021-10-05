(function (exports) {
  function SpinboxController() {
    this.spinboxModel = new SpinboxModel();
    this.spinboxView = new SpinboxView();

    // 초기값 렌더
    this.spinboxView.render(this.spinboxModel.getData());

    const increaseBtn = document.querySelector(".btn-increase");
    const decreaseBtn = document.querySelector(".btn-decrease");

    increaseBtn.addEventListener("click", this.onClickIncrease.bind(this));
    decreaseBtn.addEventListener("click", this.onClickDecrease.bind(this));
  }

  SpinboxController.prototype = {
    onClickIncrease: function () {
      this.spinboxModel.increase();
      this.spinboxView.render(this.spinboxModel.getData());
    },
    onClickDecrease: function () {
      this.spinboxModel.decrease();
      this.spinboxView.render(this.spinboxModel.getData());
    },
  };

  exports.SpinboxController = SpinboxController;
})(this);

/*
1. 생성자 함수 작성
- 컨트롤러는 view와 model을 연결시키는 역할  
-> view와 model의 데이터와 함수에 모두 접근할 수 있어야 하기 때문에 각각의 객체를 컨트롤러 안에서 가지고 있다.

- 사용자 액션을 받아오는 역할  
생성자 함수 내에서 UI에 이벤트를 등록한다.

2. 메소드 작성
액션에 맞게 model의 메소드를 호출시킨 후,
model의 최신값을 불러와 view의 render 메소드에 연결

- 감소 버튼 클릭, onClickDecrease
- 증가 버튼 클릭, onClickIncrease
*/
