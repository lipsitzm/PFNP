$(document).ready(function() {
  $('#calculate').click(function() {
    var left = parseFloat($('#left').val()),
        operand = $('#operand').val(),
        right = parseFloat($('#right').val()),
        result;

    switch(operand) {
      case "+":
        result = left + right;
        break;
      case "-":
        result = left - right;
        break;
      case "*":
        result = left * right;
        break;
      case "/":
        result = left / right;
        break;
    }

    $('#result').text(result);
    if(result > 100) {
      $('#result').addClass('green');
    } else if (result < 0) {
      $('#result').addClass('red');
    } else {
      $('#result').removeClass('green');
      $('#result').removeClass('red');
    }

    var data = {
      Value1: left,
      Value2: right,
      Operand: operand,
      Result: result
    };
    $.post('http://localhost:8080/api/', data);
  });
});
