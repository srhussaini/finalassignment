function addWeight(){
  var weight = document.forms.AddWeight.weight.value;
  var date = document.forms.AddWeight.date.value;
  localStorage.setItem(weight, date);
  ShowAll();
}
function ShowAll(){
  event.preventDefault();
  if (CheckBrowser()){
    var key = "";
    var list = "";
    var i = 0;
    for (i=0; i<=localStorage.length - 1; i++){
      key = localStorage.key(i);
      list += "<tr><td>" + key + "</td>\n<td>"+ localStorage.getItem(key) + "</td></tr>\n";
    }
    document.getElementById('history').innerHTML = list;
  }else{
    alert("Cannot store weight. Your browser does not support local storage")
  }
}
//button for mood page
const btn = document.querySelector('#sub-btn');
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          var checkboxes = document.querySelectorAll('input[name="mood"]:checked');
            var values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            document.getElementById("sh-mood").innerHTML = values;
        }); 
        
 //button for bmi page       
function addBmi(){
  var wgt = document.getElementById('weight').value;
  var hgt = document.getElementById('height').value;

  if (hgt == '' || wgt == ''){
    alert('Please fill out the input fields');
    return;
  }

  var BMI = (wgt * 703 / (hgt * hgt));
  BMI = BMI.toFixed(1);

  document.getElementById('bmi-result').innerHTML = BMI;
  var inHgt = document.getElementById('input-height');
  inHgt.textContent += hgt;
  var inWgt = document.getElementById('input-weight');
  inWgt.textContent += wgt;  
}
//add goal weight
function addGoalWeight(){
  event.preventDefault();
  var gWgt = document.getElementById('g-weight').value;
  if (gWgt == ''){
    alert('Please fill out the input fields');
    return;
  }
  document.getElementById('sh-goalweight').textContent += gWgt;  
  }

  //add age
function addAge(){
    event.preventDefault();
    var age = document.getElementById('add-age').value;
    if (age == ''){
      alert('Please fill out the input fields');
      return;
    }
    document.getElementById('sh-age').textContent += age;  
    }
//select gender
function selGender(){
  var checkboxes = document.querySelectorAll('input[name="gender"]:checked');
  var values = [];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
  document.getElementById("sh-gender").textContent += values;
}     

function CheckBrowser(){
  if ('localStorage' in window && window ['localStorage'] !==null) {
    console.log ('local storage works');
    return true;
  }else {
    return false;
  }
}
