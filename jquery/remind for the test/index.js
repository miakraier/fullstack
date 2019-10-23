$(()=>{
    $("#btn").click(()=>{
        $("h1").fadeToggle()
    })
})

//ajax
$.get('https://jsonplaceholder.typicode.com/todos', res=>{
    console.log(res);
    for(let i=0; i<res.length; i++){
        $("body").append(`<div id="${res[i].id}" class="todo"> 
        <h4 ${res[i].completed?"class='comp'":""}>${res[i].title}</h4>
        </div>`)
    }
})