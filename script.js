function createNewPost() {
const title = document.getElementById('title').value;
const content = document.getElementById('content').value;
const tags = document.getElementById('tags').value;

const newPost = {
    title,
    body: content,
    tags
};

renderNewPost(newPost);
}

function renderNewPost(post) {
const postsContainer = document.getElementById('posts-container');

const postElement = document.createElement('div');
postElement.classList.add('post');

postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <p><strong>Tags:</strong> ${post.tags}</p>
`;

postsContainer.insertBefore(postElement, postsContainer.firstChild);

document.getElementById('title').value = '';
document.getElementById('content').value = '';
document.getElementById('tags').value = '';
}

fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);
