/* 
    Вывести на странице 5 постов с ресурса 
    http://jsonplaceholder.typicode.com/posts?_start=8&_limit=5

    В произвольной форме вывести 
    - заголовок поста
   - ссылку на автора этого поста
      <span class="author-link">Get author</span> 

    При клике на ссылку "Get author" выполнить запрос на сервер 
    https://jsonplaceholder.typicode.com/users/<ID_автора>
    https://jsonplaceholder.typicode.com/posts?userId=1
     - name, username, email
     - количество постов этого user      

    */

const posts = document.getElementById("posts");

(async function getResponse(){

    let response = await fetch('http://jsonplaceholder.typicode.com/posts?_start=8&_limit=5');
    let mainPagePosts = await response.json();

    for(let item of mainPagePosts){
        posts.innerHTML += `
            <div id="post">
                <h1>${item.title}</h1>
                <span id="${item.userId}" class="author-link" style="cursor: pointer">Get author</span>
            </div>
        `;
    }
    
}());

posts.addEventListener('click', function(event){
    if(event.target.className == 'author-link'){

        (async function getUsers(){

            let post = event.target.parentNode;
            let id = event.target.id;
            let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            let user = await userResponse.json();
            let userPosts = await postsResponse.json();

            if(!post.querySelector(".author")){
                post.innerHTML += `
                    <div class="author">
                        <p>${user.name}</p>
                        <p>${user.username}</p>
                        <p>${user.email}</p>
                        <p>Постов: ${userPosts.length}</p>
                    </div>
                `
            }
        }())
    }
});


