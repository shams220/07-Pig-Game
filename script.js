`use strict`

let rollbtn = document.querySelector('.btn--roll');
let holdbtn  = document.querySelector('.btn--hold');
let newbtn   = document.querySelector('.btn--new');
let player1 = document.querySelector('.player--1')
let player2 = document.querySelector('.player--2')
let score0  = document.querySelector('#score--0');
let score1  = document.querySelector('#score--1');

let playing  = true;
score0.textContent = 0;
score1.textContent = 0;
const scores = [0,0];

let activePlayer = 0;
let current=  0;

const switchPlayer = function(){
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }

}

rollbtn.addEventListener('click',function(){
    if(playing){ 

    
    const random = Math.trunc(Math.random()*6)+1;
    document.querySelector('.dice').classList.remove("dice-hidden")
    document.querySelector('.dice').src = `dice-${random}.png`;

     if(random !== 1){
        current = current + random;
         document.querySelector(`#current--${activePlayer}`).textContent = current;
   
    }
    else{
        
        document.querySelector(`#current--${activePlayer}`).textContent = current = 0;
        current = 0;
        switchPlayer()
    }
}
})


holdbtn.addEventListener('click',function(){
   
scores[activePlayer] += current;
document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
document.querySelector('.current-score').textContent = 0;
   if(scores[activePlayer] >= 100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')   
    document.querySelector('.dice').classList.add("dice-hidden")
    playing  = false;
}else{  
switchPlayer();
}   
})
newbtn.addEventListener('click',function(){
    let score0  = document.querySelector('#score--0').textContent = 0;
    let score1  = document.querySelector('#score--1').textContent = 0;
playing = true;

document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    current = 0;
    scores[0] = 0;
    scores[1] = 0
})




// 'use strict';

// let rollbtn  = document.querySelector('.btn--roll');
// let holdbtn  = document.querySelector('.btn--hold');
// let newbtn   = document.querySelector('.btn--new');
// let dice     = document.querySelector('.dice');
// let current0 = document.querySelector('#current--0').textContent;
// let current1 = document.querySelector('#current--1').textContent;
// let player0  = document.querySelector('.player--0');
// let player1  = document.querySelector('.player--1');
// let score0   = document.querySelector('#score--0').textContent;
// let score1   = document.querySelector('#score--1');


// let scores       = 0
// const score      = [0,0]
// let activePlayer = 0;
// let current      = 0;





// rollbtn.addEventListener('click',function(){
//     const random = Math.trunc(Math.random()*6)+1;
//     dice.classList.remove("dice-hidden");
//     dice.src     = `dice-${random}.png`;

//     if(random   !== 1){ 
//          current = current+ random;
//     document.querySelector(`#current--${activePlayer}`).textContent= current
   
//     }
//     else{
//         current = 0
//         document.querySelector(`#current--${activePlayer}`).textContent= current
   
        
//         if(activePlayer  === 0){
//             activePlayer = 1;    
//         } 
//         else{
//             activePlayer = 0;
//         }
//               player0.classList.toggle('player--active')  
//               player1.classList.toggle('player--active')  
//     }
   

// })
// holdbtn.addEventListener('click',function(){
//     document.querySelector(`#score--${activePlayer}`).textContent = scores
    
//     scores =+ current;

  
//    current = 0
//        if( scores >= 100){
//         (`player ${activePlayer} wins`);

//        }else{
        
//         if(activePlayer  === 0){
//             activePlayer = 1;    
            
//         } 
//         else{
//             activePlayer = 0;
            
//         }
        
    
           
//        }
       
//               player0.classList.toggle('player--active')  
//               player1.classList.toggle('player--active')  
    
// })




/////// random number \\\\\\\\

// const random  = Math.trunc(Math.random()*6)+1;

// let current1   = 0;
// let current2  = 0;
// let score2  = 0;
// let score1  = 0;

// document.querySelector('.btn--roll').addEventListener('click',function(){
//     const random  = Math.trunc(Math.random()*6)+1;
    
    // document.querySelector('#current--0').textContent  = current1;
    // current1  = current1+random;
    // document.querySelector('.dice').src =`dice-${random}.png`;
    // document.querySelector('.btn--hold').addEventListener('click',function(){
    //     score1  = score1+current1;
    // })
    // if(random  = = 1){
       
    //     current1  = 0
        
    // }
    // document.querySelector('#score--0').textContent  = score1;
// })
// 
// document.querySelector('.player--1').




    
// document.querySelector('btn--roll').addEventListener('click',function(){
        
//     const random  = Math.trunc(Math.random() * 6) + 1;

//         document.querySelector('.dice').src  = `dice-${random}.png`;

        
//     });

  
        
     

