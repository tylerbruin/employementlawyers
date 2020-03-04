document.addEventListener("DOMContentLoaded", function(){

    // How can we help section
    var helpItems = document.querySelectorAll(".what-section__item");

    for(var i=0;i<helpItems.length;i++){
        helpItems[i].addEventListener("click", function(){
            contactPopup();
        });
    }

    function contactPopup() {

    };

    // Who are we section
    var readmore = document.querySelector(".more-button");
    var profilesEl = document.querySelector(".who-profiles");
    
    readmore.addEventListener("click", function(){
       profilesEl.classList.contains("open") ?  profilesEl.classList.remove("open") : profilesEl.classList.add("open");
       profilesEl.classList.contains("open") ?  readmore.innerHTML = 'Read less <i class="gg-arrow-up-r"></i>' : readmore.innerHTML = 'Read more<i class="gg-arrow-down-r"></i>';

    });
});