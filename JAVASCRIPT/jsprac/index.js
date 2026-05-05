function pagbati(pangalan){
    document.getElementById('output').textContent = "hello " + pangalan;
}

document.getElementById('btn').addEventListener('click', function(){
    let result = document.getElementById('name').value;
    pagbati(result);

    if (result === "") {
        document.getElementById('output').textContent = "Mag type ka muna!";
    } else {
        pagbati(result);
    }

})
