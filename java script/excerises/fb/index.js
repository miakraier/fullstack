//on ready
$(() => {

    //make request
    $.get("https://jsonplaceholder.typicode.com/posts", posts => {
        console.log(posts);
        //loop over the arry
        for (let post of posts) {
            //create post for every cell in the arry
            //constract request to /users/${post.userid}
            $.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`, userid => {
                console.log(userid);
                //enter the name to variable
                $(".post").append(`<div class="card mt-5">
            <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <h6 class="card-subtitle mb-2 text-muted">${userid.username}</h6>
            <p class="card-text">${post.body}</p>
            <button type="button" class="bt btn btn-outline-primary">like</button>
            </div>
            </div>`)
                //like button 
                $(".bt").click(liked)
            })
        }
    })
    //submit button
$("#submit").click(function(e){
    e.preventDefault()
    let pw=$("#pw")
    let pt=$("#pt")
    let pb=$("#pb")
    console.log(pw)
   $(".post").prepend(`<div class="card mt-5">
   <div class="card-body">
   <h3 class="card-title">${pt[0].value}</h3>
   <h6 class="card-subtitle mb-2 text-muted">${pw[0].value}</h6>
   <p class="card-text">${pb[0].value}</p>
   <button type="button" class="bt btn btn-outline-primary">like</button>
   </div>
   </div>`)
    //like button 
    $(".bt").click(liked)
})
})



function liked(e){
   
   e.stopImmediatePropagation();
   e.stopPropagation();
    if ($(e.target).text() == "like")
         $(e.target).html("liked")
     else $(e.target).html("like")

}