let shareModal = document.querySelector(".share-modal");
let followModal = document.querySelector(".follow-modal");
let overlay = document.querySelector(".overlay");

function openSharemodal(){
    shareModal.classList.add("shareactive");
    followModal.classList.remove("followactive");
    overlay.classList.add("overlayactive");
}

function closeModal(){
    overlay.classList.remove("overlayactive");
    followModal.classList.remove("followactive");
    shareModal.classList.remove("shareactive");
}

function openFollowmodal(){
    followModal.classList.add("followactive");
    shareModal.classList.remove("shareactive");
    overlay.classList.add("overlayactive");
}

function copyURL(){
    navigator.clipboard.writeText(window.location.href)
    .then(() =>{
        console.log("copied");
    })
    .catch(err => {
        console.log("failed", err);
    });
}


