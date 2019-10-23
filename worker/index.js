if(Worker){
    let myWorker= new Worker('worker.js')
    console.log(myWorker);

    for(let i=0; i<10; i++){
        myWorker.postMessage(i)
    }

myWorker.onmessage = e => console.log(e.data)
    }else{
        console.log("use chrome!");
    }
