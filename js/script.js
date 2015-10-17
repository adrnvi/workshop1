/**
 * Created by adrian on 10/17/15.
 */



$(document).ready(function(){


    //for menu
    var firstMenuElement = $(".firstLevel li");
    var dropdown = $("ul.secondLevel");
    var firstLevel = $("ul.firstLevel");

    firstMenuElement.eq(0).on("mouseenter", function(event){
        dropdown.css("display", "block");
    });

    firstLevel.on("mouseleave", function(event){
        dropdown.css("display", "none");
    });

    //for chair images

    var firstChair = $("div.grid1.paragraphsImages");
    var secondChair = $("div.grid2.paragraphsImages");
    var descriptionBlockToHide = $("div.headerBackground");

    firstChair.on("mouseenter", function(event){
        descriptionBlockToHide.first().hide();
    });

    firstChair.on("mouseleave", function(event){
        descriptionBlockToHide.first().show();
    });

    secondChair.on("mouseenter", function(event){
        descriptionBlockToHide.eq(1).hide();
    });

    secondChair.on("mouseleave", function(event){
        descriptionBlockToHide.eq(1).show();
    });

    //for slider

    var images = $(".slider li");
    var visibleImage = 0;
    var left = $("button.leftArrow");
    var right = $("button.rightArrow");

    images.eq(visibleImage).show();

    right.on("click", function(event){
        images.eq(visibleImage).hide(0);
        visibleImage++;
        if(visibleImage >= images.length) {
            visibleImage = 0;
        }
        images.eq(visibleImage).show(0);
    });
    left.on("click", function(event){
        images.eq(visibleImage).hide(0);
        visibleImage--;
        if(visibleImage < 0) {
            visibleImage = images.length-1;
        }
        images.eq(visibleImage).show(0);
    });







});