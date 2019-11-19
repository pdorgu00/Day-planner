var inpKey=document.getElementById("inpkey");
var btnInsert=document.getElementById("btnInsert");

btnInsert.onclick= function() {

    var key=inpKey.value;
    console.log(key);
};
$('#clock').fitText(1.3);

function update() {
  $('#inpkey').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000);

console.log(moment());

document.getElementById(inpKey.id).style.backgroundColor="#275052"