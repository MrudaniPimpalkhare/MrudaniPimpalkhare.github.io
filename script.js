
let flag = 0;
function updateTheme() {
    const theme = (flag == 0) ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    if (flag == 0) {
        // document.getElementById("toggle").innerHTML = "light mode";
    }
    else {
        // document.getElementById("toggle").innerHTML = "dark mode";
    }
    flag = 1 - flag;
    return 0;
}

function removeLoader(){
  
    setTimeout(()=>{
       let loader = document.getElementById('loader');
    
    // hide the loader
    loader.style = 'display: none;';
    },
               1000);  
  }
