import React from "react";
import { useState, useEffect } from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/Avatar1.jpg";
import Avatar2 from "../../assets/Avatar2.jpg";
import Avatar3 from "../../assets/Avatar3.jpg";
import Avatar4 from "../../assets/Avatar4.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = [
  {
    id: 1,
    avatar: Avatar1,
    name: "Ishmael Issa",
    say: "My child has flourished since starting at Al-Hikma Islamic Montessori School. The teachers are dedicated and caring and the Montessori approach has helped my child become more independent and confident in their abilities.",
  },
  {
    id: 2,
    avatar: Avatar2,
    name: "Jamila Musa",
    say: "Al-Hikma Islamic Montessori School has been a wonderful experience for my family. The school's commitment to inclusivity and diversity has created a welcoming environment for my child, and the Montessori approach has helped them develop a love of learning that will last a lifetime.",
  },
  {
    id: 3,
    avatar: Avatar3,
    name: "Abdul Bassit",
    say: "I am grateful for the education that I received at Al-Hikma Islamic Montessori School. The school's emphasis on Islamic values has helped me become a more compassionate and responsible member of society, and the Montessori approach has prepared me for success in my academic and professional pursuits.",
  },
  {
    id: 4,
    avatar: Avatar4,
    name: "Samira Abdullah",
    say: "Al-Hikma Islamic Montessori School has been a wonderful experience for my family. The school's commitment to inclusivity and diversity has created a welcoming environment for my child, and the Montessori approach has helped them develop a love of learning that will last a lifetime.",
  },
];
const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    // Check the screen width and adjust slidesToShow accordingly
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1); // Show one slide at a time for screens <= 480px wide
      } else {
        setSlidesToShow(2); // Show two slides at a time for larger screens
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="cards_bg review">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Slider {...settings} className=" container testimonial__container">
        {Clients.map((client) => (
          <div key={client.id} className="testimonial">
            <div className="client_avatar">
              <img src={client.avatar} alt={client.name} />
            </div>

            <h3 className="client_name">{client.name}</h3>
            <small className="client_review">{client.say}</small>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
