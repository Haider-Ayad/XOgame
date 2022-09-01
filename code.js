let title=document.getElementById("titleGame");
let turn='x';
let squer=[];

// End game
function end(num1,num2,num3) {
    title.innerHTML=`${squer[num1]} winner`
    document.getElementById(`item`+num1).style.background='black';
    document.getElementById(`item`+num2).style.background='black';
    document.getElementById(`item`+num3).style.background='black';
    setInterval(()=>{title.innerHTML+='.'},1000)
    setTimeout(()=>{location.reload()},4000)
}

// Winner Game 
function winner() {
    for (let i = 1; i < 10; i++) {
        squer[i]=document.getElementById('item'+i).innerHTML;
     }

    // comprae vertical
    if(squer[1]==squer[2]&&squer[2]==squer[3]&&squer[1] !=''){
        end(1,2,3);
    }
    if(squer[4]==squer[5]&&squer[5]==squer[6]&&squer[4] !=''){
        end(4,5,6);
    }
    if(squer[7]==squer[8]&&squer[8]==squer[9]&&squer[7] !=''){
        end(7,8,7);
    }
    
    // comprae vertical
    if(squer[1]==squer[4]&&squer[4]==squer[7]&&squer[1] !=''){
        end(1,4,7);
    }
    if(squer[2]==squer[5]&&squer[5]==squer[8]&&squer[2] !=''){
        end(2,5,8);
    }
    if(squer[3]==squer[6]&&squer[6]==squer[9]&&squer[3] !=''){
        end(3,6,9);
    }
    
    
    // compare Crose 
    if(squer[1]==squer[5]&&squer[5]==squer[9]&&squer[1] !=''){
        end(1,5,9);
    }
    if(squer[3]==squer[5]&&squer[5]==squer[7]&&squer[3] !=''){
        end(3,5,7);
    }
    



    

}


// Paly Game 
function game(id) {
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML==''){
        element.innerHTML='X';
        turn='o';
        title.innerHTML=turn;
    }else if(turn ==='o' && element.innerHTML=='' ){
        element.innerHTML='O';
        turn='x';
        title.innerHTML=turn;
    }
    winner();
}