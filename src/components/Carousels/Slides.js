import React from "react";
import Slider from "react-slick";
import VideoBlock from "../../screens/VideoBlock";

export default function Slides() {
  const slickSliderSettings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase:"linear",
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <Slider {...slickSliderSettings}>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/tropical-luau-272728-C5cUOa4cC4.jpg"
              }
              title={"Tropical Luau"}
              date={"Thursday, Feb 08th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/de-pan-man-concert-world-of-wonder-272821-FB98N832Tx.jpg"
              }
              title={"De pan man concert world of wonder"}
              date={"Saturday, January 20th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://www.trinijunglejuice.com/events/2024/c2k24/cwts-jan26-2024.jpg"
              }
              title={"Cruise With The Saints 2024 'Discover'"}
              date={"Friday, January 26th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "http://www.trinijunglejuice.com/events/2023/usvi-st-croix-crucian-christmas-festival-2023.jpg"
              }
              title={"usvi st croix crucian christmas festival"}
              date={"Friday, January 05th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://www.trinijunglejuice.com/events/2024/c2k24/fwts-rediscover-jan20-2024.jpg"
              }
              title={"Fete With The Saints 2024 'Rediscover'"}
              date={"Saturday, January 20th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://www.trinijunglejuice.com/events/2024/c2k24/toothpicks-jan27-2024.jpg"
              }
              title={"Toothpicks: Brunch on the Sea"}
              date={"Saturday, January 27th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/stripped-carnival-magic-272738-12YFsLtJUj.jpg"
              }
              title={"Stripped - A Teddyson John Experience 'Carnival Magic'"}
              date={"Wednesday, Jan 31st, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "http://www.trinijunglejuice.com/events/2024/viva-la-carnival-dominica-2024.jpg"
              }
              title={"Viva La Carnival | Dominica Carnival 2024"}
              date={"Saturday, February 10th, 2024"}
            />
            </div>
         </div>
        <div>
        <div style={{padding:"5%"}}>
        <VideoBlock
              imgSrc={
                "https://4f14f3f2b2e5fd1c43c0-19fdc616b209d38d8f477bc6e666e66f.ssl.cf1.rackcdn.com/events/beaucoup-bacchanal-breakfast-272683-VrMJzM9GO5.jpg"
              }
            title={"BEAUCOUP BACCHANAL BREAKFAST"}
            date={"Sunday, January 14th, 2024"}
            />
            </div>
         </div>
      </Slider>
    </>
  );
}
