(function (exports) {
  "use strict";
  function View(template) {
    console.log("view created");
    this.template = template;

    this.$todoList = document.querySelector(".todo-list");
    this.$newTodo = document.querySelector(".new-todo");
  }

  // view -> controller
  // view 에서 발생하는 이벤트를 컨트롤러에게 전달
  // 이때 컨트롤러에게 전달받은 이벤트 핸들러의 인자로 데이터를 전달
  // 즉 view에서는 이벤트를 등록하고 (-> 사용자의 액션을 받고)
  // 컨트롤러에게 전달받은 이벤트 핸들러에 데이터를 '바인드'해주는 역할
  View.prototype.bind = function (event, handler) {
    var self = this;
    if (event === "newTodo") {
      console.log("View.bind.newTodo executed!");
      self.$newTodo.addEventListener("change", function () {
        handler(self.$newTodo.value);
      });
    }
  };

  View.prototype.render = function (viewCmd, parameter) {
    var self = this;
    var viewCommands = {
      showEntries: function () {
        console.log("view.render.showEntries executed");
        self.$todoList.innerHTML = this.template.insert(parameter);
      },
      clearNewTodo: function () {
        console.log("View.render.clearNewTodo executed");
        self.$newTodo.value = "";
      },
    };
    viewCommands[viewCmd]();
  };

  exports.app = exports.app || {};
  exports.app.View = View;
})(this);
