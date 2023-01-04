var word = ["b","o", "o", "t", "c", "a", "m", "p"];
var button = document.getElementById("btn");
var timerEl = document.getElementById("timer");
function start() {
    // var clock = setInterval(timer, 10000);
    
    var timeLeft = 10;
      
    
    var timeInterval = setInterval(function () {
      
      
      if (timeLeft > 1) {
        
        timerEl.textContent = timeLeft + ' seconds remaining';
        
        timeLeft--;
      } else if (timeLeft === 1) {
        
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
       
        timerEl.textContent = '';
        
        clearInterval(timeInterval);
  

        displayMessage();
      }
    }, 1000);
    
    function counter(){
    
    }
    
    function keyevent(){
    
    }
}
    
function timer(){
   
}

button.addEventListener("click", start)

