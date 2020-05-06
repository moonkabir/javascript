var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

// btn.addEventListener("click",function(){
//     let c = msg.value.toLowercase();
//     let reply = "";
//     if(c.match('hello')){
//         reply = "hello there!"
//     }
//     else if (c.match('sing for me')){
//         reply = "ami banglay gan gai"
//     }
//     else{
//         reply = "buhji nai";
//     }
//     result.innerHTML = reply;
// });


btn.addEventListener("click", function() {
  let c = msg.value.toLowerCase();
  let reply = "";
  if (c.match("hello")) {
    reply = "hello there!";
  } else if (c.match("sing for me")) {
    reply = "Ami banglay gan gai";
  } else if (c.match("tomar nam ki")) {
    reply = "Amar nam Kuddus Bot";
  } else {
    reply = "Bujhi nai";
  }
  result.innerHTML = reply;
  var kotha = new SpeechSynthesisUtterance(reply);
  window.speechSynthesis.speak(kotha);
});
