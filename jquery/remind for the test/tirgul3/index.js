$(()=>{
    $.get("https://reqres.in/api/users", users =>{
        console.log(users)
        let usr=users.data
        for(let i=0; i < usr.length; i++)
       { $("div").append(`
        <span style="display: inline-block; margin: 2%;">
        <h5>name: ${usr[i].first_name} ${usr[i].last_name}<h5/>
        <img src="${usr[i].avatar}"/>
        </span>`)}
    })
})