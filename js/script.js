/**
 * Created by adrian on 10/17/15.
 */



$(document).ready(function(){


    //for menu
    var firstMenuElement = $("li.firstLevel");
    var dropdown = $("ul.secondLevel");


    firstMenuElement.eq(0).on("mouseenter", function(event){
        dropdown.css("display", "block");
    });

    firstMenuElement.on("mouseleave", function(event){
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

    //for form

    var rodzaj = $("#rodzaj");
    var kolor = $("#kolor");
    var material = $("#material");


    var price = $("#price");
    var chair = $("#chair");
    var color = $("#color");
    var colorPrice = $("#colorPrice");
    var fabric = $("#fabric");
    var fabricPrice = $("#fabricPrice");
    var transportOption = $("input[type='checkbox']");
    var transport = $("#transport");
    var transportPrice = $("#transportPrice");

    console.log(transportOption)


    rodzaj.on("change", function(event) {
        var rodzajValue = $(this).val();
        var rodzajName = $(this).find("option:selected").text();
        chair.html(rodzajName);
        price.html(rodzajValue);
    });

    kolor.on("change", function(event) {
        var colorValue = $(this).val();
        var colorName = $(this).find("option:selected").text();
        color.html(colorName);
        colorPrice.html(colorValue);
    });

    material.on("change", function(event) {
        var fabricValue = $(this).val();
        var fabricName = $(this).find("option:selected").text();
        fabric.html(fabricName);
        fabricPrice.html(fabricValue);
    });

    transportOption.on("change", function(event){
            var transportValue = $(this).val();
        if($(this).checked) {
            transportPrice.html(transportValue);
        }
    });








});