function initialize() {
    var input = document.getElementById('searchTextField');
    new google.maps.places.Autocomplete(input);
  }
  
google.maps.event.addDomListener(window, 'load', initialize);

console.log('another-file.js file loaded-2');



$( ".btn-search" ).click(function() {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log( "15 - length    length() =  ", $('#searchTextField').val().trim().length  );
  console.log( "16 -   btn-search   .clicked called.", $('#searchTextField').val()  );

  let address = $('#searchTextField').val() ; 
  localStorage.setItem('address', address );
  let spl = address.split(' '); 
  let street = spl[0] + spl[1] + spl[2]; 
  let city = spl[3]; 
  localStorage.setItem('address', address );
  localStorage.setItem('street', street );
  localStorage.setItem('city', city );

  if (  $('#searchTextField').val().trim().length  > 25  ){
  // window.location.replace("http://localhost:3000/contact-us.html");
  // similar behavior as clicking on a link
  window.location.href = "http://localhost:3000/contact-us.html";
  }
  
});


$( ".pac-item  .pac-item-query" ).click(function() {
  console.log( "pac  for .click() called." );
});


$(".pac-item-selected").on('click', function(event){
  console.log( "pac-item-selected  called." );

  event.stopPropagation();
  event.stopImmediatePropagation();
});


// window.onscroll = function() {windowOnscroll()};

// var navbar = document.getElementById("navbar");
// // var sticky = navbar.offsetTop;

// function windowOnscroll() {
//   if (window.pageYOffset >= sticky) {
//     console.log(  ' adding class sticky'); 
//     // navbar.classList.add("sticky")
//   } else {
//     // navbar.classList.remove("sticky");
//     console.log(  'Removing Class Sticky'); 
//   }
// }


$(window).scroll(function() {
  if ($(window).scrollTop()  > $(window).height() / 2) {        
      console.log(  ' add Nav2  class sticky'); 


      $(".nav2").show(); 

  }

  if ($(window).scrollTop()  < $(window).height() / 2) {        
    $(".nav2").hide(); 

    console.log(  ' REMOVE Nav2  class sticky'); 
}
});





