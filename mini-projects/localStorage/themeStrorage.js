const themeSelector = document.querySelector("#themeSelector");

// in case of reloading or window close we will fetch the existing value of key theme in local storage and pass in function 
const theme = localStorage.getItem('theme');
themeChanger(theme);


// on themeSelector doing an change event and while changing the setItem getting the value inside select option tags. 
themeSelector.addEventListener("change", (e) =>{
  localStorage.setItem('theme',e.target.value);
  //console.log(e.target.value);

  // function for passing theme
  themeChanger(e.target.value);
});

// basic theme changer function taking theme as an input and doing work
function themeChanger(theme){
  if(theme === 'dark'){
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
  }else if(theme === 'light'){
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#222';
  }else{
    document.body.style.backgroundColor = 'e5e5e5';
    document.body.style.color = '#222';
  }
};


// window object performing a storage event manipulation. whenver key is of theme  then innate the function and chnage the color and value in select tag
window.addEventListener('storage',(e)=>{
  if (e.key === 'theme'){
    themeChanger(e.newValue);
    themeSelector.value = e.newValue;
  }
});