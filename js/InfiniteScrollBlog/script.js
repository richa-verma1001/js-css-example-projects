const posts = document.getElementById('posts');
const scrollEl = document.getElementById('scroll');
const filterEL = document.getElementById('filter');
const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

let limit = 5;
let page = 1;
const allPosts = [];

async function getPosts() {
    const response = await fetch(POSTS_API+`?_limit=${limit}&_page=${page}`);
    const data = await response.json();

    data.forEach( (item) => {
        createPost(item);
    });    
}

function createPost(item) {
    const { id, title, body } = item;
    const thisPost = { id, title, body };

    const post = document.createElement('div');
    post.classList.add('post');
    post.id = item.id;
    post.innerHTML = `<div class="index">${id}</div>
                    <h3>${title}</h3>
                    <p>${body}</p>`;
    posts.appendChild(post);
    
    allPosts.push(thisPost);
}

function showLoading() {
    scrollEl.classList.add('active');

    // fetch next five 
    setTimeout( ()=> {
        scrollEl.classList.remove('active');
        page++;
        getPosts();
    }, 1000);
}

function matchPosts(e) {
    const text = e.target.value.trim();
    const regex = new RegExp(text, 'ig');
    
    allPosts.forEach( (post) => {
        if(regex.test(post.title) || regex.test(post.body)){
            document.getElementById(post.id).classList.remove('hide');    
        }else {
            document.getElementById(post.id).classList.add('hide');
        }
    });
}
// Get initial posts
getPosts();

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
    if (scrollHeight - scrollTop === clientHeight) {
      showLoading();
    }
});

filterEL.addEventListener('input', matchPosts);

// https://jsonplaceholder.typicode.com/posts?_limit=5&_page=5