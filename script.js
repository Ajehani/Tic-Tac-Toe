const gameboard=(function(){
    let signal
    grid=document.querySelectorAll('.tic')
    game=document.querySelector('#game')
    clear=document.querySelector('#clear')
    game=document.querySelector('#game')
    player1=document.querySelector("#player1")
    player2=document.querySelector("#player2")
    player1.addEventListener('click',()=>{
        player1.setAttribute('style','display:none;')
        player2.setAttribute('style','display:none;')
        document.querySelector('#select').textContent="Player 1's Turn!"
        game.setAttribute('style','display:grid;')
        clear.setAttribute('style',"display:block;")
        signal='X'
    })
    player2.addEventListener('click',()=>{
        player1.setAttribute('style','display:none;')
        player2.setAttribute('style','display:none;')
        document.querySelector('#select').textContent="Player 2's Turn!"
        game.setAttribute('style','display:grid;')
        clear.setAttribute('style',"display:block;")
        signal='O'
    })
    changeTurn=()=>{
        if(signal==='X'){
            signal="O"
            document.querySelector('#select').textContent="Player 2's Turn!"
        }
        else{
            signal="X"
            document.querySelector('#select').textContent="Player 1's Turn!"
        }
    }
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
    checkForWinner=()=>{
        one=game.querySelector('#one')
        two=game.querySelector('#two')
        three=game.querySelector('#three')
        four=game.querySelector('#four')
        five=game.querySelector('#five')
        six=game.querySelector('#six')
        seven=game.querySelector('#seven')
        eight=game.querySelector('#eight')
        nine=game.querySelector('#nine')
        if(one.textContent==='X' && two.textContent==='X' && three.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        else if(four.textContent==='X' && five.textContent==='X' && six.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        else if(seven.textContent==='X' && eight.textContent==='X' && nine.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        else if(one.textContent==='X' && four.textContent==='X' && seven.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        else if(two.textContent==='X' && five.textContent==='X' && eight.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        else if(three.textContent==='X' && six.textContent==='X' && nine.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        else if(one.textContent==='X' && five.textContent==='X' && eight.textContent==="X"){
            document.querySelector('#select').textContent="Player 1 Wins!"
        }
        if(one.textContent==='O' && two.textContent==='O' && three.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else if(four.textContent==='O' && five.textContent==='O' && six.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else if(seven.textContent==='O' && eight.textContent==='O' && nine.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else if(one.textContent==='O' && four.textContent==='O' && seven.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else if(two.textContent==='O' && five.textContent==='O' && eight.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else if(three.textContent==='O' && six.textContent==='O' && nine.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else if(one.textContent==='O' && five.textContent==='O' && eight.textContent==="O"){
            document.querySelector('#select').textContent="Player 2 Wins!"
        }
        else{
            document.querySelector('#select').textContent="Majority Draw!"
        }
        checkForWinner()

    }

})()