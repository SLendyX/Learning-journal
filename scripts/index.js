import { articleArray } from "./article_data.js";

/*
<article>
    <img src="/images/blog1-img.png">
    <time>July 2, 2024</time>
    <h1>Blog one</h1>
    <p></p>
</article>
*/
const articleBodyEl = document.getElementById("article-body");
const menuBtn = document.getElementById("show-menu");

menuBtn.addEventListener("click", e =>{
        document.body.classList.toggle("overflow")
})


function renderArticles(articleArray){
    let articles=""
    articleArray.forEach(element => {
        articles+=`
        <article class="blog-item">
        <a href="${element.link}"><img src="/images/blog${element.image}-image.png"></a>
            <time>${element.date}</time>
            <h1>${element.title}</h1>
            <p>${element.content}</p>
        </article>
`});

    articleBodyEl.innerHTML+=articles

    let i=0;
    const blogItems = document.getElementsByClassName("blog-item");
    for(let element of blogItems){
        if(i > 5){
            element.classList.toggle("hidden")
            // element.classList.toggle("transform")
        }
        i++;

        console.log(element.className.split(" ")[1] === "hidden")
    }
    

    document.getElementById("main-container").appendChild(createViewMoreBtn(blogItems))

}

function createViewMoreBtn(blogItems){
    const btn = document.createElement("button");
    btn.textContent = "View More"
    btn.className = "view-more"
    btn.addEventListener("click", e => {
        for(let element of blogItems){
            if(element.className.split(" ")[1] === "hidden"){
                // element.classList.toggle("hidden")
                element.classList.add('show')
                             
            }
        }
        // window.scrollTo(0, (document.body.scrollHeight/2.5));   
        btn.classList.toggle("hidden")
    })
    

    return btn
}


renderArticles(articleArray)