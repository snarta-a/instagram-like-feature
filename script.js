const container = document.querySelector(".container");

container.addEventListener("click", function(event){

    if(event.target.classList.contains("add-btn")){

        if(event.target.innerText === "Add Friend"){

            event.target.innerText = "Friends";
            event.target.style.backgroundColor = "green";

        }else{

            event.target.innerText = "Add Friend";
            event.target.style.backgroundColor = "#3498db";

        }
    }

});