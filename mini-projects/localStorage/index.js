// console.log(window.localStorage);
localStorage.setItem("theme", 'dark');
localStorage.setItem("name",'shivam');

localStorage.removeItem("name");
const theme = localStorage.getItem("theme");
const name =  localStorage.getItem("name");
console.log(theme);
console.log(name);

localStorage.clear();

// how to store objects

const userSettings = {
  theme: 'dark',
  font: 'light',
  score: 100
}
//localStorage.setItem('userSettings', newUserSettings);  // value will be object object so it is in object form so convert in string as local storage demands only string

const newUserSettings = JSON.stringify(userSettings);   // converted to json string from object format.
console.log(typeof newUserSettings);

localStorage.setItem('userSettings', 'newUserSettings');  

const uSettings = JSON.parse(localStorage.getItem('newUserSettings'));
console.log(uSettings);