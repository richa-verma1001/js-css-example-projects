const description = document.getElementById('description');
const getJokeBtn = document.getElementById('getJoke');

//Using FETCH without async/await
// getJokeBtn.addEventListener('click', () => {
//     const config = {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     };
//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             description.innerHTML = data.joke;
//         });
// });

//Using async await
async function generateJoke() {
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    description.innerHTML = data.joke;
}

getJokeBtn.addEventListener('click', generateJoke);
window.addEventListener('load', generateJoke);