const gameboard=(function(){
    let signal
    player1=document.querySelector("#player1")
    player2=document.querySelector("#player2")
    player1.addEventListener('click',()=>{
        player1.setAttribute('style','display:none;')
        player2.setAttribute('style','display:none;')
        document.querySelector('#select').textContent=''
        signal='X'
    })
    player2.addEventListener('click',()=>{
        player1.setAttribute('style','display:none;')
        player2.setAttribute('style','display:none;')
        document.querySelector('#select').textContent=''

        signal='O'
    })
    changeTurn=()=>{
        if(signal==='X'){
            signal="O"
        }
        else{
            signal="X"
        }
    }
    grid=document.querySelectorAll('.tic')
    game=document.querySelector('#game')
    clear=document.querySelector('#clear')
    clear.addEventListener('click',()=>{
        grid.forEach(element => {
            element.textContent=''
        });
    })
    grid.forEach(element=>{
        element.addEventListener('click',()=>{
            element.textContent=signal
            changeTurn()
        })
    })
    // })
    // one=game.querySelector('#one')
    // one.addEventListener('click',()=>{
    //     one.textContent=signal
    //     changeTurn()
    // })
    // two=game.querySelector('#two')
    // two.addEventListener('click',()=>{
    //     two.textContent=signal
    //     changeTurn()
    // })
    // three=game.querySelector('#three')
    // three.addEventListener('click',()=>{
    //     three.textContent=signal
    //     changeTurn()
    // })
    // four=game.querySelector('#four')
    // four.addEventListener('click',()=>{
    //     four.textContent=signal
    //     changeTurn()
    // })
    // five=game.querySelector('#five')
    // five.addEventListener('click',()=>{
    //     five.textContent=signal
    //     changeTurn()
    // })
    // six=game.querySelector('#six')
    // six.addEventListener('click',()=>{
    //     six.textContent=signal
    //     changeTurn()
    // })
    // seven=game.querySelector('#seven')
    // seven.addEventListener('click',()=>{
    //     seven.textContent=signal
    //     changeTurn()
    // })
    // eight=game.querySelector('#eight')
    // eight.addEventListener('click',()=>{
    //     eight.textContent=signal
    //     changeTurn()
    // })
    // nine=game.querySelector('#nine')
    // nine.addEventListener('click',()=>{
    //     nine.textContent=signal
    //     changeTurn()
    // })
    
})()