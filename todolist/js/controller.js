(function (exports) {
  "use strict";
  function Controller(model, view) {
    console.log("controller created");
    this.model = model;
    this.view = view;
    var self = this;

    this.view.bind("newTodo", function (title) {
      self.addItem(title);
    });
    this.showAll();
  }

  Controller.prototype.addItem = function (title) {
    console.log("Controller.addItem executed");
    var self = this;

    if (title.trim() === "") {
      return;
    }

    self.model.create(title, function () {
      self.view.render("clearNewTodo");
    });
    this.showAll();
  };

  Controller.prototype.showAll = function () {
    console.log("Controller.showAll executed");
    var self = this;

    this.model.read(function (data) {
      self.view.render("showEntries", data);
    });
  };

  exports.app = exports.app || {};
  exports.app.Controller = Controller;
})(this);

/*
String.prototype.trim()
문자열의 양 끝 공백을 삭제하는 함수
왜 trim 메소드를 굳이 쓴걸까 그냥 (title === '') 이렇게 해도 되는 거 아닌가
*/
