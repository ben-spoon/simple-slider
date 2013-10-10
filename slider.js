/*
 * Simple Slider
 * (slider.js)
 * designed by Ben Spoon
 * http://www.benspon.com
 */
 
$.fn.slider = function() {
    var list = this.find('ul'),
    items = list.find('li')
    itemCount = items.length;
        
    if (itemCount > 1) {
        this.append('<div class="sliderPagination"></div>');
        $(this).append('<a href="#" class="control next">NEXT</a> <a href="#" class="control prev">PREV</a>');
    }
    for(var i=0;i<itemCount;i++) {
        this.find('.sliderPagination').append('<a class="sliderPagination-num" href="#">' + (i+1) + '</a>');
    }

    $(items[0]).show();
    this.find('.next').on('click', function() {
        var visible_item;
        $(items).each(function() {
            if ($(this).is(':visible')) {
                 visible_item = this;
            }
        });
        if ($(visible_item).next().is('li')){
            $(visible_item).hide('slide', {direction: 'left'}, 700).queue(function() {
                $(visible_item).next().closest('li').show('slide', {direction: 'right'}, 700);
            });
        }
        return false;           
    });
    this.find('.prev').on('click', function() {
        var visible_item;
        var previous_entry;
        $(items).each(function() {
            if ($(this).is(':visible')) {
                 visible_item = this;
                 previous_entry = $(visible_item).prev();
            }
        });
        
        if (previous_entry.is('li')){
            $(visible_item).hide('slide', {direction: 'right'}, 700, function () {
                $(this).stop();
            }).queue(function() {
                $(previous_entry).stop(true,true).show('slide', {direction: 'left'}, 700);
            });
        }
        return false;           
    });
    this.find('.sliderPagination-num').on('click', function() {
        var page_num = $(this).text(),
            requested_item = $(items[page_num-1]),
            cur_pageNum,
            visible_item;
        $(items).each(function() {
            if ($(this).is(':visible')) {
                 visible_item = this;
            }
        });
        if (requested_item[0] !== visible_item) {
            if ((requested_item.index() + 1) > page_num) {
                $(visible_item).hide('slide', {direction: 'left'}, 700).queue(function() {
                $(requested_item).show('slide', {direction: 'right'}, 700);
            });
            } else {
               $(visible_item).hide('slide', {direction: 'right'}, 700, function () {
                   $(this).stop();
               }).queue(function() {
                   $(requested_item).stop(true,true).show('slide', {direction: 'left'}, 700);
               });
            }
            
        }
        return false;
    });


}

$.fn.toSliderPage = function(page) {
    $("html, body").animate({ scrollTop: $('#blog').offset().top }, 1000);
    var list = this.find('ul'),
    items = list.find('li')
    itemCount = items.length,
    requested_item = $(items[page-1]);
    var visible_item;
        $(items).each(function() {
            if ($(this).is(':visible')) {
                 visible_item = this;
            }
        });
    if ((requested_item.index() + 1) > page) {
                $(visible_item).hide('slide', {direction: 'left'}, 700).queue(function() {
                $(requested_item).show('slide', {direction: 'right'}, 700);
            });
            } else {
               $(visible_item).hide('slide', {direction: 'right'}, 700, function () {
                   $(this).stop();
               }).queue(function() {
                   $(requested_item).stop(true,true).show('slide', {direction: 'left'}, 700);
               });
            }

}