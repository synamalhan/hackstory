import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Timeline from "./pages/Timeline";
import About from "./pages/About";
import introImage from "./assets/images/intro.jpg"; 
import bayardChildren from "./assets/images/bayard_children.jpg";
import bayardMLK from "./assets/images/bayard_mlk.webp";
import washingtonBG from "./assets/images/washington_bg.jpg"; 
import Legacy from "./pages/Legacy";
import References from "./pages/References";
import timeline_bg from "./assets/images/timeline_bg.jpg"; 




const App = () => {
  return (
    <div style={{ backgroundColor: "#f4e3c3" }}> {/* light dull brown */}
      <Navbar />
      <Parallax pages={6}>
        {/* Background image layer */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${introImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
<ParallaxLayer offset={1} factor={1}>
  <div
    style={{
      backgroundImage: `url(${bayardChildren})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
    }}
  />
</ParallaxLayer>
<ParallaxLayer offset={3} factor={1}>
  <div
    style={{
      backgroundImage: `url(${washingtonBG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
    }}
  />
</ParallaxLayer>

<ParallaxLayer offset={1.9} speed={0.2} factor={1}>
  <div
    style={{
      backgroundImage: `url(${bayardMLK})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
    }}
  />
<ParallaxLayer
  offset={3.2}
  speed={0}
  factor={2.2}
  style={{
    backgroundImage: `url(${timeline_bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  }}
/>


</ParallaxLayer>

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={1}>
          <Hero />
        </ParallaxLayer>

                {/* About Section */}
        <ParallaxLayer offset={1.4} speed={0.5}>
          <About />
        </ParallaxLayer>

        {/* Timeline Section */}
        <ParallaxLayer offset={2.4} speed={0.7} factor={1.5}>
          <Timeline />
        </ParallaxLayer>

        {/* Legacy Section */}
<ParallaxLayer offset={3.8} speed={0.5}>
  <Legacy />
</ParallaxLayer>


{/* References Section */}
<ParallaxLayer offset={4.9} speed={0.5}>
  <References />
</ParallaxLayer>



      </Parallax>
    </div>
  );
};

export default App;
