const apiUrl = 'https://jsonplaceholder.typicode.com'; 

async function fetchPosts() { //function returns a promise
    try {
        const response = await fetch(`${apiUrl}/posts/`); //apiUrl can be used in other function
    
        if(!response.ok) { //if not ok
        throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        return posts = await response.json();
    } catch (e) { //logging error
        console.log(e);
    }
}

async function listsPosts(postContainerElementId) { //take ID of container of the posts 
    const postContainerElement = document.getElementById
    (postContainerElementId);
    
    if (!postContainerElement) {
        return;
    }

    fetchPosts().then(posts => { //alternative way
        if(!posts) {
            postContainerElement.innerHTML = 'No posts fetched.'; //if there is no posts
            return;
        }

        for(const post of posts) {
            postContainerElement.appendChild(postElement(post));
        }

    }).catch(e => {
        console.log(e);
    })
}

function postElement(post) {
    const anchorElement = document.createElement('a'); //making a link
    anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`); //matching the single posts
    anchorElement.setAttribute('target', '_blank'); //open menu tab
    anchorElement.innerText = capitalizeFirstLetter(post.title);

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}

function capitalizeFirstLetter(str) { //capital letter
    return str.charAt(0).toUpperCase() + str.slice(1);
}