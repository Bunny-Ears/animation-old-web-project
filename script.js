const ll = document.querySelector("#ll");
const lr = document.querySelector("lr");
const holdL = document.querySelector("#holdL");
var lIndex = 0;
ll.onclick = function(){
  if (lIndex === 0) {
    const frame = document.createElement('iframe');
    frame.src = "https://www.youtube.com/embed/vffu6FG4YP4";
    frame.allowfullscreen = true;
    frame.classList.add("holder");
    holdL.parentNode.replaceChild(frame, holdL);
    
  }
};

