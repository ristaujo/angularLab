"use strict";
{
  function toDoCtrl() {
    const vm = this;

    vm.items = [];
    vm.addTask = (task, completed) => {
      vm.items.push({
        task: vm.item.task,
        completed: false
      })
      vm.item = {};


    };
    vm.removeTask = (index, task) => {
      vm.items.splice(index, 1);
    
    };

    vm.completeTask = (index, completed) => {
      vm.items[index].completed = true
    }
  }
  angular
    .module("todoApp")
    .controller("toDoCtrl", toDoCtrl);

}