//fetch function without useing the built FETCH
let ftch=(url) => {
    return new Promise ((resolve,reject) => {
       //new xhr object
        let req= new XMLHttpRequest()
    //readystate event handler
        req.onreadystatechange = () => {
            if (req.readyState === 4){
                if (req.status===200){
                    resolve(JSON.parse(req.responseText))
                }else{
                    reject(req.status)
                }
            }
        }
    //open and send request
        req.open('GET', url)
        req.send()
})
}
ftch('https://api.chucknorris.io/jokes/random')
.then(res => console.log(res.value))
.catch(err => console.log(err))