//section - current day displayed at top
//come back later to add 24 hour update function

const today = moment().format("MMM Do, YYYY")

document.getElementById('currentDay').innerHTML ='Today is ' + today

//console.log(currentDate)

//section - timeblocks

let timeRow = document.getElementsByClassName('row')
let hour = parseInt(moment().format('h'))
let saveButton = document.querySelector('saveBtn')

// console.log(hour)
// console.log(timeRow[5].children[0].textContent)

// if (hour > hourValueNumeric) {
//   timeRow[0].children[2].classList.add('past')
// }

for (let i = 0; i < 9; i++) {
  let hourValue = timeRow[i].children[0].textContent
  let hourValueNumeric = parseInt(hourValue)

  if (hour > hourValueNumeric) {
    timeRow[i].children[2].classList.add('past')
    console.log('past')
  }
  else if (hour === hourValueNumeric) {
    timeRow[i].children[2].classList.add('present')
    console.log('present')
  }
  else if (hour < hourValueNumeric) {
    timeRow[i].children[2].classList.add('future')
    console.log('future')
  }
  else {
    timeRow[i].children[2].classList.add('broken')
    console.log('broken')
  }
}

saveButton.addEventListener('click', function(event) {
  for (let i = 0; i < 9; i++) {
    let taskText = document.querySelector('#task' + i).value
    localStorage.setItem('tasks', taskText)
  }
})

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