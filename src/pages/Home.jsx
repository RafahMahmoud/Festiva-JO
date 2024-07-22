import React, { useState,useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "./src/assets/img/slide-1.png",
      title: "Welcome to the Jordan Culture Festival",
      description:
        "Experience the vibrant culture and traditions of Jordan through our exciting festival events.",
      btn: "Learn More",
    },
    {
      id: 2,
      image: "./src/assets/img/image-3.png",
      title: "Get Your Tickets Now",
      description:
        "Don’t miss out on our exclusive performances, workshops, and more. Buy your tickets today!",
      btn: "Buy Tickets",
    },
    {
      id: 3,
      image: "./src/assets/img/image-2.png",
      title: "Join Us for an Unforgettable Experience",
      description:
        "Celebrate with us and immerse yourself in the rich heritage of Jordan.",
      btn: "Explore Events",
    },
  ];

  const festivalData = {
    festivals: [
      {
        id: 1,
        name: "Jordanian Cultural Festival",
        date: "August 12, 2024",
        location: "Amman",
        description:
          "Experience the rich cultural heritage of Jordan with traditional music, dance, and food.",
        link: "/festivals/jordanian-cultural-festival",
      },
      {
        id: 2,
        name: "Petra Arts Festival",
        date: "September 5, 2024",
        location: "Petra",
        description:
          "Join us for a celebration of arts and crafts amidst the ancient ruins of Petra.",
        link: "/festivals/petra-arts-festival",
      },
      {
        id: 3,
        name: "Jerash Music Fest",
        date: "October 10, 2024",
        location: "Jerash",
        description:
          "Enjoy a weekend of music performances in the historical city of Jerash.",
        link: "/festivals/jerash-music-fest",
      },
    ],
    categories: [
      {
        id: 1,
        name: "Culture",
        description:
          "Explore the rich tapestry of Jordanian culture through a series of events celebrating traditional music, dance, and crafts.",
        link: "/categories/music",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Jerash_Festival_2018_15.jpg/1200px-Jerash_Festival_2018_15.jpg",
      },
      {
        id: 2,
        name: "Food",
        description:
          "Discover food festivals showcasing Jordanian and international cuisines.",
        link: "/categories/food",
        imageUrl: "https://www.fvw.de/news/media/24/Jordanien-As-Salt-238069.jpeg",
      },
      {
        id: 3,
        name: "Sport",
        description:
          "Immerse yourself in art festivals with exhibitions, workshops, and live performances.",
        link: "/categories/art",
        imageUrl: "https://cdn.getyourguide.com/img/tour/1bf55693b34cfa95.png/145.jpg",
      },
    ],
    featuredFestivals: [
      {
        id: 1,
        name: "Jerash Festival of Culture and Arts",
        date: "August 20 - August 30, 2024",
        location: "Jerash",
        description:
          "One of the most famous festivals in Jordan, featuring a mix of music, dance, and cultural performances in the ancient city of Jerash.",
        imageUrl: "https://via.placeholder.com/600x400?text=Jerash+Festival",
        ticketLink: "/tickets/jerash-festival",
      },
      {
        id: 2,
        name: "Amman Summer Festival",
        date: "July 15 - August 5, 2024",
        location: "Amman",
        description:
          "A vibrant festival held in Amman showcasing local and international artists, street performances, and food stalls.",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Amman+Summer+Festival",
        ticketLink: "/tickets/amman-summer-festival",
      },
      {
        id: 3,
        name: "Petra International Music Festival",
        date: "September 10 - September 15, 2024",
        location: "Petra",
        description:
          "Enjoy classical and contemporary music performances in the stunning setting of Petra, one of the world’s wonders.",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Petra+Music+Festival",
        ticketLink: "/tickets/petra-music-festival",
      },
    ],
    specialOffers: [
      {
        id: 1,
        title: "Early-Bird Discount",
        description:
          "Get 20% off on tickets purchased before July 31, 2024. Limited time offer!",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Early-Bird+Discount",
        link: "/specials/early-bird-discount",
      },
      {
        id: 2,
        title: "Family Package",
        description:
          "Buy 4 tickets and get 1 free! Perfect for a family outing to the Amman Summer Festival.",
        imageUrl: "https://via.placeholder.com/600x400?text=Family+Package",
        link: "/specials/family-package",
      },
      {
        id: 3,
        title: "VIP Experience",
        description:
          "Upgrade to a VIP pass for exclusive access to backstage areas and premium seating.",
        imageUrl: "https://via.placeholder.com/600x400?text=VIP+Experience",
        link: "/specials/vip-experience",
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Omar Ahmed",
      role: "CEO at Company",
      image: "https://i.etsystatic.com/22964628/r/il/97184e/3402270775/il_570xN.3402270775_hnkz.jpg",
      testimonial:
        "This is an amazing service! It has greatly improved our productivity and efficiency. Highly recommend!",
    },
    {
      id: 2,
      name: "Rami AbdAlrahim",
      role: "Marketing Manager",
      image: "https://media.istockphoto.com/id/1390994387/photo/headshot-of-bearded-saudi-man-in-traditional-attire.jpg?s=612x612&w=0&k=20&c=4fp7roSaxOP1oSq3ighOiyyYbhwSoy1tDvyZRjDhUeo=",
      testimonial:
        "Incredible experience. The support team is fantastic, and the results speak for themselves.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Designer",
      image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
      testimonial:
        "A game-changer for our business. Easy to use and integrates seamlessly with our workflow.",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("offers");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setShowPopup(false);
        } else {
          setShowPopup(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  return (

    <div className=" mx-auto bg-page ">
        <Navbar/>
      <div className="slider-hero  mb-8 ">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative rounded-xl overflow-hidden" 
            style={{ backgroundImage: `url(${slide.imageUrl})`, height: '300px' }}
            
            >
            <div className="relative h-3/4 overflow-hidden">
  <img
    src={slide.image}
    alt={slide.title}
    className="w-full h-h1 object-cover"
  />
</div>
              <div className="  absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-6 ">
                <h2 className="mt-38 text-2xl sm:text-3xl font-bold mb-2 text-red1">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg mb-6 mt-2">{slide.description}</p>
                <button className=" mt-12 bg-red1 text-white py-4 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-red2 transition duration-300">
                  {slide.btn}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-lg mb-10   md:text-4xl font-bold text-red1 mb-6 md:mb-8">
                Why Festivals Matter
              </h2>
              <p className="text-2xl text-gray-600 mb-6">
                Festivals bring people together, celebrating the diverse and
                rich cultural heritage of Jordan. They offer a unique
                opportunity to experience the country's traditions, music,
                dance, and food. Join us in celebrating and preserving these
                traditions for future generations.
              </p>
              <Link
               to='/OurStory'
               className="bg-red1 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl hover:bg-red2 transition duration-300 transform hover:scale-105 hover:shadow-lg"                 >
              Learn More
                 </Link>

            </div>
            <div className="md:w-1/2 hover:transition">
      <img
        src="/src/assets/img/joflag.png"
        alt="Festival Image"
        className="rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
      />
    </div>
          </div>
        </div>
      </section>

      <section className=" py-12 my-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red1 mb-20">
            Explore Festivals by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.categories.map((category) => (
              <div
                key={category.id}
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm mb-4">{category.description}</p>
                 
                  <Link to="/Catalog">
                 <a
                    className="bg-red1 py-2 px-4 rounded-lg hover:bg-red2 transition duration-300"
                  >
                    View Category
                  </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 my-28">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red1 mb-12">
            Upcoming Festivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.festivals.map((festival) => (
              <div
                key={festival.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-page1">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{festival.date}</p>
                  <p className="text-gray-600 mb-4">{festival.location}</p>
                  <p className="text-gray-600 mb-4">{festival.description}</p>
                  <a
                    href={festival.link}
                    className="bg-red1 text-white py-2 px-4 rounded-lg hover:bg-red2 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="offers" className="">
  <div className="container mx-auto px-4">
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm w-full relative">
          <button 
            onClick={() => setShowPopup(false)} 
            className="absolute top-2 right-2 text-gray-600 hover:text-red1 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h3 className="text-xl font-bold mb-4 text-red1">Special Offer</h3>
          <p className="text-gray-700 mb-6">If you log in now, you will get a discount coupon!</p>
          <div className="flex justify-center">
            <a href="/login" className="bg-red1 text-white py-2 px-4 rounded-lg hover:bg-red2 transition duration-300">
              Go to Login
            </a>
          </div>
        </div>
      </div>
    )}
  </div>
</section>

<section className="py-12 bg-page mx-4 md:mx-8 lg:mx-20">
  <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-bold text-red1 mb-8 text-center">
      Testimonials
    </h2>
    <p className="text-center mb-8 max-w-3xl text-gray-700">
      Explore the experiences of those who attended our cultural festivals. Hear from attendees about how these events have enriched their understanding of diverse cultures and provided unforgettable experiences.
    </p>
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red1"
            />
            <h3 className="text-xl font-semibold mb-2 text-red1">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2 italic">
              {testimonial.role}
            </p>
            <p className="text-gray-700">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red1 text-white p-3 rounded-full shadow-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red-600"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red1 text-white p-3 rounded-full shadow-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red-600"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  </div>
</section>
<Footer />
    
    </div>
  );
}


