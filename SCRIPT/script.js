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

printDetails = () => {
    let info = JSON.parse(localStorage.getItem('localdata'))
    let user = info.map((result) =>{
        return ` 
        <div class="content-container">
        <img src=${result.picture.large} class="image"><br>
            <div class="main">
                <p class="name">name : ${result.name.title} ${result.name.first}</p><br>
                <p class="email">email : ${result.email}</p><br>
                <p class="gender">gender : ${result.gender}</p><br>
            </div>
        </div>`
    })
    document.querySelector('.container').innerHTML = user;
}