console.log('App8 promises.');

const posts = [
    {title: 'post1', body: 'Body post 1.'},
    {title: 'post2', body: 'Body post 2.'},
    {title: 'post3', body: 'Body post 3.'}
];

//synchronous way

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//            output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//         // console.log(output);
//     }, 1000);
// }

// createPost({title: 'Post 4', body: 'Body of post 4'});

// getPosts();



// asynchronous way
function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong.');
            }
            
        }, 2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
           output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
        // console.log(output);
    }, 1000);
}

createPost({title: 'Post 4', body: 'Body of post 4'}).then(getPosts)
    .catch(function(err){
        console.log(err);
    });