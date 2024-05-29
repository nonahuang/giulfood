const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const toggleSearch = () => {
  const search = document.querySelector('.search');
  const searchButton = document.querySelector('.search_button');
  const searchInput = document.querySelector('.search_input');

  searchButton.addEventListener('click', () => {
      search.classList.toggle('show-search');
  });
};

toggleSearch();

function searchbox() {
  let input = document.getElementById('myinput').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('search-list-item');

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none"

      }
      else {
          x[i].style.display = ""
      }
  }
}

  // let list_item = document.createElement ("l2");
  // var warn = 'Please enter name & comment!';

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight -  revealpoint){
      reveals[i].classList.add('active');
    }
  }
}
const USERID = {
  name: null,
  identity: null,
  image: null,
  message: null,
  date: null
}

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
const notify = document.querySelector(".notifyinput");

  userComment.addEventListener("input", e => {
      if(!userComment.value) {
          publishBtn.setAttribute("disabled", "disabled");
          publishBtn.classList.remove("abled")
      }else {
          publishBtn.removeAttribute("disabled");
          publishBtn.classList.add("abled")
      }
  })

  function addPost() {
      if(!userComment.value) return;
      USERID.name = userName.value;
      if(USERID.name === "Anonymous") {
          USERID.identity = false;
          USERID.image = "image/anon.png"
      }else {
          USERID.identity = true;
          USERID.image = "image/user.png"
      }

      USERID.message = userComment.value;
      USERID.date = new Date().toLocaleString();
      let published =
      `<div class="parents">
          <img src="${USERID.image}">
          <div>
              <h1>${USERID.name}</h1>
              <p>${USERID.message}</p>
              <div class="engagements"><img src="image/like-regular-24.png" id="like"><img src="image/share-regular-24.png" alt=""></div>
              <span class="date">${USERID.date}</span>
          </div>
      </div>`

      comments.innerHTML += published;
      userComment.value = "";
      publishBtn.classList.remove("abled")

      let commentsNum = document.querySelectorAll(".parents").length;
      document.getElementById("comment").textContent = commentsNum;

  }

  publishBtn.addEventListener("click", addPost);


//POPUP//
function togglePopup() {
  var popup = document.getElementById("popup-1");
  popup.classList.toggle("active");
}
function togglePopup2() {
  var popup = document.getElementById("popup-2");
  popup.classList.toggle("active");
}
function togglePopup3() {
  var popup = document.getElementById("popup-3");
  popup.classList.toggle("active");
}
function togglePopup4() {
  var popup = document.getElementById("popup-4");
  popup.classList.toggle("active");}

  function togglePopup5() {
  var popup = document.getElementById("popup-5");
  popup.classList.toggle("active");}

  function togglePopup6() {
  var popup = document.getElementById("popup-6");
  popup.classList.toggle("active");}

  function togglePopup7() {
  var popup = document.getElementById("popup-7");
  popup.classList.toggle("active");}

  function togglePopup8() {
  var popup = document.getElementById("popup-8");
  popup.classList.toggle("active");}

  function togglePopup9() {
  var popup = document.getElementById("popup-9");
  popup.classList.toggle("active");}
//