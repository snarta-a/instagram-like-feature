const container = document.querySelector(".container");

container.addEventListener("click", function(e){

    if(e.target.classList.contains("add-btn")){

        const card = e.target.closest(".card");

        const status =
        card.querySelector(".status");

        if(e.target.innerText === "Add Friend"){

            e.target.innerText = "Remove Friend";

            e.target.style.backgroundColor =
            "green";

            status.innerText = "Friend";

            status.classList.add("friend");

        }else{

            e.target.innerText = "Add Friend";

            e.target.style.backgroundColor =
            "#3498db";

            status.innerText = "Stranger";

            status.classList.remove("friend");
        }
    }

});