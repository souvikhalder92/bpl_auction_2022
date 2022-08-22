document.getElementById('btn-cal').addEventListener('click',function(){
    const value = getInputFieldValueById('num');

    const total = value*5 ;
    console.log(total);

    const expense = document.getElementById('total');
    expense.innerText = total;

})
document.getElementById('btn-cal-total').addEventListener('click',function(){
    const valueFieldOne = document.getElementById('num1');
    const valueOneString = valueFieldOne.value;
    const valueOne = parseFloat(valueOneString);

    const valueFieldTwo = document.getElementById('num2');
    const valueTwoString = valueFieldTwo.value;
    const valueTwo = parseFloat(valueTwoString);

    const value = getInputFieldValueById('num');

    const total = value*5 ;
   
    const totalExpense =  total + valueOne + valueTwo;
    console.log(totalExpense);

   const totalcalculate = document.getElementById('total-expense');
   totalcalculate.innerText = totalExpense;

})