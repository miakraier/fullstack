$(() => {
    //get
    $.get("https://restcountries.eu/rest/v2/all", countries => {
        console.log(countries)

        //all button
        $("#abtn").click(function () {
            $("#showres").empty()
            for (let i = 0; i < countries.length; i++){
                $("#showres").append(`
            <div class="card" style="width: 18rem;">
        <img src="${countries[i].flag}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Name: ${countries[i].name}</h5>
          <h6 class="card-text">Capital: ${countries[i].capital}</h6>
          <p class="card-text">Currencies: ${countries[i].currencies}</p>
          <p class="card-text">Top Level Domain: ${countries[i].topLevelDomain}</p>
        </div>
      </div>`)}
        })
        //search button
        $("#sbtn").click(function() {
            $("#showres").empty()
            for (let i = 0; i < countries.length; i++){
                if($("#input").val() == countries[i].name){
                    $("#showres").append(`
                    <div class="card" style="width: 18rem;">
                <img src="${countries[i].flag}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">Name: ${countries[i].name}</h5>
                  <h6 class="card-text">Capital: ${countries[i].capital}</h6>
                  <p class="card-text">Currencies: ${countries[i].currencies[0].name}</p>
                  <p class="card-text">Top Level Domain: ${countries[i].topLevelDomain}</p>
                </div>
              </div>`)  
                }
            }
     $("input").val('')   })
    })
})
