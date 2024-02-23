var date = document.createElement("input");
date.setAttribute("type","date");
date.id = "dob"

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Click Me";
button.addEventListener("click",date_data);

document.body.append(date,button);
  

function date_data(){
    var input = document.getElementById("dob").value;
    var input_date = new Date(input);
    var currentdate = new Date();
    
    var millisecdiff = parseInt(currentdate.getTime()-input_date.getTime());
     
    var secondsdiff = Math.floor(millisecdiff/1000);
    
    var minutesdiff = Math.floor(secondsdiff/60);
    
    var hoursdiff = Math.floor(minutesdiff/60);
    
    var daydiff = Math.floor(hoursdiff/24);
   
    var yeardiff = currentdate.getFullYear() - input_date.getFullYear();
    
    var monthdiff = (yeardiff*12)+(currentdate.getMonth()-input_date.getMonth());
    
    var year = document.createElement("p");
    year.innerHTML= `YEAR:${yeardiff}`

    var month = document.createElement("p");
    month.innerHTML= `MONTH:${monthdiff}`

    var day = document.createElement("p");
    day.innerHTML= `DAY:${daydiff}`

    var hours = document.createElement("p");
    hours.innerHTML = `HOURS:${hoursdiff}`

    var minutes = document.createElement("p");
    minutes.innerHTML = `MINUTES:${minutesdiff}`

    var seconds = document.createElement("p");
    seconds.innerHTML = `SECONDS:${secondsdiff}`

    var milliseconds = document.createElement("p");
    milliseconds.innerHTML = `MILLISECONDS:${millisecdiff}`

    document.body.append(year,month,day,hours,minutes,seconds,milliseconds);
}