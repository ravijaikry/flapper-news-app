angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts',
function($scope,posts){
  $scope.posts = posts.posts;
//Function  to add post
  $scope.addPost = function(){
  if(!$scope.title || $scope.title === ''){ return;}
   posts.create({
    title: $scope.title,
    link: $scope.link,
   });
  $scope.title = '';
  $scope.link = '';
  }
// Function to upvotes
  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  }
}]);