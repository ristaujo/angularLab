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

  };

  angular
    .module("todoApp")
    .controller("toDoCtrl", toDoCtrl);
} 