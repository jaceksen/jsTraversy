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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong.');
      }
    },5000);
  });
}

createPost({title: 'post 4', body: 'This is post 4'})
    .then(getPosts)
    .catch(err => {
      console.log(err);
    });
