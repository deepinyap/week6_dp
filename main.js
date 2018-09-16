
var cities = ['nyc', 'sf', 'la', 'atx', 'syd']

var selectBox = $('#city-type')

cities.forEach(function(city) {
  selectBox.append('<option>' + city.toUpperCase() + '</option>')
})

selectBox.change(function(){
  cities.forEach(function(city){
    if (selectBox.val() === city.toUpperCase()) {
      $('body').removeClass()
      $('body').addClass(city)
    }
    })
  })
//
//   if (selectBox.val() === 'nyc') {
//     $('body').css('background-image', 'url(images/nyc.jpg)')
//   } else if (selectBox.val() === 'sf') {
//     $('body').css('background-image', 'url(images/sf.jpg)')
//   } else if (selectBox.val() === 'la') {
//     $('body').css('background-image', 'url(images/la.jpg)')
//   } else if (selectBox.val() === 'atx') {
//     $('body').css('background-image', 'url(images/atx.jpg)')
//   } else if (selectBox.val() === 'syd') {
//     $('body').css('background-image', 'url(images/syd.jpg')
//   } else {
//     $('body').css('background-image', 'url(images/citipix_skyline.jpg')
//   }
// })
