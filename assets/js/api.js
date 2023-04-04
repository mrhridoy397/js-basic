let btn = document.querySelector('#Getdata');
let output = document.querySelector('#output');

btn.addEventListener('click', getJoks);

let getJoks = e => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '',true);
        xhr.onload = function(){
            if(this.status === 200){
                let data = JSON.parse(this.responseText)
                console.log(data);
                // let joks 
            }
        }
}