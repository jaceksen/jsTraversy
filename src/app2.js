console.log('app2.js - Asynchronous');

//synchronous ----------------------------------------------
posts = loadPostsSync();
//waitin till finish ... till posts are fetched
doTheNextThing();

function loadPostsSync(){
    console.log('Loadaing posts synchronously ..');
    // setTimeout(function(){
    // },4000);
    console.log('Done loading posts ....');
}

function loadPostsAsync(){
    console.log('Loadaing posts asynchronously ..');
}

function doTheNextThing(){
    console.log('doTheNextThing');
}



// asynchronous -------------------------------------------------!!!!!!!
loadPostsAsync(function(){
    //wait till posts are fetched
    //do something with posts
});

doTheNextThing(); //doesn't have to wait untill posts load

//---------------------------------------------------------------------------
// ways to work with async code:
// - callbacks
// - promises
// - async/await

