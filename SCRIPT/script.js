// document.querySelector('#root');

let getData = ()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then((data) =>{
        data.json()
        .then((display) =>{
            // console.log(display);
            localStorage.setItem('localdata',JSON.stringify(display));
        })
    })
}