$(document).ready(function(){

  var data = JSON.parse(sessionStorage.getItem('result'));

  console.log(data.type);
  console.log(data.th);

$( '#result_personal' ).html(data.th);

console.log(data);
});
