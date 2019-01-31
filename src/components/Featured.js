import React from 'react';
import Slider from 'react-slick';

export default function Featured(props) {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveWidth: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    }
    
    const caption = {
        color: '#789ae9',
        position: 'absolute',
        right: '100px',
        padding: '20px',
        textAlign: 'right',
        width: '320px',
        textTransform: 'uppercase',
        fontSize: '50px',
        textShadow: '2px 2px #000'
    }

        
    
     

    const getSlides = ({ slides }) => {
        if (slides) {
            
            return (
                <Slider {...settings} >
                    {slides.map((slide) => {
                        const slick2 = { 
                            background: `url(/images/covers/${slide.cover})no-repeat`,
                            height: '95vh',
                            width: '100vw',
                            backgroundPosition: 'center',
                            position: 'relative',
                            fontFamily: 'Fjalla One', 
                            }
                        return (
                            <div key={slide.id} >
                                <div style={slick2} >
                                    <div style={caption}>
                                        <h4>{slide.topic}</h4>
                                        <p>{slide.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        
                    })}
                </Slider>
            )
        }
    }

    return (
        <div >
            {getSlides(props)}
        </div>
    )
}
