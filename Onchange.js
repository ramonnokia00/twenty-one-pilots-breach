

function Body() {
    const body = document.getElementById("body");
    if (body.classList.contains("bg-black")) {
        body.classList.remove("bg-black");
        body.classList.add("bg-white");
    }
}
function Sobre(){
    const body = document.getElementById("body");
    if (body.classList.contains("bg-white")){
      body.classList.remove("bg-white");
      body.classList.add("bg-black");
    }
}