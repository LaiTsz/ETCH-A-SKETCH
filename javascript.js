const container=document.querySelector('.container')
function addingDiv(){
    for(let i=0;i<16;i++)
    {
        const square=document.createElement('div');
        container.appendChild(square);
    }
}
addingDiv();