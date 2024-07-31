const shareAuthor = document.getElementById("share-author");
const shareSocial = document.getElementById("share-social")
const divSocialMedia = document.getElementById("social-media");
const divAuthor = document.getElementById("author-container")
const mediaQuery = window.matchMedia('(min-width: 800px)');

// function bodys(){
//     if (body.style.width >= "850px") {
//         console.log("x")
//         body.style.backgroundColor = "red";
//     }else{
//         console.log("falla");
//     }
// }
// bodys()


shareAuthor.addEventListener("click", showSocialMedia);

function showSocialMedia(){
    // divAuthor.classList.toggle("hide");
    divSocialMedia.classList.toggle("show");
}

function changeScreenSize(e){
    const body = document.body;
    // if(e.matches){
    //     body.style.backgroundColor = "red"
    //     console.log("funciona");
    // }
    
    
}
mediaQuery.addListener(changeScreenSize);


