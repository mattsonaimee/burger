var orm = require("../config/orm.js");

var burger = {
    findAll: (cb) => {
        orm.findAll("burgers", (res) => {
                cb(res);
            });
    },
  
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
                cb(res);
            });
    },
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, (res) => {
                cb(res);
            });
    }
  };
  

  module.exports = burger;