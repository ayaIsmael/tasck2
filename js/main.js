
window.addEventListener('load', () => {

    let readmoreText = document.getElementById('readmore-text');
    let readmoreBtn = document.getElementById('readmore-btn');
    let showlessBtn = document.getElementById('showless-btn');

    readmoreBtn.addEventListener('click', () => {
        readmoreText.style.maxHeight = "25rem";
        readmoreBtn.style.display = "none";
    });

    showlessBtn.addEventListener('click', () => {
        readmoreText.style.maxHeight = "0";
        readmoreBtn.style.display = "block";
    });
    
    let moreDonationCards = document.getElementById('hidden-isotope-items');
    let moreDonationBtn = document.getElementById('more-donation');
    let lessDonationBtn = document.getElementById('less-donation');

    moreDonationBtn.addEventListener('click', () => {
        moreDonationCards.style.display = "flex";
        lessDonationBtn.style.display = "block";
        moreDonationBtn.style.display = "none";
    });

    lessDonationBtn.addEventListener('click', () => {
        moreDonationCards.style.display = "none";
        lessDonationBtn.style.display = "none";
        moreDonationBtn.style.display = "block";
    });
    

});


$('.isotope-items').isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows'    
});
$('.donations-filters li').click(function(){
    $('.donations-filters li').removeClass('active');
    $(this).addClass('active');
    
    var selector= $(this).attr('data-filter');
    $('.isotope-items').isotope({
        filter: selector,
    });
    return false;    
});

// $('.isotope-items.two').isotope({
//     itemSelector: '.isotope-item',
//     layoutMode: 'fitRows'    
// });
// $('.donations-filters li').click(function(){
//     $('.donations-filters li').removeClass('active');
//     $(this).addClass('active');
    
//     var selector= $(this).attr('data-filter');
//     $('.isotope-items.two').isotope({
//         filter: selector,
//     });
//     return false;    
// });










