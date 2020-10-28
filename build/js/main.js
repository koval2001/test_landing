function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
   
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

const links = document.querySelectorAll('a[href^="#"]');
 
for (let link of links) {
  link.addEventListener("click", clickHandler);
}
 
// Cookies

function getCookie(name) { 
    let nameEQ = name + "="; 
    let ca = document.cookie.split(';'); 
    for(let i = 0 ;i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return 0; 
}

function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// creating table with API`s data

const createTable = data => {
    const table = document.getElementsByTagName('table')[0];
    for (row of data){
        table.insertRow().innerHTML = 
        `<td> ${row.id} </td>
        <td> ${row.name} </td>
        <td> ${row.symbol} </td>
        <td> ${row.priceUsd} </td>`;
    }
};

// Api call ES6 syntax

var apiResponse = null;

fetch('https://api.coincap.io/v2/assets/?limit=10')
  .then(response => response.json())
  .then(data => apiResponse = data.data)
  .then(() => createTable(apiResponse))
  .catch(error => {
    console.error('Error:', error);
  });


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const emailForm = document.getElementById('formEmail');
const submit = document.getElementById('submit');


submit.addEventListener('click', e => {
    e.preventDefault();

    let emailAddress = emailForm.querySelector('input[name="email"]').value;

    if (emailAddress.length > 0){
        if ( validateEmail(emailAddress) ){
            setCookie('E-mail', emailAddress, 30);
            alert("Cookie 'E-mail' saved!");
        }else {
            alert("Data is not valid!");
        }
    }else {
        alert("Empty field!");
    }
    
});
//# sourceMappingURL=main.js.map
