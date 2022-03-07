//section - current day displayed at top
//come back later to add 24 hour update function

const today = moment().format("MMM Do, YYYY")

document.getElementById('currentDay').innerHTML ='Today is ' + today

//console.log(currentDate)

//section - timeblocks

let timeRow = document.getElementsByClassName('row')
//let hour = parseInt(moment().format('HH'))
let hour = 11

//console.log(hour)

// if (hour > hourValueNumeric) {
//   timeRow[0].children[2].classList.add('past')
// }

for (let i = 0; i < 9; i++) {
  let hourValue = timeRow[i].children[0].textContent
  let hourValueNumeric = parseInt(hourValue)

  if (hour > hourValueNumeric) {
    timeRow[i].children[2].classList.add('past')
    //console.log('past')
  }
  else if (hour === hourValueNumeric) {
    timeRow[i].children[2].classList.add('present')
    //console.log('present')
  }
  else if (hour < hourValueNumeric) {
    timeRow[i].children[2].classList.add('future')
    //console.log('future')
  }
  else {
    timeRow[i].children[2].classList.add('broken')
    console.log('broken')
  }
}

document.querySelector('#btn9').addEventListener('click', () => {
  localStorage.setItem('task9', document.getElementById('task9').value)
})
document.getElementById('task9').value = localStorage.getItem('task9')

document.querySelector('#btn10').addEventListener('click', () => {
  localStorage.setItem('task10', document.getElementById('task10').value)
})
document.getElementById('task10').value = localStorage.getItem('task10')

document.querySelector('#btn11').addEventListener('click', () => {
  localStorage.setItem('task11', document.getElementById('task11').value)
})
document.getElementById('task11').value = localStorage.getItem('task11')

document.querySelector('#btn12').addEventListener('click', () => {
  localStorage.setItem('task12', document.getElementById('task12').value)
})
document.getElementById('task12').value = localStorage.getItem('task12')

document.querySelector('#btn13').addEventListener('click', () => {
  localStorage.setItem('task13', document.getElementById('task13').value)
})
document.getElementById('task13').value = localStorage.getItem('task13')

document.querySelector('#btn14').addEventListener('click', () => {
  localStorage.setItem('task14', document.getElementById('task14').value)
})
document.getElementById('task14').value = localStorage.getItem('task14')

document.querySelector('#btn15').addEventListener('click', () => {
  localStorage.setItem('task15', document.getElementById('task15').value)
})
document.getElementById('task15').value = localStorage.getItem('task15')

document.querySelector('#btn16').addEventListener('click', () => {
  localStorage.setItem('task16', document.getElementById('task16').value)
})
document.getElementById('task16').value = localStorage.getItem('task16')

document.querySelector('#btn17').addEventListener('click', () => {
  localStorage.setItem('task17', document.getElementById('task17').value)
})
document.getElementById('task17').value = localStorage.getItem('task17')

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