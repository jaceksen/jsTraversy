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
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong.');
      }
    },5000);
  });
}

const promise6 = new Promise((resolve,reject) => {
  setTimeout(resolve, 5000, 'promise 6 ends')
});

// Normal Promise
// createPost({title: 'post 4', body: 'This is post 4'})
//     .then(getPosts)
//     .catch(err => {
//       console.log(err);
//     });


// Async Await
// async function init() {
//   await createPost({title: 'post 4', body: 'This is post 4'});
//   await promise6;
//   getPosts();
// }
// init();

// Async Await Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
fetchUsers();


// Promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//   setTimeout(resolve, 5000, 'Goodbye')
// });
// const promise4 = new Promise((resolve,reject) => {
//   setTimeout(resolve, 5000, 'Goodbye')
// });
// const promise5 = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4, promise5])
//   .then((values) => {
//     console.log(values);
//   });
