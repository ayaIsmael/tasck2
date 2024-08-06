
window.addEventListener('load', () => {

    let readmoreText = document.getElementById('readmore-text');
    let readmoreBtn = document.getElementById('readmore-btn');
    let showlessBtn = document.getElementById('showless-btn');

    readmoreBtn.addEventListener('click', () => {
        readmoreText.style.maxHeight = "20rem";
        readmoreBtn.style.display = "none";
    });

    showlessBtn.addEventListener('click', () => {
        readmoreText.style.maxHeight = "0";
        readmoreBtn.style.display = "block";
    });

});


// $('.isotope-items').isotope({
//     itemSelector: '.isotope-item',
//     layoutMode: 'fitRows'    
// });

// $('.donations-filters li').click(function(){
//     $('.donations-filters li').removeClass('active');
//     $(this).addClass('active');
    
//     var selector= $(this).attr('data-filter');
//     $('.isotope-items').isotope({
//         filter: selector,
//     });
//     return false;    
// });









