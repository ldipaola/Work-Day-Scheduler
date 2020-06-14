


$( document ).ready(function() {
    var plannerItems = [];

    function setPlanner () {
        console.log(localStorage.getItem('planner-items') )
    if (localStorage.getItem('planner-items') !== null){
        plannerItems =  JSON.parse(localStorage.getItem('planner-items'));
    }else {
         plannerItems =  [
        {
            time: "8AM",
            hour: 8,
            id: 0,
            index: 0,
            items: []
        },
        {
            time: "9AM",
            hour: 9,
            id: 1,
            index: 0,
            items: []
        },
        {
            time: "10AM",
            hour: 10,
            id: 2,
            index: 0,
            items: []
        },
        {
            time: "11AM",
            hour: 11,
            id: 3,
            index: 0,
            items: []
        },
        {
            time: "12AM",
            hour: 12,
            id: 4,
            index: 0,
            items: []
        },
        {
            time: "1PM",
            hour: 13,
            id: 5,
            index: 0,
            items: []
        },
        {
            time: "2PM",
            hour: 14,
            id: 6,
            index: 0,
            items: []
        },
        {
            time: "3PM",
            hour: 15,
            id: 7,
            index: 0,
            items: []
        },
        {
            time: "4PM",
            hour: 16,
            id: 8,
            index: 0,
            items: []
        },
        {
            time: "5PM",
            hour: 17,
            id: 9,
            index: 0,
            items: []
        },
    
    ];
}
renderPlanner();
    }

        var year = moment().format("YYYY");
        var month =  moment().format("MMMM");
        var dayOfWeek = moment().format("dddd");
        var dayOfMonth = moment().format("Do");

    $("#current-date").text(dayOfWeek + ", " + dayOfMonth + " " + month + " " + year);
    setPlanner();
    
    
    function renderPlanner () {
    plannerItems.forEach(function(item, index){
        var timeSlotContainer = $('<div class="time-container radius">');
        var plannerTimeEl = $('<div class="planner-row" data-number=' + index +'>');
        var timeSlot = $('<div class="time-span">');
        var plannerList = $('<ul class="time-slot-list">');

        if (item.items !== []){
            item.items.forEach((element) =>{
                var li = $('<li>');
                li.text(element);
                plannerList.append(li);
            });
        }
        
        timeSlot.text(item.time);
        if (moment().hour() > item.hour){ timeSlotContainer.addClass("grey")};
        if (moment().hour() === item.hour){ timeSlotContainer.addClass("orange")};
        if (moment().hour() < item.hour){ timeSlotContainer.addClass("green")};
        timeSlotContainer.append(timeSlot, plannerTimeEl);
        plannerTimeEl.append(plannerList)
        $('#day-planner').append(timeSlotContainer);
    });
}

    function addInput() {
        var input = $('<input class="item-input" type="text" placeholder=" add item">');
        if ($(this).find('input').length < 1) {
            $(this).append(input);
            input.focus();
        }
        
    }
    function addItem(e) {
        e.preventDefault();
        if (e.keyCode === 13 && $(this).val().trim() !== ""){
        var li = $('<li>');
        var createSpan = $('<i class="fas fa-check-circle"></i>');
        li.append(createSpan);
        li.text($(this).val() );
        $(this).parent().find('ul').append(li);
        console.log($(this).parent().data('number'));
        plannerItems[$(this).parent().data('number')].items.push($(this).val());
        localStorage.setItem("planner-items", JSON.stringify(plannerItems));
        console.log(plannerItems)
        $(this).remove();
    }

    }

    $(document).on("click", ".planner-row", addInput);
    $(document).on("focusout", ".item-input", function(){
        $(this).remove();
    });
    $(document).on("keyup", ".item-input", addItem);
    $('.clear-schedule').on('click', function(e){
        e.preventDefault();
        localStorage.removeItem('planner-items');
        $('#day-planner').empty();
        setPlanner();
        console.log('you cleared me')
    })


});

fetch('https://uselessfacts.jsph.pl/random.json?language=en')
.then(res => res.ok ? res.json() : console.log("Error"))
.then(data => {
    document.querySelector('#random-fact').textContent = data.text})








