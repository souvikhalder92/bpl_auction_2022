document.getElementById('btn-cal').addEventListener('click',function(count){
    const value = getInputFieldValueById('num');
    const total = value*playerCount();
    if(isNaN(value))
    {
        alert('Please enter a number');
        return;
    }
    const expense = document.getElementById('total');
    expense.innerText = total;
    
    
    

})
document.getElementById('btn-cal-total').addEventListener('click',function(count){
    
    const valueOne = getInputFieldValueById('num1');
    const valueTwo =getInputFieldValueById('num2');
    const value = getInputFieldValueById('num');
    const total = value*playerCount();
    if(isNaN(valueOne) || isNaN(valueTwo) )
    {
        alert('Please enter a number');
        return;
    }
    
    const totalExpense =  total + valueOne + valueTwo;
    console.log(totalExpense);
    

   const totalCalculate = document.getElementById('total-expense');
   totalCalculate.innerText = totalExpense;




})