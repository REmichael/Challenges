function check() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
const submit = document.getElementById('submit')
const empty =""
//const searchForm = document.querySelector('form')
//username.addEventListener('submit');
//password.addEventListener('submit');
//confirmPassword.addEventListener('submit');
//searchForm.addEventListener('submit', checkResults);

//function checkResults(e){
//e.preventDefault();

if (username === empty || password === empty || confirmPassword === empty) {
  alert("please fill in all your text fields")
}
if (password !== confirmPassword) {
  alert("Your passwords MUST match")
} 
};