// Write your JavaScript here
//Percent change calculator uses this formula: 
//((y2 - y1) / y1)*100 = your percentage change.

// var cents = $('cents').value;
// var dollar = 1;
// var quarters = .25;
// var dimes = .10;
// var nickels = .05;
// var pennies = .01;

// funtion calculateChange(due, values) {
//     var remains = due;
//     var change = [];

//     for (var currentValue in values) {
//         if (remains / value[currentValue] > 1) {
//             change[values[currentValues]] = Math.floor(remains / values[currentValue]);
//             remains = remains % values[currentValue];
//         }
//     }
//     return change;
//     console.log(calculateChange)
// }
var Messenger = function(el){
    'use strict';
    var m = this;
    
    m.init = function(){
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        'Change Calculator',
        'Calculate The Change In currency',
        'No Bitcoin'
        
      ];
      
      setTimeout(m.animateIn, 100);
    };
    
    m.generateRandomString = function(length){
      var random_text = '';
      while(random_text.length < length){
        random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } 
      
      return random_text;
    };
    
    m.animateIn = function(){
      if(m.current_length < m.messages[m.message].length){
        m.current_length = m.current_length + 2;
        if(m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }
        
        var message = m.generateRandomString(m.current_length);
        $(el).html(message);
        
        setTimeout(m.animateIn, 20);
      } else { 
        setTimeout(m.animateFadeBuffer, 20);
      }
    };
    
    m.animateFadeBuffer = function(){
      if(m.fadeBuffer === false){
        m.fadeBuffer = [];
        for(var i = 0; i < m.messages[m.message].length; i++){
          m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
        }
      }
      
      var do_cycles = false;
      var message = ''; 
      
      for(var i = 0; i < m.fadeBuffer.length; i++){
        var fader = m.fadeBuffer[i];
        if(fader.c > 0){
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      
      $(el).html(message);
      
      if(do_cycles === true){
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 9000);
      }
    };
    
    m.cycleText = function(){
      m.message = m.message + 1;
      if(m.message >= m.messages.length){
        m.message = 0;
      }
      
      m.current_length = 0;
      m.fadeBuffer = false;
      $(el).html('');
      
      setTimeout(m.animateIn, 200);
    };
    
    m.init();
  }
  
  console.clear();
  var messenger = new Messenger($('#messenger'));

function roundToTwo(num) {
    return (Math.round(num + "e+2") + "e-2");
}

function calculate() {
    var price =     $("#amount-due").val();
    var money =     $("#amount-received").val();
    var change =    parseFloat(money - price) * 100;
    var dollar =    parseInt(change / 100);                 change %= 100;
    var quarter =   parseInt(change / 25);                  change %= 25;
    var dime =      parseInt(change / 10);                  change %= 10;
    var nickel =    parseInt(change / 5);                   change %= 5;
    var cent =      Math.round(change);   
    
    

    // var cents = change % 1;
    // var dollar = change - cents;
    // var quarter = Math.floor(centsRemaining / .25);
    // var centsRemaining = centsRemaining - (quarter * .25);
    // var dime = Math.floor(centsRemaining / .10);
    // var centsRemaining = centsRemaining - (dime * .10);
    // var nickle = Math.floor(centsRemaining / .05);
    // var centsRemaining = centsRemaining - (dime * .05);
    // var penny = Math.floor(centsRemaining / .01);

    $("#dollars-output").text(dollar);
    $('#quarters-output').text(quarter);
    $("#dimes-output").text(dime);
    $("#nickels-output").text(nickel);
    $("#pennies-output").text(cent);    

    console.log(dollar);
    console.log(quarter);
    console.log(dime);
    console.log(nickel);
    console.log(cent);
    

    //$(dollar).text("#dollars")
}



$("#calculate-change").click(calculate);
// var calculate_click = function ()
// {
// var cents = $("cents").value;
// if (cents > 24){
// var quarters = Math.floor(cents/25);
// $("quarters").value = quarters
// }
// if (cents > 9){
// var dimes = Math.floor(cents/10); 
// $("dimes").value = dimes
// }
// if (cents > 4){
// var nickels = Math.floor(cents/05);
// $("nickels").value = nickels
// }
// if (cents > 0) {
// var pennies = Math.floor(cents/01);
// $("pennies").value = pennies
// }
// console.log(dollars);
// console.log(quarters);
// console.log(dimes);
// console.log(nickles);
// console.log(pennies);
// }
// $( "#calculateChange" ).click(calculate_click);














// quarters = cents % 25;
// cents = cents - (quarters * 25);
// dimes = cents % 10;
// cents = cents - (dimes * 10);
// nickels = cents %5;
// cents = cents - (nickels * 5);
// pennies = cents % 1;
// cents = cents - (nickels);





