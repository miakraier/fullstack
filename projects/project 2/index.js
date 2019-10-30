$(() => {
    openHome()
    $("#reports-tab").click(openReports)
    $("#about-tab").click(openAbout)
    $("#home-tab").click(openHome)
 $("#search").click(openSearch)
    if(localStorage.getItem("fav") == null)
        localStorage.setItem("fav",JSON.stringify([]))

})

//loading icon
function loading(s) {
    if (s == "show") {
        $("#load").show()
    }
    else { $("#load").hide() }
}
//info for cards and
function openHome() {
    $(".shownow").empty()
    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/list",
        beforeSend: () => { loading("show") },
        success: (coins) => {
            loading("hide")
            console.log(coins);
            for (let i = 0; i < 100; i++) {
              addcards(coins[i])
            }


            //calling more info
            $(".mi").click(e => {
                moreInfo(e)
            })
            //calling toggle btn
            $(".tb").click((e) => {
                togglebtn(e)
            })
        }
    }
    )
}

//card content
function addcards(coin) {
$(".shownow").append(`
<div id="${coin.id}" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<h4 class="card-header">${coin.id}</h4>
      <div class="card-body">
  <h5 class="card-subtitle mb-2" style="display: inline-block">${coin.symbol}</h5>
  <div class="custom-control custom-switch wrap">
  <input type="checkbox" class="custom-control-input tb" id="customSwitch_${coin.id}">
  <label class="custom-control-label" for="customSwitch_${coin.id}"></label>
  </div>
   <div class="dropdown">
            <button class="mi btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              more info
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="display: none"></div>
            </div>
            </div>
                       </div>
                  </div>
            `)
            let arr=JSON.parse(localStorage.getItem("fav"))
            for(let element of arr){
                if(element[0]==coin.id){
                    $(`#customSwitch_${coin.id}`).prop("checked",true)
                }
            }
}
//more info btn
function moreInfo(e) {
    let id = $(e.target).parent().parent().parent().attr("id");
   let memory=JSON.parse(localStorage.getItem(id))
   let time=(new Date().getTime())/1000
   let req=() => { $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
    beforeSend: () => { loading("show") },
    success: (data) => {
        loading("hide")
        console.log(data)
        localStorage.setItem(id ,JSON.stringify([data,time]))
    }  
})}
    if(memory==null ){
      req() 
    }  else{ if(time-memory[1]>120){
        req()
    }}
        $(e.target).next().stop().slideToggle("slow", () => {
        $(e.target).next().html(`
    <a class="dropdown-item" href="#">USD: ${memory[0].market_data.current_price.usd} ${String.fromCharCode(36)}</a>
    <a class="dropdown-item" href="#">ILS: ${memory[0].market_data.current_price.ils} ${String.fromCharCode(8362)}</a>
    <a class="dropdown-item" href="#">EUR: ${memory[0].market_data.current_price.eur} ${String.fromCharCode(8364)}</a>
    <img src=${memory[0].image.small} class="rounded m-2" alt="no image">
`)
    })
}

//toggle button ????
function togglebtn(e) {
    let id = $(e.target).parent().parent().parent().attr("id")
    let symbol= $(e.target).parent().prev().text()
   
    let arr=JSON.parse(localStorage.getItem("fav"))
  
    $(e.target).toggleClass("switchOn")
  if($(e.target).is(":checked")){//add to array-toggle on
    if(arr.length == 5){//pop modal
        showmodal([id,symbol])

}else{//add coin to array
arr.push([id,symbol])
localStorage.setItem("fav",JSON.stringify(arr))   

}
}else{//remove from array-toggle off
    arr= arr.filter(function(ele){
        return ele[0] != id;
    })
    localStorage.setItem("fav",JSON.stringify(arr))   

  }
console.log(arr);
}

//
function showmodal(coin) {
    $("#modal").modal('show')
    $(".modal-body").empty()
    console.log(coin);
    let arr=JSON.parse(localStorage.getItem("fav"))
    for(let i=0; i<5; i++){
        $(".modal-body").append(`<div>
        <span>${arr[i][0]}</span>
        <button class="trash"><img src="https://img.icons8.com/metro/26/000000/trash.png"></button>
        </div>`)

    }
    $(".trash").click((e)=>{
        let remove= $(e.target).parent().prev().text()
        console.log(remove)
        arr= arr.filter(function(ele){
            return ele[0] != remove;
        })
        $(`#customSwitch_${remove}`).prop("checked", false)
        arr.push(coin)
        localStorage.setItem("fav",JSON.stringify(arr))   

        $("#modal").modal('hide')

    })
    $('#modal').on('hidden.bs.modal', function (e){
        let arr=JSON.parse(localStorage.getItem("fav"))
      for(let element of arr)
      if(element[0]== coin[0])
        return;
      $(`#customSwitch_${coin[0]}`).prop("checked", false)
    })
}

//search bar
function openSearch() {
    $(".shownow").empty()
  let input=$("#sInput").val()
  console.log(input);
  let arr=JSON.parse(localStorage.getItem("fav"))
  for(let element of arr){
      if(input==element[0] || input==element[1]){
       $.ajax({
            url: `https://api.coingecko.com/api/v3/coins/${element[0]}`,
            beforeSend: () => { loading("show") },
            success: (data) => {
                loading("hide")   
                addcards(data)
                //calling more info
                $(".mi").click(e => {
                    moreInfo(e)
                })
                //calling toggle btn
                $(".tb").click((e) => {
                    togglebtn(e)
                })
      }
  })

    
}}}

    

//reports tab
function openReports() {
    $(".shownow").empty()

}



//about tab
function openAbout() {
    $(".shownow").empty()
    //complete the content--------------------
    $(".shownow").append(`
    write about...
    `)
}


      