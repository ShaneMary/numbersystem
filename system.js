 // Get references to the buttons
 const disable = document.getElementById('disable');
 const enable1 = document.getElementById('enable1');
 const enable2 = document.getElementById('enable2');
 const enable3 = document.getElementById('enable3');
 const Button0 = document.getElementById('Button0');
 const Button1 = document.getElementById('Button1');
 const Button2 = document.getElementById('Button2');
 const Button3 = document.getElementById('Button3');
 const Button4 = document.getElementById('Button4');
 const Button5 = document.getElementById('Button5');
 const Button6 = document.getElementById('Button6');
 const Button7 = document.getElementById('Button7');
 const Button8 = document.getElementById('Button8');
 const Button9 = document.getElementById('Button9');
 const ButtonA = document.getElementById('ButtonA');
 const ButtonB = document.getElementById('ButtonB');
 const ButtonC = document.getElementById('ButtonC');
 const ButtonD = document.getElementById('ButtonD');
 const ButtonE = document.getElementById('ButtonE');
 const ButtonF = document.getElementById('ButtonF');
 disable.addEventListener('click', function() {     
    
   Button0.disabled = false;
   Button1.disabled = false;
   Button2.disabled = true;
   Button3.disabled = true;
   Button4.disabled = true;
   Button5.disabled = true;
   Button6.disabled = true;
   Button7.disabled = true;
   Button8.disabled = true;
   Button9.disabled = true;
   ButtonA.disabled = true;
   ButtonB.disabled = true;
   ButtonC.disabled = true;
   ButtonD.disabled = true;
   ButtonE.disabled = true;
   ButtonF.disabled = true;

   document.getElementById("binary").style.display="block";
   document.getElementById("decimal").style.display="none";
 });
 enable1.addEventListener('click', function() {
    
   document.getElementById("decimal").style.display="block";
 document.getElementById("binary").style.display="none";
   Button0.disabled = false;
   Button1.disabled = false;
   Button2.disabled = false;
   Button3.disabled = false;
   Button4.disabled = false;
   Button5.disabled = false;
   Button6.disabled = false;
   Button7.disabled = false;
   Button8.disabled = false;
   Button9.disabled = false;
   ButtonA.disabled = true;
   ButtonB.disabled = true;
   ButtonC.disabled = true;
   ButtonD.disabled = true;
   ButtonE.disabled = true;
   ButtonF.disabled = true;
    
 });
 enable2.addEventListener('click', function() {
   Button0.disabled = false;
   Button1.disabled = false;
   Button2.disabled = false;
   Button3.disabled = false;
   Button4.disabled = false;
   Button5.disabled = false;
   Button6.disabled = false;
   Button7.disabled = false;
   Button8.disabled = true;
   Button9.disabled = true;
   ButtonA.disabled = true;
   ButtonB.disabled = true;
   ButtonC.disabled = true;
   ButtonD.disabled = true;
   ButtonE.disabled = true;
   ButtonF.disabled = true;
 });
 enable3.addEventListener('click', function() {
   Button0.disabled = false;
   Button1.disabled = false;
   Button2.disabled = false;
   Button3.disabled = false;
   Button4.disabled = false;
   Button5.disabled = false;
   Button6.disabled = false;
   Button7.disabled = false;
   Button8.disabled = false;
   Button9.disabled = false;
   ButtonA.disabled = false;
   ButtonB.disabled = false;
   ButtonC.disabled = false;
   ButtonD.disabled = false;
   ButtonE.disabled = false;
   ButtonF.disabled = false;
 });
 const display = document.getElementById('display');

function appendToDisplay(value) {
 display.value += value;
}

function clearDisplay() {
 display.value = '';
}
function deleteLastDigit() {
     var currentDisplayValue = document.getElementById('display').value;
     document.getElementById('display').value = currentDisplayValue.slice(0, -1);
   }

function convert(){
   var display = document.getElementById("display").value;

   if (!/^[01]+$/.test(display)) {
     alert("Please enter a valid binary number (0s and 1s only).");
     return;
   }
 
   var output = parseInt(display, 2); 
 
   document.getElementById("output").innerText = output;

//Binary to octal
    var display = document.getElementById("display").value;
  
    // Checking if the input is a valid binary number
    if (!/^[01]+$/.test(display)) {
      alert("Please enter a valid binary number (0s and 1s only).");
      return;
    }
  
    var decimalEquivalent = parseInt(display, 2); 
    var octoutput = decimalEquivalent.toString(8); 
  
    document.getElementById("octoutput").innerText = octoutput;
//Binary to Hexa
    var display = document.getElementById("display").value;

    // Checking if the input is a valid binary number
    if (!/^[01]+$/.test(display)) {
      alert("Please enter a valid binary number (0s and 1s only).");
      return;
    }
  
    var decimalEquivalent = parseInt(display, 2); // Convert binary to decimal
    var hexadecimalOutput = decimalEquivalent.toString(16).toUpperCase(); // Convert decimal to hexadecimal using toString
  
    document.getElementById("hexadecimalOutput").innerText = hexadecimalOutput;

    var display = document.getElementById("display").value;

    // Checking if the input is a valid decimal number
    if (isNaN(display) || display === "") {
      alert("Please enter a valid decimal number.");
      return;
    }
  
    var binaryOutput = (display >>> 0).toString(2); // Convert decimal to binary using toString
  
    document.getElementById("binaryOutput").innerText = binaryOutput;
    
  }
  