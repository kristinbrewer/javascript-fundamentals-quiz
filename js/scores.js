function showhighscore() {
    // get scores from localstorage or set empty array
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
    // sort highscores by score 
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < highscores.length; i += 1) {
      // create list item for each high score
      var list = document.createElement('li');
      list.textContent = highscores[i].initials + ' - ' + highscores[i].score;
  
      // display on page
      var orderedlist = document.getElementById('highscores');
      orderedlist.appendChild(list);
    }
  }
  
  function clearscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearscores;
  
  // run function when page loads
  showhighscore();
  
  
  