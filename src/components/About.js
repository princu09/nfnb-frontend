import { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";

const About = (props) => {
  useEffect(() => {
    const sr = scrollreveal({
      // origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(".about-img", {
      origin: "left",
    });
    sr.reveal(".about-text", {
      origin: "right",
    });
    sr.reveal(".about-sm-img", {
      origin: "bottom",
    });
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 about-img">
            <img src="/img/about.jpeg" width={600} alt="" />
          </div>
          <div className="col-md-6">
            <p className="h3 fw-bold">About Page</p>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolore molestiae consequuntur blanditiis fuga minus quod hic
              quidem voluptas adipisci, repellat perspiciatis sapiente soluta
              cupiditate impedit ad id corporis quisquam iste veritatis vitae
              harum expedita enim ut. Amet aspernatur ducimus ipsam saepe
              voluptas. Enim corporis id libero, cumque eaque sequi totam
              ducimus maiores laborum, culpa excepturi deserunt quis tenetur
              assumenda veritatis quos magnam rem magni, eveniet odit recusandae
              voluptatum accusantium voluptate? Ducimus dignissimos qui nemo
              atque deleniti alias nulla nobis cumque aut accusamus voluptates
              aliquam quis architecto rem, a sequi nesciunt voluptatibus
              quisquam corrupti exercitationem distinctio obcaecati aspernatur
              quos! Perspiciatis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quam eius voluptatum doloremque quas ab libero,
              ut non? Ullam, aliquid deleniti?{" "}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/1.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/2.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/3.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/4.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/5.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/6.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/7.jpg" width={320} alt="" />
          </div>
          <div className="col-md-3 about-sm-img mb-1">
            <img src="/img/8.jpg" width={320} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
