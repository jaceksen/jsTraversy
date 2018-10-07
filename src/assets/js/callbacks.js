const posts = [
  {title: 'post 1', body: 'This is post one'},
  {title: 'post 2', body: 'This is post two'},
  {title: 'post 3', body: 'This is post three'}
]

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  },5000);
}


// getPosts();
createPost({title: 'post 4', body: 'This is post 4'}, getPosts);
