let own=document.querySelector("#owner");
let cont=document.querySelector("#contractor");
let fam=document.querySelector("#member");

own.addEventListener("click", () => {
    document.querySelector("#number").style.visibility="hidden";
});

cont.addEventListener("click", () => {
    document.querySelector("#number").style.visibility="visible";
});

fam.addEventListener("click", () => {
    document.querySelector("#number").style.visibility="visible";
})