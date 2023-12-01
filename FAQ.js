const accordances=document.querySelectorAll('.accordance');

// console.log(accordances);

accordances.forEach(accordance =>{
 const icon =  accordance.querySelector(".icon");
 const answer = accordance.querySelector(".answer");

 accordance.addEventListener('click',()=>{
    //  icon.classList.toggle('active');
    // answer.classList.toggle('active');

    if(icon.classList.contains('active')){
       icon.classList.remove('active');
       answer.style.maxHeight=null;
    }
    else{
        icon.classList.add('active');
        answer.style.maxHeight=answer.scrollHeight + 'px';
    }
 })
})

