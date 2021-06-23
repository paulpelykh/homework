const date = new Date();

//Main function for rendering calendar
const render = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDaysCount = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    //Show current month and year
    document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`

    let days = '';
   
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    //Insert days of current month 
    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        }
        else {
            days += `<div>${i}</div>`;
        }
    }

    //Insert days of next month 
    for (let j = 1; j <= nextDaysCount; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

//Render next and previous months
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

prevButton.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    render();
});

nextButton.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    render();
});

render();
