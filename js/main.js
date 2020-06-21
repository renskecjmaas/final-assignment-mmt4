/*---------------------------color theme switch----------------------------*/
$(document).ready(function(){
$('#buttonSwitch').click(function(){   
  event.preventDefault(); 
  if ($('body').hasClass('darkActive') ) {
      $('body').removeClass('darkActive');
      $( "#buttonSwitch").css({"left": "89%"});
  } else {
      $('body').addClass('darkActive'); 
      $( "#buttonSwitch").css({"left": "93%"});
  }
});


/*--------------------------------accordion--------------------------------*/
$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
});


/*----------------------------horizontal slider----------------------------*/
$('.main-gallery').flickity({
  cellAlign: 'left',
  contain: true,
  freeScroll: true
});


/*-------------------------------videoplayer-------------------------------*/
$(".video-js").mouseover(function(){
  $( ".videoButtons").css({"opacity": "100%", "background-color": "#F4F2FF"})
})
$(".video-js").mouseout(function(){
  $( ".videoButtons").css({"opacity": "0%"})
})
$(".videoButtons").mouseover(function(){
  $( ".videoButtons").css({"opacity": "100%", "background-color": "#E3E1ED"})
})

$(".video-js").each(function(){
  var thisID = $(this).attr('id');
  var player = videojs(thisID);
  var playButton = $(this).parent().find(".playButton");
  var rewindButton = $(this).parent().find(".rewindButton");
  var forwardButton = $(this).parent().find(".forwardButton");
  var dialog = $(this).parent().find(".popUp");

  player.ready(function (){
    $(playButton).click(function(){   
      event.preventDefault();  
      if ( $(this).hasClass('play') ) {
        $(this).removeClass('play');
        player.pause();
      } else {
        $(this).addClass('play'); 
        player.play();
      }
      
      $(rewindButton).click(function(){ 
        event.preventDefault();  
        player.currentTime(player.currentTime() - 10);
      })
      $(forwardButton).click(function(){ 
        event.preventDefault();  
        player.currentTime(player.currentTime() + 10);
      })
      
      var duration = player.duration();
      
      player.on('timeupdate', function(){
        var time = player.currentTime();
        if(time >= duration){
          $(dialog).css({"top": "0px"})
        }
      })

      $('.quit').click(function(){   
        event.preventDefault();  
        $(dialog).css({"top": "100%"})
      });
    });
    
  })
})
});