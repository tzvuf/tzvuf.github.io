
$(function () {

    jQuery(".menuNav").slide({
        type: "menu",
        titCell: ".nLi",
        targetCell: ".sub",
        effect: "slideDown",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true
    });

    jQuery(".fullSlide").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true,
        autoPage: true,
        delayTime: 3000
    });

    jQuery("#slideBox").slide({mainCell:".bd ul",autoPlay:true});
})
