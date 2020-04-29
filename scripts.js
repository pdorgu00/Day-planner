// The current day//
window.onload = function () {
    var today = new Date();
    date = moment().format('LL');
    
    $('#currentDay').html(date);
 }
 var Hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
 
 
 var $container = $(".container");


 $.each(Hours, function (index, value) {
    var backgroundColor = getTime(value)
    
    var $newRow = $('<div>').addClass('row');
    
    var $newCol1 = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
    var $newCol2 = $('<div></div>').addClass('col-sm-10 past description '+backgroundColor+' time-' + value);
    var $newCol3 = $('<button></button>').addClass('col-sm-1 saveBtn');
    var textarea = $('<textarea></textarea>').addClass('col-sm-12 input');
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
    
    $newRow.append($newCol1);
    $newRow.append($newCol2);
    $newCol2.append(textarea);
    $newRow.append($newCol3);
    $newCol3.append(icon);
    $container.append($newRow);
 })
 $('.saveBtn').click(function () {
    var time = $(this).siblings('div.time').text();
    console.log(time);
    var input = $(this).siblings('div.description').children("textarea").val();
    console.log(input);
    localStorage.setItem(time, input);
 })
//storage///
 //$('.time-9AM .input').val(localStorage.getItem('9AM'))
 ///storage///
 
 $.each(Hours, function (index, value) {
    console.log(value)
    $('.time-'+value+' .input').val(localStorage.getItem(value))
 })
function getTime(current) {
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   
   // Check whether AM or PM
   var newformat = hours >= 12 ? 'PM' : 'AM';  
   
   // Find current hour in AM-PM Format
   hours = hours % 12;  
   
   // To display "0" as "12"
   hours = hours ? hours : 12;  
   minutes = minutes < 10 ? '0' + minutes : minutes;
   var currentTime = hours + newformat;
   
   if(currentTime == current){
     
      return 'red'
   }
   if(hours == 12 && hours > parseInt(current) && current.includes('PM')){
      return 'green'
   }
   if(current.includes('AM') && newformat == 'PM'){

      return 'gray'
   } else if(newformat == 'AM' && current.includes('PM')){
      return 'green'
   }
   
   if(current.includes(newformat)){
      var currentNumber = parseInt(current.replace(newformat, ''))
      if(currentNumber <= hours){
         return 'gray'
      } else if(currentNumber == 12){
         return 'gray'
      } else {
         return 'green'
      }
   }
   console.log(hours + newformat);
   return ''
}
  
 //for (var i = 0; i < localStorage.length; i++){
   //$('.time-'+ value).val(localStorage.getItem(localStorage.key(i)));
//}
//  $('#col-sm-10').html();
// localStorage.content = $('#col-sm-10').html();
// $('#col-sm-10').html(localStorage.content);
