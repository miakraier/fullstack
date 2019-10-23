$(()=>{
    $.get("http://dummy.restapiexample.com/api/v1/employees", employees =>{
       console.log(employees);
    let emp=JSON.parse(employees)
        $("#search").click(function () { 
            $("#showres").empty()
            for(let i=0; i < emp.length; i++){
          if($("#idI").val() == emp[i].id){
              $("#showres").append(`
              <span class="card border-success mb-3" style="max-width: 18rem; display:inline-block; margin: 2%;">
              <div class="card-body text-success">
              <h4 class="card-text">id: ${emp[i].id}</h4>
              <h2 class="card-title">name: ${emp[i].employee_name}</h2>
              <h4 class="card-text">salary: ${emp[i].employee_salary}</h4>
              <h4 class="card-text">age: ${emp[i].employee_age}</h4>
              </div>
              </span>`)
              continue
          }
          if($("#nameI").val()==emp[i].employee_name){
          $("#showres").append(`
              <span class="card border-success mb-3" style="max-width: 18rem; display:inline-block; margin: 2%;">
              <div class="card-body text-success">
              <h4 class="card-text">id: ${emp[i].id}</h4>
              <h2 class="card-title">name: ${emp[i].employee_name}</h2>
              <h4 class="card-text">salary: ${emp[i].employee_salary}</h4>
              <h4 class="card-text">age: ${emp[i].employee_age}</h4>
              </div>
              </span>`)
              continue
            }
            if($("#salaryI").val()==emp[i].employee_salary){
            $("#showres").append(`
            <span class="card border-success mb-3" style="max-width: 18rem; display:inline-block; margin: 2%;">
            <div class="card-body text-success">
            <h4 class="card-text">id: ${emp[i].id}</h4>
            <h2 class="card-title">name: ${emp[i].employee_name}</h2>
            <h4 class="card-text">salary: ${emp[i].employee_salary}</h4>
            <h4 class="card-text">age: ${emp[i].employee_age}</h4>
            </div>
            </span>`)
            continue   
        }
        if($("#ageI").val()==emp[i].employee_age){
            $("#showres").append(`
            <span class="card border-success mb-3" style="max-width: 18rem; display:inline-block; margin: 2%;">
            <div class="card-body text-success">
            <h4 class="card-text">id: ${emp[i].id}</h4>
            <h2 class="card-title">name: ${emp[i].employee_name}</h2>
            <h4 class="card-text">salary: ${emp[i].employee_salary}</h4>
            <h4 class="card-text">age: ${emp[i].employee_age}</h4>
            </div>
            </span>`)
            continue     
        }
    }
    $("input").val('')
        })
    })
})