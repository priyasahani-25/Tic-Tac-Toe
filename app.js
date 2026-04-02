let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset_btn");
let newGameBtn=document.querySelector("#new_btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame = () => {
     turnO= true;
     enableBoxes();
     msgContainer.classList.add("hide");
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    } 
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

boxes.forEach((box) => { 
    box.addEventListener("click", () => {
       if(turnO){
        box.innerText = "O";
        turnO=false;
       } else {
        box.innerText = "X";
        turnO=true;
       }
       box.disabled = true;

       CheckWinner();
    });
});

const ShowWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const CheckWinner = () => {
    for(let pattern of winPatterns){ 
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                ShowWinner(pos1val);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
