//on ready
$(() => {

    //make request
    $.get("https://jsonplaceholder.typicode.com/posts", posts => {
        console.log(posts);
        //loop over the arry
        for (let post of posts) {
            //create post for every cell in the arry
                    //constract request to /users/${post.userid}
              $.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`, userid =>{
                  console.log(userid);
                //enter the name to variable
            $("body").append(`<div class="card mt-5">
            <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <h6 class="card-subtitle mb-2 text-muted">${userid.username}</h6>
            <p class="card-text">${post.body}</p>
            </div>
            </div>`)
        } )
        }
    })
})