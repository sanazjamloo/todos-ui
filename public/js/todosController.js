(function(){
  angular.module('todoApp')
    .controller('todosController', todosController);


  function todosController($http){

    var self = this;
    var rootUrl = "https://desolate-meadow-28084.herokuapp.com/"

    this.todoList = [
      {task:'call dad', done: false},
      {task:'get a gify for Mary', done: true}
    ];

    self.addTodo = addTodo;
    self.deleteTodo = deleteTodo;
    self.completedTodos = completedTodos;
    self.remainingTodos = remainingTodos;

    // add new todo to the list
    function addTodo(){
      self.todoList.push({task: self.text, done:false});
      self.text = null;
    }
















    $http.get(`${rootUrl}/todos`)
      .then(function(response) {
          self.todos = response.data;
          // console.log(self.todos[0]);
    });
  }
})()
