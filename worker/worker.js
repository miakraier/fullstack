self.addEventListener("message", e=> {
    console.log(e.data)
})
for(let i=0; i<10; i++){
    self.postMessage(i)
}