 $(document).ready(function(){

        $(document).ready(function(){

        var $body = $('body');
        $body.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
        var $header1 = $('<h1>TWITTLE DROPPING!!!</h1>');
          var $tweet = $('<div style="color:red", "font-style:italic"></div>');


          
          $tweet.text('@' + tweet.user + ': ' + tweet.message + ' - ' + tweet.created_at);
          $tweet.appendTo($body);

          //$("h1").after($tweet);
          index -= 1;
        }

  });
