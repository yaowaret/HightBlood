(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){

  $('#submitForm').on('click', function(){
    var year = $('#year').val();
    var level = $('#level').val();
    var check = $('#check').val();
    var eat_medicine = $('#eat_medicine').val();
    var eat_time = $('#eat_time').val();
    var alcoholic = $('#alcoholic').val();
    var relax = $('#relax').val();
    var stress = $('#stress').val();
    var exercise = $('#exercise').val();
    var headache = $('#headache').val();
    var light = $('#light').val();
    var color_distortion = $('#color_distortion').val();
    var eyelight = $('#eyelight').val();
    var anorexia = $('#anorexia').val();
    var sleepless = $('#sleepless').val();
    var scare = $('#scare').val();
    var shake_hand = $('#shake_hand').val();
    var dismal = $('#dismal').val();
    var forgetful = $('#forgetful').val();
    var tired = $('#tired').val();
    var fast_heart = $('#fast_heart').val();
    var dizzy = $('#dizzy').val();
    var pain = $('#pain').val();
    var urinary_dis = $('#urinary_dis').val();
    var dyspnea = $('#dyspnea').val();


    var result;

    // if(year == '' || level == '' || check == '' || eat_medicine == '' || eat_time == '' || alcoholic == '' || relax == '' || stress == '' || exercise == ''
    //   || headache == '' || light == '' || color_distortion == '' || eyelight == '' || anorexia == '' || sleepless == '' || scare == ''|| shake_hand == '' || dismal == '' || forgetful == '' || tired == '' || fast_heart == '' || dizzy == '' || pain == '' || urinary_dis == '' || dyspnea == ''){
    //   alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    //     }
    if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '2') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '4') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '3') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '2') {
      result = {"type": 1,"th": "โรคจอประสาทตาเสื่อม", "en":"ADM"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '1' && dismal == '2') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '1' && dismal == '1' && relax == '3' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '1' && dismal == '1' && relax != '3' && exercise  == '3' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '1' && dismal == '1' && relax != '3' && exercise  != '3' && level <= '2' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '2' && color_distortion  == '1' && stress == '1' && dismal == '1' && relax != '3' && exercise  != '3' && level > '2' ) {
      result = {"type": 1,"th": "โรคจอประสาทตาเสื่อม", "en":"ADM"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '2' && dismal == '2') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '2' && dismal == '1') {
      result = {"type": 1,"th": "โรคเส้นเลือดในสมองแตก", "en":"Cerebrovascular Accident"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '1' && forgetful  == '2') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '1' && forgetful  == '1' && color_distortion == '2' && check == '1' && eyelight == '2' ) {
      result = {"type": 1,"th": "โรคหัวใจวายเรื้อรัง", "en":"Heart Attack"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '1' && forgetful  == '1' && color_distortion == '2' && check == '1' && eyelight == '1' ) {
      result = {"type": 1,"th": "โรคหัวใจขาดเลือด", "en":"Heart Failure"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '1' && forgetful  == '1' && color_distortion == '2' && check == '2') {
      result = {"type": 1,"th": "โรคหัวใจขาดเลือด", "en":"Heart Failure"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '1' && forgetful  == '1' && color_distortion == '1'&& eyelight == '2') {
      result = {"type": 1,"th": "โรคจอประสาทตาเสื่อม", "en":"ADM"};
    }
    else if(urinary_dis == '2' && dyspnea == '1' && scare == '1' && forgetful  == '1' && color_distortion == '1' && eyelight == '1') {
      result = {"type": 1,"th": "โรคหัวใจขาดเลือด", "en":"Heart Failure"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '1' && level <= '1') {
      result = {"type": 1,"th": "โรคไตวายเรื้อรัง", "en":"Chronic Kidney Failure"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '1' && level > '1') {
      result = {"type": 1,"th": "โรคไตวายเรื้อรัง และ โรคจอประสาทตาเสื่อม", "en":"Chronic Kidney Failure and ADM"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '1') {
      result = {"type": 1,"th": "โรคไตวายเรื้อรัง และ โรคหัวใจวายเรื้อรัง", "en":"Chronic Kidney Failure and Heart Attack"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax == '3' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless == '2' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress == '2') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise == '3') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise != '3' && year == '1' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise != '3' && year != '1'&& year == '3' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise != '3' && year != '1'&& year == '3' ) {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise != '3' && year != '1'&& year != '3' && eat_time == '1') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise != '3' && year != '1'&& year != '3' && eat_time != '1' && eat_medicine == '1') {
      result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"No risk"};
    }
    else if(urinary_dis == '1' && fast_heart  == '2' && light == '2' && color_distortion == '2' && relax != '3' && sleepless != '2' && stress != '2' && exercise != '3' && year != '1'&& year != '3' && eat_time != '1' && eat_medicine != '1') {
      result = {"type": 1,"th": "โรคไตวายเรื้อรัง", "en":"Chronic Kidney Failure"};
    }
    else if(urinary_dis == '1' && fast_heart  == '1' && color_distortion == '1') {
      result = {"type": 1,"th": "โรคเส้นเลือดในสมองแตก", "en":"Cerebrovascular Accident"};
    }
    else if(urinary_dis == '1' && fast_heart  == '1' && color_distortion == '2' && pain == '1' && dyspnea == '2') {
      result = {"type": 1,"th": "โรคไตวายเรื้อรัง และ โรคหัวใจขาดเลือด", "en":"Chronic Kidney Failure and Heart Failure"};
    }
    else if(urinary_dis == '1' && fast_heart  == '1' && color_distortion == '2' && pain == '1' && dyspnea == '1') {
      result = {"type": 1,"th": "โรคไตวายเรื้อรัง และ โรคหัวใจวายเรื้อรัง", "en":"Chronic Kidney Failure and Heart Attack"};
    }
    else if(urinary_dis == '1' && fast_heart  == '1' && color_distortion == '2' && pain == '2' && level  <= '2') {
      result = {"type": 1,"th": "โรคหัวใจขาดเลือด", "en":"Heart Failure"};
    }
    else if(urinary_dis == '1' && fast_heart  == '1' && color_distortion == '2' && pain == '2' && level  > '2') {
      result = {"type": 1,"th": "โรคเส้นเลือดในสมองแตก และ โรคหัวใจขาดเลือด", "en":"Cerebrovascular Accident and Heart Failure"};
    }




  });


});
