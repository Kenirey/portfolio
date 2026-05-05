let username;

    document.getElementById('btn').onclick = function(){
    username = document.getElementById('username').value;
    document.getElementById('myH1').textContent = 'hello ' + (username);
}