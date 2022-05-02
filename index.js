var Twit = require("twit");

require("dotenv").config();

const tadeuBot = new Twit({

    consumer_key: process.env.CONSUMER_KEY,  
  
    consumer_secret: process.env.CONSUMER_SECRET,    
    access_token: process.env.ACCESS_TOKEN,  
  
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

var tweets = ["Ainda não", "Não", "Acorda nunca", "Nada ainda", "Talvez mais tarde", '"Fui dormir 6 da manhã"', "Só dorme", "Tá dormindo", "Não dormi essa noite"]

var pickOne = tweets[Math.floor(Math.random() * tweets.length)];

function acaoDoNossoBot() {

    var postTweet = pickOne;
    tadeuBot.post(
       
       'statuses/update', 
       {status: postTweet},
       function(err, data, response) { 
          
          if (err) {
             
             console.log("ERRO: " + err);                    
             return false;
          }
   
          console.log(pickOne);  
       }
    )
 }

 acaoDoNossoBot();

 setInterval(acaoDoNossoBot, 1800000);