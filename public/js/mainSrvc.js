angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    return $http({
    	method: 'GET',
    	url: '/api/chats'
    })
  }

  this.addChats = function(chat){
    return $http({
    	method: 'POST',
    	url: '/api/chats',
    	data: chat  //whatever you put here is the req.body
    })
  }

  this.deleteChats = function(){
  	return $http({
  		method: 'DELETE',
  		url: '/api/chats'
  	})
    
  }

  this.setScreenname = function(screenname) {
  	var dataObj = {
  		screenname: screenname
  	}
  	return $http({
  		method: 'POST',
  		url: '/api/screenname',
  		data: dataObj
  	})
  }

});
