import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Context/AuthContext";
import AppRoutes from "./Navigations";

// const listData = [
//   "https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg",
//   "https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg",
//   "https://carousel-slider.uiinitiative.com/images/spider-man.jpg",
//   "https://carousel-slider.uiinitiative.com/images/justice-league.jpg",
//   "https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg",
//   "https://carousel-slider.uiinitiative.com/images/eternals.jpg",
//   "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg",
// ];

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="iwc-tv">
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
  // return (
  //   <div style={{ margin: "0px 4%" }}>
  //     {showSwiper && (
  //       <Swiper
  //         navigation={true}
  //         modules={[Navigation, EffectCoverflow]}
  //         initialSlide={0}
  //         className="mySwiper"
  //         effect={"coverflow"}
  //         grabCursor={true}
  //         centeredSlides={true}
  //         coverflowEffect={{
  //           rotate: 0,
  //           stretch: 100,
  //           depth: 1000,
  //           modifier: 1,
  //           slideShadows: true,
  //         }}
  //         spaceBetween={0}
  //         slidesPerView={2}
  //         autoplay
  //         loop
  //       >
  //         {listData.map((item) => (
  //           <SwiperSlide style={{ width: "500px" }}>
  //             {/* <div className="swiper-carousel-animate-opacity">
  //               <img src={item} alt="" style={{width: '450px', height: '250px'}} />
  //             </div> */}
  //             <VideoCard
  //               description={
  //                 "Start saving your time with Framer Wireframe Web UI Kit."
  //               }
  //               title={"Admin Panel"}
  //               timeStamp={"01:34:45"}
  //               imageUrl={item}
  //             />
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     )}
  //   </div>
  // );
  // return (
  //   <div style={{ margin: "0px 4%" }}>
  //     {showSwiper && (
  //       <Swiper
  //         // rewind
  //         navigation={true}
  //         modules={[Navigation, EffectCoverflow]}
  //         initialSlide={0}
  //         className="mySwiper"
  //         effect={"coverflow"}
  //         grabCursor={true}
  //         centeredSlides={true}
  //         coverflowEffect={{
  //           rotate: 0,
  //           stretch: 200,
  //           depth: 100,
  //           modifier: 1,
  //           slideShadows: true,
  //         }}
  //         spaceBetween={0}
  //         slidesPerView={2}
  //         autoplay
  //         loop
  //         //  loopAddBlankSlides
  //       >
  //         <SwiperSlide>
  //           <div className="swiper-carousel-animate-opacity">
  //             <img
  //               src="https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg"
  //               alt=""
  //             />
  //             <div className="slide-content">
  //               <h2>Guardians Of The Galaxy</h2>
  //               <p>
  //                 etermined to ensure Superman's ultimate sacrifice was not in
  //                 vain, Bruce Wayne aligns forces with Diana
  //               </p>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //         <SwiperSlide>
  //           <div className="swiper-carousel-animate-opacity">
  //             <img
  //               src="https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg"
  //               alt=""
  //             />
  //             <div className="slide-content">
  //               <h2>Justice League</h2>
  //               <p>
  //                 Determined to ensure Superman's ultimate sacrifice was not in
  //                 vain, Bruce Wayne aligns forces with Diana
  //               </p>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //         <SwiperSlide>
  //           <div className="swiper-carousel-animate-opacity">
  //             <img
  //               src="https://carousel-slider.uiinitiative.com/images/spider-man.jpg"
  //               alt=""
  //             />
  //             <div className="slide-content">
  //               <h2>Spider-Man: Far from Home</h2>
  //               <p>
  //                 etermined to ensure Superman's ultimate sacrifice was not in
  //                 vain, Bruce Wayne aligns forces with Diana
  //               </p>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //         <SwiperSlide>
  //           <div className="swiper-carousel-animate-opacity">
  //             <img
  //               src="https://carousel-slider.uiinitiative.com/images/dr-strange.jpg"
  //               alt=""
  //             />
  //             <div className="slide-content">
  //               <h2>Spider-Man: Far from Home</h2>
  //               <p>
  //                 etermined to ensure Superman's ultimate sacrifice was not in
  //                 vain, Bruce Wayne aligns forces with Diana
  //               </p>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       </Swiper>
  //     )}
  //   </div>
  // );
  // return (
  //   <>
  //     <div id="app">
  //       <div className="swiper">
  //         <div className="swiper-wrapper">
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>Guardians Of The Galaxy</h2>
  //                 <p>
  //                   A group of intergalactic criminals must pull together to
  //                   stop a fanatical warrior with plans to purge the universe.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>Justice League</h2>
  //                 <p>
  //                   Determined to ensure Superman's ultimate sacrifice was not
  //                   in vain, Bruce Wayne aligns forces with Diana Prince with
  //                   plans to recruit a team of metahumans to protect the world
  //                   from an approaching threat of catastrophic proportions.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/spider-man.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>Spider-Man: Far from Home</h2>
  //                 <p>
  //                   Following the events of Avengers: Endgame (2019), Spider-Man
  //                   must step up to take on new threats in a world that has
  //                   changed forever.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/justice-league.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>The Suicide Squad</h2>
  //                 <p>
  //                   Supervillains Harley Quinn, Bloodsport, Peacemaker and a
  //                   collection of nutty cons at Belle Reve prison join the
  //                   super-secret, super-shady Task Force X as they are dropped
  //                   off at the remote, enemy-infused island of Corto Maltese.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>Thor: Ragnarok</h2>
  //                 <p>
  //                   Imprisoned on the planet Sakaar, Thor must race against time
  //                   to return to Asgard and stop Ragnarök, the destruction of
  //                   his world, at the hands of the powerful and ruthless villain
  //                   Hela.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/eternals.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>Doctor Strange</h2>
  //                 <p>
  //                   America Chavez and a version of Stephen Strange are chased
  //                   by a demon in the space between universes while searching
  //                   for the Book of Vishanti
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="swiper-slide">
  //             <div className="swiper-carousel-animate-opacity">
  //               <img
  //                 src="https://carousel-slider.uiinitiative.com/images/dr-strange.jpg"
  //                 alt=""
  //               />
  //               <div className="slide-content">
  //                 <h2>Eternals </h2>
  //                 <p>
  //                   In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris,
  //                   Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and
  //                   Thena—are sent by the Celestial Arishem to Earth on their
  //                   starship, the Domo, to exterminate the invasive Deviants.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="swiper-button-prev"></div>
  //       <div className="swiper-button-next"></div>
  //       <div className="swiper-pagination"></div>
  //     </div>
  //   </>
  // );
}

export default App;
