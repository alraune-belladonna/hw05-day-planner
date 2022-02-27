//section - current day displayed at top
//come back later to add 24 hour update function

const today = moment().format("MMM Do, YYYY")

document.getElementById('currentDay').innerHTML ='Today is ' + today

//console.log(currentDate)

//section - timeblocks

let hourSlot = document.getElementsByClassName('hour')
let timeRow = document.getElementsByClassName('row')

let hour = parseInt(moment().format('h'))



// for loop attempt at row creation

// for (let i = 0; i < 8; i++) {
//   let midday
//   if (i < 3) {
//     midday = 'AM'
//   }
//   else {
//     midday = 'PM'
//   }
//   const rowDiv = timeRow.createElement('<div>')
//   const rowText = timeRow.createElement('textarea')
//   const rowBtn = timeRow.createElement('button')

//   rowDiv[i].classList.add('hour')
//   rowDiv[i].innerHTML = ([i+9]+midday)
//   document.getElementsByClassName('hour').appendChild(rowDiv)
//   rowText[i].classList.add('description')
//   rowBtn[i].classList.add('saveBtn')
  
// }