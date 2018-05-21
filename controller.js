"use strict";
{
  function toDoCtrl() {
    const vm = this;

    vm.items = [
      {
        task: "Grocery Shopping",
        completed: true,
      },
      {
        task: "Oil Change",
        completed: false,
      },
      {
        task: "Cut the Grass",
        completed: true,
      },
      {
        task: "Make Beats",
        completed: false,
      },
      {
        task: "Feed Cats",
        completed: true,
      },
      {
        task: "Clean Bathroom",
        completed: false,
      }
    ];
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