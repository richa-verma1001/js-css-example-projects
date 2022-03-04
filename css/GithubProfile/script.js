const userName = document.getElementById('userName');
const userAbout = document.getElementById('userAbout');
const avatar = document.getElementById('avatar');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repos = document.getElementById('repos');
const top5Repos = document.getElementById('top5Repos');
const userForm = document.getElementById('userForm');
const userId = document.getElementById('userId');
const APIURL = 'https://api.github.com/users/';

userForm.addEventListener('click', (e) => {
    userId.value = '';
});

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(userId.value)
        getUserData(userId.value);
    userId.value = '';
});

async function getUserData(userId) {
    const user = await fetch(APIURL + userId);
    const response = await user.json();
    
    avatar.src = response.avatar_url;
    userName.innerHTML = response.login;
    userAbout.innerHTML = response.bio;
    followers.innerHTML = response.followers;
    following.innerHTML = response.following;
    repos.innerHTML = response.public_repos;

    const top5 = await getTopRepos(response.repos_url);
    top5Repos.innerHTML = '';
    top5.forEach( (repo) => {
        const node = document.createElement('a');
        node.href = repo.html_url;
        node.innerHTML = repo.name;
        top5Repos.appendChild(node);
    });

}

async function getTopRepos(url) {
    const repos = await fetch(url);
    const response = await repos.json();

    const result = [];
    for(let i=0; i<5; i++) {
        if(response[i])
            result.push(response[i]);
    }
    console.log(result);
    return result;
}

window.addEventListener('load', getUserData('richa-verma1001'));

