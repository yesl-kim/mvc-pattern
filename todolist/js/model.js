(function (exports) {
  "use strict";

  function Model(storage) {
    console.log("model created");
    this.storage = storage;
  }

  Model.prototype.create = function (title, callback) {
    console.log("Model.create executed");
    title = title || "";
    callback = callback || function () {};

    var newItem = {
      title: title.trim(),
      completed: false,
    };

    this.storage.save(newItem, callback);
  };

  // 콜백함수에 todos 배열을 인자로 전달
  Model.prototype.read = function (callback) {
    console.log("Model.read executed");
    this.storage.findAll(callback);
  };

  exports.app = exports.app || {};
  exports.app.Model = Model;
})(this);
