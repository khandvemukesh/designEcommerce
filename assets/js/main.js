 
 //Toggle Menus
 const menusItem=document.querySelector('#meunsItems');
  
  menusItem.style.maxHeight="0px";
  const meunToggle=()=>{
    if(menusItem.style.maxHeight==="0px"){
      menusItem.style.maxHeight="200px";
    }else{
      menusItem.style.maxHeight="0px";
    }
  }
//example
//html

// <button id="menuToggle" onclick="toggleMenu()">Toggle Menu</button>

{/* <ul id="menuItems">
  <li>Menu Item 1</li>
  <li>Menu Item 2</li>
  <li>Menu Item 3</li>
</ul> */}

//css
// .hidden {
//     display: none;
//     transition: opacity 0.2s ease-in-out;
// }

//js
// const menuItems = document.querySelectorAll('#menuItems');

// function toggleMenu() {
//   menuItems.forEach((item) => {
//     item.classList.toggle('hidden');
//   });
// }

// document.getElementById('menuToggle').addEventListener('click', toggleMenu);

// Sticky Menus
   const header = document.querySelector('#head');
    const sticky = header.offsetTop;
     console.log(sticky);
    window.addEventListener('scroll', () => {
      if (window.scrollY > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }});


// Single Product
//dish-img dish-small-img

// const dishImg=document.querySelector('#dish-img');
// const dishSmallImg=document.querySelectorAll('.dish-small-img');

// dishSmallImg.forEach((dImg)=>{
//   dImg.addEventListener('click',()=>{
//     dishImg.src=dImg.src;
//   })
// })

//optimize code
const dishImg = document.querySelector('#dish-img');
const dishSmallImg = document.querySelector('.dish-small-img');

const setDishImageSrc=(src)=> dishImg.src = src;

dishSmallImg.addEventListener('click', () =>setDishImageSrc(dishSmallImg.src));


// Js for Toggle form

// const loginForm=document.querySelector("#loginFrom");
// const regForm=document.querySelector("#regFrom");
// const indicate=document.querySelector("#indicator");

// const login= () =>{
//     loginForm.style.transform = "translateX(0px)";
//     regForm.style.transform = "translateX(-300px)";
//     indicate.style.transform = "translateX(0px)";
// }

// const register=()=>{
//      regForm.style.transform = "translateX(0px)";
//      loginForm.style.transform = "translateX(300px)";
//      indicate.style.transform = "translateX(100px)";
// }