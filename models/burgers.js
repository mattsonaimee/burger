const orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.all("burgers", (res) => {
                cb(res);
            });
    },
  
    insertOne: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
                cb(res);
            });
    },
    updateone: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, (res) => {
                cb(res);
            });
    }
  };
  

  module.exports = burger;