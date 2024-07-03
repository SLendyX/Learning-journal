import { articleArray } from "./article_data.js";

/*
<article>
    <img src="/images/blog1-img.png">
    <time>July 2, 2024</time>
    <h1>Blog one</h1>
    <p></p>
</article>
*/

function renderArticles(articleArray){
    let articles=""
    articleArray.forEach(element => {
        articles+=`

<article>
<a href="#"><img src="/images/blog${element.image}-image.png"></a>
    <time>${element.date}</time>
    <h1>${element.title}</h1>
    <p>${element.content}</p>
</article>

`
    });
    document.getElementById("article-body").innerHTML+=articles
}

renderArticles(articleArray)