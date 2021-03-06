$('.gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

function playVideo(id) {
    document.getElementById('showreel').src = id;
}