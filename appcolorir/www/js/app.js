function MudarFundo(){
    let cor = 'red'
    document.body.style.backgroundColor = cor;
}

document.querySelector('#btColorir').addEventListener('click', function(){
    MudarFundo();
})