import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import your images
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/about.jpeg';
import image5 from '../../assets/images/about2.jpeg';
import image6 from '../../assets/images/image4.jpeg';
import image7 from '../../assets/images/random.jpeg';

const ZymBoxingGallery = () => {
    const boxingContent = [
        {img: image1, title: 'Boxing Training Sessions', cat1: 'Training', cat2: 'Fitness'},
        {img: image2, title: 'Competition Preparation', cat1: 'Competition', cat2: 'Training'},
        {img: image3, title: 'Boxing Equipment Showcase', cat1: 'Equipment', cat2: 'Gear'},
        {img: image4, title: 'Professional Boxing Coaches', cat1: 'Coaching', cat2: 'Training'},
        {img: image5, title: 'Boxing Gym Facilities', cat1: 'Facility', cat2: 'Gym'},
        {img: image6, title: 'Boxing Championship Events', cat1: 'Event', cat2: 'Competition'},
        {img: image7, title: 'Boxing Sparring Sessions', cat1: 'Sparring', cat2: 'Training'},
    ]; 

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const goToSlide = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    return (
        <section className="zym-boxing-gallery" style={styles.section}>
            <div className="container" style={styles.container}>
                <div className="row align-items-center" style={styles.row}>
                    <div className="col-lg-12" style={styles.col12}>
                        <div className="section-title mb-60 text-center" style={styles.sectionTitle}>
                            <span className="sub-title" >
                                Our Boxing Gallery
                            </span>
                            <h2 style={styles.heading}>
                                Experience The Power of Boxing Training
                            </h2>
                            <p style={styles.description}>
                                See our state-of-the-art facilities, professional trainers, and dedicated athletes in action.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="gallery-container" style={styles.galleryContainer}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 5,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            type: 'bullets',
                        }}
                        navigation={true}
                        onSwiper={setSwiperInstance}
                        onSlideChange={handleSlideChange}
                        style={styles.swiper}
                    >
                        {boxingContent.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="gallery-slide" style={styles.slide}>
                                    <div className="image-container" style={styles.imageContainer}>
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            style={styles.image}
                                        />
                                        <div className="image-overlay" style={styles.imageOverlay}>
                                            <div className="overlay-content" style={styles.overlayContent}>
                                                <h3 style={styles.imageTitle}>{item.title}</h3>
                                                <div className="categories" style={styles.categories}>
                                                    <span style={styles.category}>{item.cat1}</span>
                                                    <span style={styles.category}>{item.cat2}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Custom pagination with thumbnails */}
                    <div className="custom-pagination" style={styles.customPagination}>
                        {boxingContent.map((item, index) => (
                            <div 
                                key={index} 
                                className={`pagination-thumb ${index === activeIndex ? 'active' : ''}`}
                                style={{
                                    ...styles.paginationThumb,
                                    ...(index === activeIndex ? styles.paginationThumbActive : {})
                                }}
                                onClick={() => goToSlide(index)}
                            >
                                <img 
                                    src={item.img} 
                                    alt={`Thumbnail ${index + 1}`} 
                                    style={styles.thumbImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style>
                {`
                    .swiper-pagination {
                        position: relative;
                        margin-top: 30px;
                        display: flex;
                        justify-content: center;
                        gap: 8px;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: #ccc;
                        opacity: 1;
                        transition: all 0.3s ease;
                    }
                    
                    .swiper-pagination-bullet-active {
                        background: #9CFE4F;
                        width: 30px;
                        border-radius: 10px;
                    }
                    
                    .swiper-button-next, 
                    .swiper-button-prev {
                        color: #9CFE4F;
                        background: rgba(0, 0, 0, 0.5);
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                    }
                    
                    .swiper-button-next:after, 
                    .swiper-button-prev:after {
                        font-size: 20px;
                        font-weight: bold;
                    }
                    
                    .swiper-button-next:hover, 
                    .swiper-button-prev:hover {
                        background: #9CFE4F;
                        color: #000;
                    }
                    
                    @media (max-width: 768px) {
                        .swiper-button-next, 
                        .swiper-button-prev {
                            display: none;
                        }
                    }
                `}
            </style>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'relative',
        padding: '100px 0 80px 0',
        fontFamily: "'Inter', sans-serif",
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 -15px',
    },
    col12: {
        width: '100%',
        padding: '0 15px',
    },
    sectionTitle: {
        marginBottom: '60px',
        textAlign: 'center',
    },
    subTitle: {
        display: 'inline-block',
        color: '#9CFE4F',
        fontWeight: '600',
        marginBottom: '15px',
        fontSize: '18px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    heading: {
        fontSize: '42px',
        fontWeight: '700',
        marginBottom: '20px',
        color: '#fff',
        lineHeight: '1.2',
    },
    description: {
        fontSize: '18px',
        color: 'lightgray',
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto',
    },
    galleryContainer: {
        position: 'relative',
    },
    swiper: {
        padding: '20px 0',
    },
    slide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '1400px',
        borderRadius: '12px',
        overflow: 'hidden',
     
    },
    image: {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '30px',
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },
    overlayContent: {
        transform: 'translateY(20px)',
        transition: 'transform 0.3s ease',
    },
    imageTitle: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: '700',
        margin: '0 0 15px 0',
    },
    categories: {
        display: 'flex',
        gap: '10px',
    },
    category: {
        display: 'inline-block',
        background: '#9CFE4F',
        color: '#000',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600',
    },
    customPagination: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginTop: '40px',
        flexWrap: 'wrap',
    },
    paginationThumb: {
        width: '80px',
        height: '60px',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: 0.6,
        transition: 'all 0.3s ease',
        border: '2px solid transparent',
    },
    paginationThumbActive: {
        opacity: 1,
        border: '2px solid #9CFE4F',
        transform: 'scale(1.1)',
    },
    thumbImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

export default ZymBoxingGallery;