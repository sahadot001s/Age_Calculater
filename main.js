// let ageCalculate = () => {
//     const today = new Date();
//     const inputDate = new Date(document.getElementById("date_input").value);

//     const birthDateLis = {
//         date : inputDate.getDate(),
//         month : inputDate.getMonth() + 1,
//         years : inputDate.getFullYear(),
//     }

//     const curentYear = today.getFullYear();
//     const curentMonth = today.getMonth() + 1;
//     const curentDate = today.getDate();

//     if(isFutureDate(birthDateLis, curentYear, curentMonth, curentDate)){
//         alert("Not Born Yet");
//         displayResult("-", "-", "-");
//         return;
//     }

//     const {years, month, days} = calculateAge(
//         birthDateLis,
//         curentYear,
//         curentMonth,
//         curentDate
//     );

//     displayResult(days, month, years);
// }

// const isFutureDate = (birthDateLis, curentYear, curentMonth, curentDate) => {
//     return (
//         birthDateLis.years > curentYear ||

//     )
// };


// document.getElementById("calculate_btn").addEventListener("click", ageCalculate);


let userInput = document.getElementById("date_input");
userInput.max = new Date().toISOString().split("T")[0];

let displayYears = document.getElementById("years");
let displayMonts = document.getElementById("months");
let displayDays = document.getElementById("days");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    
    let toDay = new Date();

    let d2 = toDay.getDate();
    let m2 = toDay.getMonth() + 1;
    let y2 = toDay.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else {
        m3--;
        d3 = getDaysinMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0 ){
        m3 = 11;
        y3--;
    }

    displayYears.innerHTML = y3;
    displayMonts.innerHTML = m3;
    displayDays.innerHTML = d3;

}

function getDaysinMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

