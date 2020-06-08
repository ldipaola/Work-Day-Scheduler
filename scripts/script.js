
var year = moment().format("YYYY");
var month =  moment().format("MMMM");
var dayOfWeek = moment().format("dddd");
var dayOfMonth = moment().format("Do");

var dateEl = document.querySelector("#current-date");

var hoursArr = ['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
var hoursNumArr = [8,9,10,11,12,13,14,15,16,17];

dateEl.textContent = dayOfWeek + ", " + dayOfMonth + " " + month + " " + year; 
var dayPlannerEl = document.querySelector('#day-planner');


hoursArr.forEach(function(hour, index){
    var newEl1 = document.createElement('div');
    var newEl2 = document.createElement('div');
    var newEl3 = document.createElement('div');
    var editButton = document.createElement('button');
    editButton.classList.add('btn-floating', 'btn-small', 'waves-effect', 'waves-light', 'red', 'right');
    editButton.innerHTML = '<i class="material-icons">mode_edit</i>';
    
    newEl1.classList.add("row");
    newEl2.classList.add("col", "s2");
    newEl3.classList.add("col", "s10", "planner-items");
    newEl3.appendChild(editButton);
    newEl2.textContent = hour;
    if (moment().hour() > hoursNumArr[index]){ newEl3.classList.add("grey")};
    if (moment().hour() === hoursNumArr[index]){ newEl3.classList.add("orange")};
    if (moment().hour() < hoursNumArr[index]){ newEl3.classList.add("green")};
    newEl1.appendChild(newEl2);
    newEl1.appendChild(newEl3);
    dayPlannerEl.appendChild(newEl1);
});



dayPlannerEl.addEventListener('click', function(e){
    if (e.target.parentElement.type === 'submit'){
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'add new item');
    newInput.classList.add('scheduler-input');
    e.target.parentElement.parentElement.appendChild(newInput);
    newInput.addEventListener('keyup', function(e){
        if (e.keyCode === 13){
            if (newInput.value.trim() !== ""){
                var textNode = document.createElement('p');
                textNode.textContent = newInput.value;
                e.target.parentElement.appendChild(textNode);
                e.target.parentElement.removeChild(newInput);
            }
        }
    })
    
    }
    console.log(document.activeElement.type);
    
});


