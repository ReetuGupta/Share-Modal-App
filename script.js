let shareModal = document.querySelector(".share-modal");
let followModal = document.querySelector(".follow-modal");
let overlay = document.querySelector(".overlay");
let copyBtn = document.querySelector(".copy-btn");

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

async function copyURL(){
    try{
        // window.location.href => used to fetch live url
        // navigator.clipboard.writeText => copy text to clipboard
        await navigator.clipboard.writeText(window.location.href);  
        console.log("copied");
    }
    catch(e) {
        copyBtn.innerText = "Failed";
    }
    copyBtn.classList.add("active");

    setTimeout( () => {
        copyBtn.classList.remove("active")
    },2000);
}


