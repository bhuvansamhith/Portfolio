// function right_arrow() {
//     document.querySelector(".container41").style.transform ="translateX(-100%)" ;
//     // console.log(3);
    
// }

// function left_arrow() {
//     document.querySelector(".container41").style.transform ="translateX(0%)" ;
//     // console.log(3);
    
// }

const container = document.querySelector('.container411');
const leftArrow = document.getElementById('uu1');
const rightArrow = document.getElementById('uu2');

let index = 0;
let noslide;

function slide() {
  container.style.transform = `translateX(-${index * 100}%)`;
}

rightArrow.onclick = () => {
  index = (index + 1) % container.children.length;
  slide();
};

leftArrow.onclick = () => {
  index = (index - 1 + container.children.length) % container.children.length;
  slide();
};


function fun1() {
    document.querySelector('.nav2').style.display= "flex";
}
function fun2() {
    document.querySelector('.nav2').style.display= "none";
}



container.addEventListener('mouseover',stopAutoSlide);
container.addEventListener('mouseout',startAutoSlide);

function stopAutoSlide() {
    clearInterval(noslide);
    noslide=null;
}

function startAutoSlide() {
    noslide=setInterval(() => {
        index = (index + 1) % container.children.length;
        slide();
      }, 5000);
}
startAutoSlide();


function sub() {
    const fullName =document.getElementById("fullName").value.trim();
    const email =document.getElementById("email").value.trim();
    const phone =document.getElementById("phone").value.trim();
    const subject =document.getElementById("subject").value.trim();
    const message =document.getElementById("message").value.trim();
    const successMsg =document.getElementById("vv1");
  
    if (fullName && email && phone && message) {
      console.log("Full Name:",fullName);
      console.log("Email:",email);
      console.log("Phone:",phone);
      console.log("Subject:",subject);
      console.log("Message:",message);
  
      successMsg.style.display = "block";
    } else {
      alert("Please fill in all required fields.");
      successMsg.style.display = "none";
    }
  }