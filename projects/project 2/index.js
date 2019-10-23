$(() => {
    openHome()
    // $("#reports-tab").click(openReports)
    // $("#about-tab").click(openAbout)
    $("#home-tab").click(openHome)
    


    //info for cards and
    function openHome() {
        $(".shownow").empty()
        $.get("https://api.coingecko.com/api/v3/coins/list", (coins) => {
            console.log(coins)
            for (let i = 0; i < 100; i++) {
                $(".shownow").append(`
        <div id="${coins[i].id}" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <h5 class="card-header">${coins[i].id}</h5>
        <div class="custom-control custom-switch tb">
          <input type="checkbox" class="custom-control-input" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1"></label>
          </div>
          <div class="card-body">
          <div class="card-title">${coins[i].symbol}</div>
          <div class="dropdown">
                    <button class="mi btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      more info
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"></div>
                    </div>
                    </div>
                               </div>
                          </div>
                    `)
            }
    
           $(".mi").click(e =>{
            moreInfo(e)
           })    
        }
        )
    }
})
    //more info btn
function moreInfo(e) {
    let id = $(e.target).parent().parent().parent().attr("id");    
    $.get(`https://api.coingecko.com/api/v3/coins/${id}`, (names) => {
           console.log(names)
                if (id == names[j].id){
                    $('.dropdown-menu').append(`
                      <a class="dropdown-item" href="#">USD: ${names[j].market_data.current_price.usd} $</a>
                      <a class="dropdown-item" href="#">ILS: ${names[j].market_data.current_price.ils} €</a>
                      <a class="dropdown-item" href="#">EUR: ${names[j].market_data.current_price.eur} ₪</a>
                  `)
                    $(e.target).next().append("no more info for this coin") 
                }

            })
        }

    
        //             //toggle button ????
        //     $(".custom-control-label").click((e) => {
        //         e.preventDefault()
        //         $(e.target).toggleClass("switchOn")
        //     })

        //         //search button
        //         $("#search").click(() => {
        //             $(".shownow").empty()
        //             if ($("#sInput").val == coins[i].symbol || $("#sInput").val == coins[i].name) {
        //                 $(".shownow").append(`
        //     <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        //             <h5 class="card-header">${coins[i].symbol}</h5>
        //             <div class="custom-control custom-switch tb">
        //               <input type="checkbox" class="custom-control-input" id="customSwitch1">
        //               <label class="custom-control-label" for="customSwitch1"></label>
        //               </div>
        //               <div class="card-body">
        //               <div class="card-title">${coins[i].name}</div>
        //               <button data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="mi btn btn-info">more info</button>
        //                </div>
        //           </div>
        //     `)
        //             }

        //         })


        //     })

        //reports tab
        // function openReports() {
        //     $(".shownow").empty()

        // }



        //about tab
    //     function openAbout() {
    //         $(".shownow").empty()
    //         //complete the content--------------------
    //         $(".shownow").append(`
    // write about...
    // `)
    //     }
        //coins tab-----------כפל קוד
        //         $("#home-tab").empty()
        //         for (let i = 0; i < 100; i++) {
        //             $(".shownow").append(`
        // <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        //         <h5 class="card-header">${coins[i].symbol}</h5>
        //         <label class="tb"><div class="switch"></div></label>
        //         <div class="card-body">
        //           <div class="card-title">${coins[i].name}</div>
        //           <a href="#" class="btn btn-info mi">more info</a>
        //         </div>
        //       </div>
        // `)          <img src="${obj[j].image.small}" class="card-img-top" alt="icon missing">

