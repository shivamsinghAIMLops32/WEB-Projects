const themeSelector = document.querySelector("#themeSelector");

const theme = localStorage.getItem('theme');
themeChanger(theme);

themeSelector.addEventListener("change", (e) =>{
  localStorage.setItem('theme',e.target.value);
  console.log(e.target.value);
  themeChanger(e.target.value);
});

function themeChanger(theme){
  if(theme === 'dark'){
    document.body.style.backgroundColor = '#222';
  }else if(theme === 'light'){
    document.body.style.backgroundColor = '#fff';
  }else{
    document.body.style.backgroundColor = 'e5e5e5';
  }
};

window.addEventListener('storage',(e)=>{
  if (e.key === 'theme'){
    themeChanger(e.newValue);
    themeSelector.value = e.newValue;
  }
});