const gameboard=(function(){
    let signal
    let grid=document.querySelectorAll('.tic')
    let clear=document.querySelector('#clear')
    let game=document.querySelector('#game')
    let player1=document.querySelector("#player1")
    let player2=document.querySelector("#player2")
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
            signal='O'
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
            checkForWinner()
        })
    })
    checkForWinner=()=>{
        let one=game.querySelector('#one')
        let two=game.querySelector('#two')
        let three=game.querySelector('#three')
        let four=game.querySelector('#four')
        let five=game.querySelector('#five')
        let six=game.querySelector('#six')
        let seven=game.querySelector('#seven')
        let eight=game.querySelector('#eight')
        let nine=game.querySelector('#nine')
        if(one.textContent==='X' && two.textContent==='X' && three.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(four.textContent==='X' && five.textContent==='X' && six.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(seven.textContent==='X' && eight.textContent==='X' && nine.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(one.textContent==='X' && four.textContent==='X' && seven.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(two.textContent==='X' && five.textContent==='X' && eight.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(three.textContent==='X' && six.textContent==='X' && nine.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(one.textContent==='X' && five.textContent==='X' && eight.textContent==='X'){
            alert("Player 1 Wins!")
        }
        else if(one.textContent==='O' && two.textContent==='O' && three.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if(four.textContent==='O' && five.textContent==='O' && six.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if(seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if(one.textContent==='O' && four.textContent==='O' && seven.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if(two.textContent==='O' && five.textContent==='O' && eight.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if(three.textContent==='O' && six.textContent==='O' && nine.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if(one.textContent==='O' && five.textContent==='O' && eight.textContent==='O'){
            alert("Player 2 Wins!")
        }
        else if((one.textContent==='O' || one.textContent==='X') && (two.textContent==='X' || two.textContent==='O')&&(three.textContent==='X' || three.textContent==='O') && (four.textContent==='X'|| four.textContent==='O') && (five.textContent==='X' || five.textContent==='O')&& (six.textContent==='X' || six.textContent==='O')&& (seven.textContent==='X' || seven.textContent==='O')&& (eight.textContent==='X' || eight.textContent==='O')&& (nine.textContent==='X' || nine.textContent==='O')){
        alert('Majority Draw!')
    }
}

})()