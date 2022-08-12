const para = document.getElementById('para');
const content = document.getElementById('content');
const btn = document.getElementById('btn');
toggle = ()=>{
    content.classList.toggle('active');
    if (content.classList.contains('active')) {
        btn.value = 'read less...';
}
else{
    btn.value = 'read more...';
}
    
}
btn.addEventListener('click', toggle);