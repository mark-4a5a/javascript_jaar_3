function multiplyModule(){
    function multiply(){
        var numberOne = form.querySelector('input[name="firstNumber"]').value;
        var numberTwo = form.querySelector('input[name="secondNumber"]').value;
        document.querySelector('#result').innerHTML = numberOne * numberTwo;
    }
    document.querySelector('#multiply').addEventListener('click', multiply);
}
multiplyModule();