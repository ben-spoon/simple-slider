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
        var visible_item = getVisibleItem(items);
        $(visible_item).slide('next');
        return false;           
    });
    this.find('.prev').on('click', function() {
        var visible_item = getVisibleItem(items);
        $(visible_item).slide('prev');
        return false;           
    });
    this.find('.sliderPagination-num').on('click', function() {
        var page_num = $(this).text(),
            requested_item = $(items[page_num-1]),
            visible_item = getVisibleItem(items);

        if (requested_item[0] !== visible_item) {
            $(visible_item).slide(requested_item);            
        }
        return false;
    });


}