let retry = document.getElementById("retry");
let clicked_btn = document.querySelectorAll(".box");
let xchance = true;
let pattern = [[0, 1, 2],[3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6]];
let winner = document.getElementById("win_content");
let count = 0;


clicked_btn.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(xchance){
            box.innerHTML = "x";
            xchance = false;
        } else{
            box.innerHTML = "o";
            xchance = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function checkWinner(){
    count++;
    if (count === 9) {
        winner.innerText = "Oops!! It's a tie";
        winner.style.cssText = "color:#000; padding-top: 20px;"
    }
    for(let i of pattern){
        let f_pos = clicked_btn[i[0]].innerText;
        let s_pos = clicked_btn[i[1]].innerText;
        let t_pos = clicked_btn[i[2]].innerText;
        if (f_pos != "" && s_pos != "" && t_pos != "") {
            if (f_pos === s_pos && s_pos === t_pos) {
                retry.innerText = "Play Again?"
                winner.innerText = "Yuhoo!!The winner is "+f_pos;
                winner.style.cssText = "color:#000; padding-top: 20px;"
                for(let click of clicked_btn){
                    click.disabled = true;
                }
            }
        }
    }
}

retry.addEventListener("click", () =>{
    winner.innerText = "";
    for(let i of clicked_btn){
        i.innerText = "";
        i.disabled = false
        xchance = true;
        retry.innerText = "Retry!"
        count = 0
    }
})