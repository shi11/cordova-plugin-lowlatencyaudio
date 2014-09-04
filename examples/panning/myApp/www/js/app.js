// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
}).controller('MyCtrl', function($scope, $timeout, $ionicPlatform) {

        var lla;

        $ionicPlatform.ready(function() {
            if( window.plugins && window.plugins.LowLatencyAudio ) {
                lla = window.plugins.LowLatencyAudio;
                lla.preloadAudio( 'music', "Sonar_Ping.mp3", 1, 1, function(msg){
                }, function(msg){
                    console.log( 'error: ' + msg );
                });
            }

            $scope.data = {pan:0};

            $scope.$watch('data.pan', function(value) {
                console.log('changed ' + value);
                play( value - 1 );
            });

            function play(value){
                lla.play( 'music', value );
            }

            $scope.play = function(){
                play( 0 );
            }
        })




            // now start playing
            /*lla.loop( 'music' );

             // stop after 1 min
             window.setTimeout( function(){
             //lla.stop( 'click' );
             lla.stop( 'music' );

             lla.unload( 'music' );
             lla.unload( 'click' );
             }, 1000 * 60 );*/

    });
