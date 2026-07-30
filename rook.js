let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#score1")
const comrscorepara=document.querySelector("#score2")
const boducoller=document.querySelector(".body1")



const getcomchoice = ()=> {
    const options=["rock","paper","scissore"];
   const ranindx= Math.floor(Math.random()*3);
   return options[ranindx];
};
//------------------------Drowshow
const drowGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor ="black";
      boducoller.style.backgroundColor="white";


};
//----------------------------winner show
const showinner = (userwin, usercho, computerchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = 'you win! you '+  usercho  + '  beats  ' + computerchoice;
        msg.style.backgroundColor ="black";
        msg.style.color ="green";
        boducoller.style.backgroundColor="green";

    }
    else{
        compscore++;
        comrscorepara.innerText=compscore;
        msg.innerText = 'computer wine! you '+  usercho  + '  beats  ' + computerchoice;
        msg.style.backgroundColor ="black";
        msg.style.color="red";
        boducoller.style.backgroundColor="red";
    }
};



// playgame..............................
const playGame = (usercho) =>{
    console.log("user choice = ", usercho);
    // compurtechoice
    const computerchoice = getcomchoice();
    console.log("computer choice = ", computerchoice);

    if(usercho === computerchoice){
        drowGame();
    }
    else{
        let userwin = true;
        if(usercho === "rock"){
            // scisser ,paper
           userwin = computerchoice ==="paper" ? false : true;

        }
        else if(usercho === "paper"){
            // rock,scisser
            userwin = computerchoice === "scisser" ? false : true;
        }
        else{
            // rock ,paper
            userwin = computerchoice === "rock" ? false : true;

        }
        showinner(userwin, usercho, computerchoice);
    }




};

// ___________________________________________________-

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const usercho = choice.getAttribute("id");
        playGame(usercho);


    });

});


