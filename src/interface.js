var game = new Game();
var frame1 = new Frame();
var frame2 = new Frame();

$(document).ready(function() {
  
  $('#submitScore').click(function() {
    r1 = parseInt(roll1.value, 10)
    r2 = parseInt(roll2.value, 10)
    game.addScore(r1,r2)
    $('#frame-score').text(r1 + r2)
    $('#game-score').text(game.score)
    if(r1 === 10) {
      $('#text')
    }
  });

  $('#frameCount').text(game.frameCount)




});
    
    // function updateFrameScore() {
    //   $('#frame-score').text(('#roll1').value+('#roll2').value);
    // };