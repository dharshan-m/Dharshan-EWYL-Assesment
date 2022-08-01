// document.querySelector('#root');

let getData = ()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then((data) =>{
        data.json()
        .then((display) =>{
            // console.log(display.results);
            localStorage.setItem('localdata', JSON.stringify(display.results));
            printDetails();
        })
    })
}

let printDetails =() =>{
    let info = JSON.parse(localStorage.getItem('localdata'));
    let user = info.map((result) =>{
        return `<div class="container">
        <img src="result.picture.large">
        name : ${result.name.title} ${result.name.first}
        email : ${result.email}
        gender : ${result.gender}

        </div>`
    })
    document.querySelector('.container').innerHTML = user;
}