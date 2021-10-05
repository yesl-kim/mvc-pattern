(function (exports) {
  "use strict";

  function Storage(name, callback) {
    console.log("storage created");
    callback = callback || function () {};

    this._dbName = name;

    if (!localStorage[name]) {
      var data = {
        todos: [],
      };
      localStorage[name] = JSON.stringify(data);
    }
  }

  // 로컬 스토리지에 저장된 todos 배열을 인자로 받은 콜백함수에 전달함
  Storage.prototype.findAll = function (callback) {
    console.log("Storage.findAll executed");
    callback = callback || function () {};

    callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
  };

  // 새로운 todo를 추가하거나 수정한뒤 로컬스토리지에 저장
  Storage.prototype.save = function (updateData, callback, id) {
    console.log("Storage.save executed");
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;
    callback = callback || function () {};

    // id가 있으면 해당 id의 todo를 전달받은 updateData로 덥어쓰기하고 (todo 수정)
    // id가 없으면 updateData를 todos에 추가 (todo 생성)
    if (id) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          for (var key in updateData) {
            todo[i][key] = updateData[key];
          }
          break;
        }
      }
      localStorage[this._dbName] = JSON.stringify(data);
      callback.call(this, toods);
    } else {
      updateData.id = new Date().getTime();

      todos.push(updateData);
      localStorage[this._dbName] = JSON.stringify(data);
      callback.call(this, [updateData]);
    }
  };

  exports.app = exports.app || {};
  exports.app.Storage = Storage;
})(this);
