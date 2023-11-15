let start=function(){
    let start_button=document.getElementById("start_button")
    let sup_card=document.getElementById("card_background_sup");
    let background=document.getElementById("background");
    background.style.display="block"
    sup_card.style.display="flex";
    start_button.style.display="none";
}

let main_card_open=function(){
    let main_card=document.getElementById("main_card_background_sup")
    if (main_card.style.display=="none"){
       main_card.style.display="flex"

    }else{
        main_card.style.display="none"
    }
}

let close_all=function(){
    let sup_card=document.getElementById("card_background_sup");
    let main_card=document.getElementById("main_card_background_sup");
    let start_button=document.getElementById("start_button")
    let background=document.getElementById("background");
    background.style.display="none"
    sup_card.style.display="none";
    main_card.style.display="none";
    start_button.style.display="flex";
}

