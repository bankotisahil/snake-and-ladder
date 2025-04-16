let goat = 1
let rollingSound = new Audio('musicdice.mp3')
let winningSound = new Audio('game-over-classic-206486.mp3')
let snakebite = new Audio('snakebite.mp3')
let ladderup = new Audio('level-up-5-326133.mp3')



let p1sum = 0
let p2sum = 0

const diceFaces = [
    { number: 1, face: '⚀' },
    { number: 2, face: '⚁' },
    { number: 3, face: '⚂' },
    { number: 4, face: '⚃' },
    { number: 5, face: '⚄' },
    { number: 6, face: '⚅' }
  ];

  let dicenumber = null;

  function rollDice() {
    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    const roll = diceFaces[randomIndex];

    document.getElementById("diced").textContent = roll.face;
    dicenumber = roll.number;

    // You can now use dicenumber elsewhere in your code
    console.log("Dice number rolled:", dicenumber);
  }


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 4) {
            ladderup.play()
            p1sum = 37
            
        }
        if (p1sum == 12) {
            ladderup.play()
            p1sum = 33
        }
        if (p1sum == 27) {
            snakebite.play()
            p1sum = 8
        }
        if (p1sum == 36) {
            ladderup.play()
            p1sum = 75
        }
        if (p1sum == 38) {
            ladderup.play()
            p1sum = 62
        }
        if (p1sum == 41) {
            snakebite.play()
            p1sum = 18
        }
        if (p1sum == 52) {
            ladderup.play()
            p1sum = 88
        }
        if (p1sum == 68) {
            snakebite.play()
            p1sum = 34
        }
        if (p1sum == 85) {
            snakebite.play()
            p1sum = 57
        }
        if (p1sum == 99) {
            snakebite.play()
            p1sum = 61
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {
        p2sum = p2sum + num
    
        if (p2sum > 100) {
            p2sum = p2sum - num
        }
    
        if (p2sum == 4) {
            ladderup.play()
            p2sum = 37
        }
        if (p2sum == 12) {
            ladderup.play()
            p2sum = 33
        }
        if (p2sum == 27) {
            snakebite.play()
            p2sum = 8
        }
        if (p2sum == 36) {
            ladderup.play()
            p2sum = 75
        }
        if (p2sum == 38) {
            ladderup.play()
            p2sum = 62
        }
        if (p2sum == 41) {
            snakebite.play()
            p2sum = 18
        }
        if (p2sum == 52) {
            ladderup.play()
            p2sum = 88
        }
        if (p2sum == 68) {
            snakebite.play()
            p2sum = 34
        }
        if (p2sum == 85) {
            snakebite.play()
            p2sum = 57
        }
        if (p2sum == 99) {
            snakebite.play()
            p2sum = 61
        }
    
        sum = p2sum
    }
    

    document.getElementById(`${player}`).style.transition = `linear all .7s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        
        if (player == 'p1') {
            p1sum = 100
            winningSound.play()
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            p2sum = 100
            winningSound.play()
            alert("Green Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}

document.getElementById("diceBtn").addEventListener("click", function () {
    const diceBtn = document.getElementById("diceBtn");

    // Disable and style the button
    diceBtn.disabled = true;
    diceBtn.classList.add("disabled-style");

    rollingSound.play();
    rollDice(); // this sets `dicenumber` and updates the emoji

    let num = dicenumber;

    if (goat % 2 != 0) {
        document.getElementById('goat').innerText = "Green's Turn : ";
        play('p1', 'p1sum', 0, num);
    } else {
        document.getElementById('goat').innerText = "Red's Turn : ";
        play('p2', 'p2sum', 55, num);
    }

    goat++;

    // Enable button after 1 second
    setTimeout(() => {
        diceBtn.disabled = false;
        diceBtn.classList.remove("disabled-style");
    }, 1000);
});




