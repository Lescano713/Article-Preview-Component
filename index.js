const articleContainer = document.getElementById("article")

const articles = [{
    imageAuthor: './images/avatar-michelle.jpg',
    author: 'Michelle Appleton',
    date: '28 Jun 2020',
    imageArticle: './images/drawers.jpg',
    title: 'Shift the Overall Look and Feel by Adding These Wonderful Touches to Furniture in Your Home',
    introduction: 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
    facebook: '#',
    twitter: '#',
    pinterest: '#',
}]

uploadingArticles()


function uploadingArticles(){
    articles.forEach(article =>{
        articleContainer.innerHTML = "";
        articleContainer.innerHTML = `
            <div class="img-container">
                <img class="article-img" src="${article.imageArticle}" alt="article-img">
            </div>
            `
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('info-container');
            infoContainer.innerHTML = `
                <div class="preview-info">
                    <p class="bolder">${article.title}</b></p>
                    <p>${article.introduction}</p>
                </div>
            `;
            const authorDiv = document.createElement('div');
            authorDiv.classList.add('author-container');
            authorDiv.innerHTML += `
                    <img class="img-author" src="${article.imageAuthor}" alt="img-author">
                    <div class="author">
                    <h1>${article.author}</h1>
                    <p>${article.date}</p>
                    </div>`
            const shareI = document.createElement('i');
            shareI.classList.add("fa-solid");
            shareI.classList.add("fa-share")
            shareI.id = "share-author";
            authorDiv.appendChild(shareI);
            authorDiv.id = "author-container";
            const socialMediaDiv = document.createElement('div');
            socialMediaDiv.classList.add('social-media');
            socialMediaDiv.id = "social-div"
            socialMediaDiv.innerHTML = ` 
                    <h2>SHARE</h2>
                    <a href="${article.facebook}" ><img src="./images/icon-facebook.svg" alt="image-author"></a>
                    <a href="${article.twitter}" ><img src="./images/icon-twitter.svg" alt="image-author"></a>
                    <a href="${article.pinterest}" ><img src="./images/icon-pinterest.svg" alt="image-author"></a>
            `;

            infoContainer.appendChild(authorDiv);
            infoContainer.appendChild(socialMediaDiv);
            articleContainer.appendChild(infoContainer);
            
    })
}

const authorShare = document.getElementById("share-author");
const socialMediaDiv = document.getElementById("social-div");

authorShare.addEventListener('click', e =>{
    socialMediaDiv.classList.toggle("show");
})







