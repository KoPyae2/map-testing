// START CONTACT SECTION
const states = document.querySelectorAll("path");
const uls = document.querySelectorAll(".modals ul");
const modalel = document.querySelector(".modals");
const imagechange = document.querySelector(".img-cons");
const kachin = document.getElementById("kachin"),
      sagaing = document.getElementById("sagaing"),
      mandalay = document.getElementById("mandalay"),
      shan = document.getElementById("shan"),
      yangon = document.getElementById("yangon"),
      mon = document.getElementById("mon");


const closebtn = document.querySelector(".cancleicons");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

closebtn.addEventListener("click", ()=>{
    changedisplay(modalel);
    uls.forEach( ul => ul.classList.replace("d-block", "d-none"));
});

states.forEach( state => {
    // console.log(state);

    state.addEventListener("click", (e)=> {
        const place = state.getAttribute("name");

        if(place === "Kachin"){
            changedisplay(modalel);
            imagechange.children[0].src= "img/kachin.jpg";
            imagechange.children[1].innerText = "Kachin / MaNaw Festival";
            changedisplay(kachin);

        } else if(place === "Sagaing"){
            changedisplay(modalel);
            imagechange.children[0].src= "img/sagaing.jpg";
            imagechange.children[1].innerText = "Sagaing / Ayeyawaday River ";
            changedisplay(sagaing);
        } else if(place === "Shan"){
            changedisplay(modalel);
            imagechange.children[0].src= "img/shan.jpg";
            imagechange.children[1].innerText = "Shan / Innlay Lake";
            changedisplay(shan);
        } else if(place === "Mandalay"){
            changedisplay(modalel);
            imagechange.children[0].src= "img/mandalay.jpg";
            imagechange.children[1].innerText = "Mandalay / U Pain Bridge";
            changedisplay(mandalay);
        } else if(place === "Yangon"){
            changedisplay(modalel);
            imagechange.children[0].src= "img/yangon.jpg";
            imagechange.children[1].innerText = "Yangon / Shawe Dagon Pagoda";
            changedisplay(yangon);
        } else if(place === "Mon"){
            changedisplay(modalel);
            imagechange.children[0].src= "img/mon.jpg";
            imagechange.children[1].innerText = "Mandalay / Kyite Htee Yoe Pagoda";
            changedisplay(mon);
        }

    })
}
)

function changedisplay(x){
    if(x.classList.contains("d-none")){
        x.classList.remove("d-none");
        x.classList.add("d-block");
    } else {
        x.classList.remove("d-block");
        x.classList.add("d-none");
    }
}

function changealldisplay(){
    changedisplay(kachin);
    changedisplay(sagaing);
    changedisplay(mandalay);
    changedisplay(yangon);
    changedisplay(shan);
    changedisplay(mon);
}




// END CONTACT SECTION