// city
function citySelect(param1, param2) {
  console.log(param1, param2)
  const optionsMapping = {
    0: [0],
    1: [1],
    2: [2],
    3: [3],
    4: [4],
    5: [5, 6],
  };
  return function (event) {
    let value = +param1.value;
    let options = param2.options;
    let optionsLength = options.length;
    let availableOptions = optionsMapping[value];
    
    for (let i = 0; i < optionsLength; i++) {
        if(availableOptions.indexOf(+options[i].value) !== -1){
            options[i].disabled = false;
          if(+options[i].value === value || availableOptions.length === 1){
            options[i].selected = true;
          }        
        if(availableOptions[i] === 0){
            options[0].disabled = true;
        }
        } else {         
          options[i].disabled = true;
        }
    }
  };
}

let first = document.querySelector('#city');
let second = document.querySelector('#guild');

first.addEventListener('change', citySelect(first, second));

// guild
function guildSelect(param1, param2) {
  console.log(param1 + param2);
  const optionsMapping = {
    1: [1],
    2: [2],
    3: [3],
    4: [4],
    5: [5],
    6: [5]
  };
  return function (event) {
    let value = +param1.value;
    let options = param2.options;
    let optionsLength = options.length;
    let availableOptions = optionsMapping[value];
    
    for (let i = 0; i < optionsLength; i++) {
        if(availableOptions.indexOf(+options[i].value) !== -1){
            options[i].disabled = false;
          if(+options[i].value === value || availableOptions.length === 1){
            options[i].selected = true;
          }
        } else {         
          options[i].disabled = true;
        }
    }
  };
}

let first1 = document.querySelector('#city');
let second1 = document.querySelector('#guild');

second1.addEventListener('change', guildSelect(second1, first1));

// employee
function employeeSelect(param1, param2) {
  console.log(param1, param2)
  const optionsMapping = {
    0: [0],
    1: [1],
    2: [2],
    3: [3],
    4: [4],
    5: [5, 6],
  };
  return function (event) {
    let value = +param1.value;
    let options = param2.options;
    let optionsLength = options.length;
    let availableOptions = optionsMapping[value];
    
    for (let i = 0; i < optionsLength; i++) {
        if(availableOptions.indexOf(+options[i].value) !== -1){
            options[i].disabled = false;
          if(+options[i].value === value || availableOptions.length === 1){
            options[i].selected = true;
          }
          
        if(availableOptions[i] === 0){
            options[0].disabled = true;
        }
        } else {         
          options[i].disabled = true;
        }
    }
  };
}

let first3 = document.querySelector('#city');
let second3 = document.querySelector('#employee');

first.addEventListener('change', employeeSelect(first3, second3));

