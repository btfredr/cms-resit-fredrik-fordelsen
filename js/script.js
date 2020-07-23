const url = "http://fedup.fredrikfordelsen.no/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".myPosts");

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map( post => {
            const innerContent = 
            `
            <li>
                <h1>${post.title.rendered}</h1>
                <h4>Author: ${post.author}</h4>
                ${post.excerpt.rendered}
                <a href="${post.link}">Read More</a>
                <p>Published on: ${post.date}</p>
            </li>
            `
            postContainer.innerHTML += innerContent;
        })
    });