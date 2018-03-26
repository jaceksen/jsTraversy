//jsonplaceholder.typicode.com
console.log('App7');

const http = new easyHTTP;

//GET
// http.get('https://jsonplaceholder.typicode.com/posts');

// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts);

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });



//POST
//Crate Data
// const data = { title: 'Custom Post', body: 'This is a custom post' };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//PUT
// const data = { title: 'Custom Post id 1', body: 'This is a custom post, id 1.' };

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});