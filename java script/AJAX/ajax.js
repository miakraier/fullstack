let req=new XMLHttpRequest();
req.onreadystatechange=() =>{
    if(req.readyState===4 && req.status===200){
       let img= document.createElement("img")
       img.setAttribute("src", JSON.parse(req.responseText).url)
       // document.write(JSON.parse(req.responseText).value)
       document.body.appendChild(img)
    }else{
        console.log("state is: "+ req.readyState)
    }
}
req.open('GET', 'https://meme-api.herokuapp.com/gimme');
req.send();

//----get function without jquery
let get= (url,callback) =>{
    //create new XHR object
const xhr=new XMLHttpRequest()
    //define ready-state-change function
xhr.onreadystatechange= () =>{
    if(xhr.readyState===4 && xhr.status===200){
        callback(JSON.parse(xhr.responseText))
    }
}
    //open the request
xhr.open('GET', url)
    //send the request
xhr.send()
}
get('https://meme-api.herokuapp.com/gimme', res =>{
    console.log(res.url)
    let img= document.createElement("img")
    img.setAttribute("src", res.url)
    document.body.appendChild(img)
})


//post

$.post('https://jsonplaceholder.typicode.com/posts', 
{title: "stam",
body:"issa first",
userId: 1
}, res => {
    console.log(res)
}
)