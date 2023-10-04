$(function() {
    $('ul.tab > li > a').click(function(e) {
        e.preventDefault();
        var activeTab = $(this).parent().attr('data-tab');
        history.pushState(null, null, '#' + activeTab);
        hashChangeHandler();
    });
});

window.addEventListener("hashchange", hashChangeHandler);
window.addEventListener('load', hashChangeHandler);

function hashChangeHandler() {
    if (location.hash) {
        var activeTab = location.hash.replace('#', '');
        $('ul.tab > li').removeClass('current');
        $('.tabcontent').removeClass('current');
        $('ul.tab > li[data-tab=' + activeTab + ']').addClass('current');
        $('#' + activeTab).addClass('current');
    } 
}

$(function(){
    $('.award_img_dtlBtn').click(function(){
        $('.popup').fadeIn();
    });
    $('.close_btn').click(function(){
        $('.popup').fadeOut();
    });
});