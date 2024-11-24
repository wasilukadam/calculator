var result="0";
var operation = "";
var numberOne = "";
var numberTwo = "";



    function myFunction() {
      document.getElementById("myText").innerHTML = result;
    }

    function cancelCalculator() {
    operation = "";
    numberOne = "";
    numberTwo = "";
    result="0";

    }

    function createNumberFromKeysPressed(keyP1){
    if (operation === ""){
    numberOne = numberOne.concat(keyP1);
    result = numberOne;
    }else{
    numberTwo = numberTwo.concat(keyP1);
    result = numberTwo;
    }
    }