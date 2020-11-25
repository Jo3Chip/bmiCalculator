function calcBMI() {
  let userName = document.getElementById('fullName').value;
  let userWeight = document.getElementById('weight').value;
  let userHeight = document.getElementById('height').value;
  let bmi = (userWeight / userHeight ** 2).toFixed(2);
  document.getElementById('results').innerHTML = (`${userName} has a BMI of ${bmi}`);
}


document.getElementById('results-button').addEventListener('click', function(){
  calcBMI();
});

document.getElementById('reset-button').addEventListener('click', function() {
  document.getElementById('fullName').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  document.getElementById('results').innerHTML = '';
})