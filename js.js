const tabItems = document.querySelectorAll('.tab-item');
const containerMain = document.querySelectorAll('.container_main');

function selectItem(e){
    removeBorder();
    remove_Container_Main();
    this.classList.add('tab-border');
    
    console.log(this.id);
    const catch_key =  document.querySelector(`#${this.id}-container`);
    catch_key.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function remove_Container_Main(){
    containerMain.forEach((item) => { item.classList.remove('show')});
}

tabItems.forEach(item => item.addEventListener('click', selectItem));


/*animation */
ScrollReveal().reveal(".container_header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay:100,
});

ScrollReveal().reveal(".tabs", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay:300,
});

  ScrollReveal().reveal(".main", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    
  });
  
  ScrollReveal().reveal(".footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay:100,
  });
  
  console.log(document.images);
  //AOS.init();//de reload web