$(document).ready(function(){


        var $body = $('body');
        $body.html('');
        
        var index = streams.home.length - 1;
        var index2 = streams.users

        var $header1 = $('<h1 style="color:navy">TWITTLE DROPPING!!!</h1>');
        $header1.appendTo($body);
        

        // var $tweetButton = $('<button type="button">click</button>'); 
        // $tweetButton.appendTo($body);
        var alreadyUser = {};
          alreadyUser.shawndrost = streams.users.shawndrost;
          alreadyUser.sharksforcheap = streams.users.sharksforcheap;
          alreadyUser.mracus = streams.users.mracus;
          alreadyUser.douglascalhoun = streams.users.douglascalhoun;
          console.dir(alreadyUser.shawndrost);

        //   for(var key in alreadyUser){
        // var $tweetUser = $('<button type="button" id="key"></button>');
        //                $tweetUser.text('@' + key); 
        //                $tweetUser.appendTo($body);


        //             }



        var $sDrost = $('<button id="shawndrost" type="button">@shawndrost</button>');
        var $sharksCheap = $('<button id="sharksforcheap" type="button">@sharksforcheap</button>')
        var $mRacus = $('<button id="mracus" type="button">@mracus</button>')
        var $dougCal = $('<button id="douglascalhoun" type="button">@douglascalhoun</button>')

        
        $sDrost.appendTo($body);
        $sharksCheap.appendTo($body);
        $mRacus.appendTo($body);
        $dougCal.appendTo($body);


        $sDrost.click(function(){
          var randomTweet = randomMessage();
          var timeStamp = new Date();
          var twId = $('<h2></h2>');
          var tw = $('<p></p>');
          twId.text('@shawndrost--');
          tw.text(randomTweet + ' -- ' + timeStamp);
          twId.appendTo($body);
          tw.appendTo($body);
          //timeStamp.appendTo($body);
          });

        $sharksCheap.click(function(){
          var randomTweet = randomMessage();
          var timeStamp = new Date();
          var twId = $('<p id="twitHandle"></p>');
          var tw = $('<p id="twitText"></p>');
          twId.text('@sharksforcheap--');
          tw.text(randomTweet + ' -- ' + timeStamp);
          twId.appendTo($body);
          tw.appendTo($body);
          //timeStamp.appendTo($body);
          });

        $mRacus.click(function(){
          var randomTweet = randomMessage();
          var timeStamp = new Date();
          var twId = $('<p id="twitHandle"></p>');
          var tw = $('<p id="twitText"></p>');
          twId.text('@mracus--');
          tw.text(randomTweet + ' -- ' + timeStamp);
          twId.appendTo($body);
          tw.appendTo($body);
          //timeStamp.appendTo($body);
          });

        $dougCal.click(function(){
          var randomTweet = randomMessage();
          var timeStamp = new Date();
          var twId = $('<p id="twitHandle"></p>');
          var tw = $('<p id="twitText"></p>');
          twId.text('@douglascalhoun--');
          tw.text(randomTweet + ' -- ' + timeStamp);
          twId.appendTo($body);
          tw.appendTo($body);
          //timeStamp.appendTo($body);
          });


        // $.appendTo($body);
        // $('sharksCheap').appendTo($body);
        // $mRacus.appendTo($body);
        // dougCal.appendTo($body);
          

          var count = 0;


        // $('[id]').click(function(){
        //   var randomTweet = randomMessage();
        //   var timeStamp = new Date();
        //   var twId = $('<p></p>');
        //   var tw = $('<p></p>');
        //   twId = $('[id]').text($());
        //   tw.text(randomTweet);
        //   twId.appendTo($body);
        //   tw.appendTo($body);
        //   //$(this).remove();
        // });

});

//$(this).text('@' + this.alreadyUser + " - " + randomTweet);
        //     for(var key in alreadyUser){

        //   var tweet = streams.home[index];          
        //   var $tweet = $('<div id="tweet"></div>');                  
        //   $tweet.text('--' + tweet.message + ' - ' + tweet.created_at);
        //   $tweet.appendTo($body);
            
        //     $(this).toggle($($tweet).appendTo($body));
        //     }

        // // Show tweets
        // while(index >= 0){
        //  
         

        //   index -= 1;
        // }

        // $('#tUser').on('click',  function(){
        //   var newTweet = $generateRandomTweet();
        //   $tweet.appendTo($body);
        // });



