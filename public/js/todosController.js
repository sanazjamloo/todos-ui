(function(){
  angular.module('todo')
    .controller('todosController', todosController);


  function todosController($http){

    var self = this;
    var rootUrl = "https://desolate-meadow-28084.herokuapp.com/"
    // For example, var server = 'https://enigmatic-garden-65625.herokuapp.com/api/'

    $http.get(`${rootUrl}/todos`)
      .then(function(response) {
          self.todos = response.data;
          // console.log(self.todos[0]);
    });
  }
})()
