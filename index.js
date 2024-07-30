const shareAuthor = document.getElementById("share-author");
const shareSocial = document.getElementById("share-social")
const divSocialMedia = document.getElementById("social-media");
const divAuthor = document.getElementById("author-container")

shareAuthor.addEventListener("click", showSocialMedia);

function showSocialMedia(){
    divAuthor.classList.toggle("hide");
    divSocialMedia.classList.toggle("show")
}

