$(document).ready(function() {

$('.handle').on('click', function() { 
  $('nav ul').toggleClass('show');
 });


});


        var myCenter=new google.maps.LatLng(50.47479573,30.53420305);
        function initialize() {
            var mapProp = {
                center:myCenter,
                zoom:13,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
          var marker=new google.maps.Marker({
              position:myCenter,
              icon:'content/images/contact.png',
              //animation:google.maps.Animation.BOUNCE
            });
          marker.setMap(map);
          var contentString='<div id="content_string">'+'<h6>'+'HILLEL IT SCHOOL'+'</h6>'+'<p>'+'01001,Hmelnitskoho21'+'</p>'+'<p>'+'hillel@gmail.com'+'</p>'+'<p>'+'+38(063)117-08-94'+'</p>'+'</div>';
          var infowindow = new google.maps.InfoWindow({
              content:contentString
            });
          infowindow.open(map,marker);
        }
        google.maps.event.addDomListener(window, 'load', initialize);


