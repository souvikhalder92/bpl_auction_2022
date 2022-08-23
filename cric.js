const playerArray = [];

function display(playerAdd)
{
    if(playerAdd.length > 5)
    {
        alert("Select maximum 5 players.Not more than 5 players!!!");
        return;
    }
    else{
    const tableBody = document.getElementById('players');
    tableBody.innerHTML = "";
    for(let i = 0;i < playerAdd.length; i++)
    {  
        const name = playerArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
           <th>${i+1}.</th>
           <td>${name}</td>

        `;
        
       
        tableBody.appendChild(tr);
        
    }
   
    
}


}
function addToPlayer(player){
  
    const playerName = player.parentNode.parentNode.children[1].innerText;
    const playerObj = {
    playerName : playerName
   }
   playerArray.push(playerObj);
   player.setAttribute('disabled', true);
  display(playerArray);
 
   
}

    
const btn = document.getElementById('btn');
btn.addEventListener('click',function()
{ 
    const count = playerArray.length;
    if(count <= 5){
    btn.style.backgroundColor = 'gray';
}

   

})
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function()
{ 
    const count = playerArray.length;
    if(count <= 5){
    btn1.style.backgroundColor = 'gray';
    }
  

})
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function()
{ 
    const count = playerArray.length;
    if(count <= 5){
    btn2.style.backgroundColor = 'gray';
    }

})
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click',function()
{ 
    const count = playerArray.length;
    if(count <= 5){
    btn3.style.backgroundColor = 'gray';
    }

})
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click',function()
{ 
    const count = playerArray.length;
    if(count <= 5){
    btn4.style.backgroundColor = 'gray';
    }

})
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click',function()
{ 
    const count = playerArray.length;
    if(count <= 5){
    btn5.style.backgroundColor = 'gray';
    }

})



function playerCount()
{
        const count = playerArray.length;
        if(count > 5){
        return count-1;
        }
        else
        {
            return count;
        }

   
   
}
