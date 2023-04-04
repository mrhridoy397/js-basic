let person =[
    {firstName: "siam",lastName: "Hossain"},
    {firstName: "mahmudur",lastName: "rahman"},
    {firstName: "modon",lastName: "da"},
];


function createperson (Newperson){
    setTimeout(() => {
        person.push(Newperson);
    }, 2000);
}

function getperson(){
    let output = '<ul>';
    person.forEach(function(data){
        output += `<li> ${data.firstName} ${data.lastName} </li>`
    } );
    output += '</ul>';
    document.querySelector('#output').innerHTML = output;

}
createperson({firstName: "sajjad",lastName:"hossain"})

getperson();