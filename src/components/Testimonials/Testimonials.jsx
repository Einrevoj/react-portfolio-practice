import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";

// images
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id dolor doloremque explicabo repellat dolorum mollitia voluptate aliquam doloribus quo architecto nisi esse tenetur porro, magni aut consequatur velit possimus soluta!",
    },

    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id dolor doloremque explicabo repellat dolorum mollitia voluptate aliquam doloribus quo architecto nisi esse tenetur porro, magni aut consequatur velit possimus soluta!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id dolor doloremque explicabo repellat dolorum mollitia voluptate aliquam doloribus quo architecto nisi esse tenetur porro, magni aut consequatur velit possimus soluta!",
    },

    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id dolor doloremque explicabo repellat dolorum mollitia voluptate aliquam doloribus quo architecto nisi esse tenetur porro, magni aut consequatur velit possimus soluta!",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blurr t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blurr t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
