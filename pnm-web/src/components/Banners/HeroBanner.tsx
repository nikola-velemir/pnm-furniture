import hero_banner_img from "../../assets/hero-banner-image.jpeg";
import wooden_pattern from "../../assets/wood_pattern_transparent.png";
import CtaButton from "../common/CtaButton";

const HeroBanner = () => {
  return (
    <div
      className="container-fluid hero-banner"
      style={{ width: "100%", position: "relative" }}
    >
      <div className="hero-banner-overlay">
        <div className="text-container px-4">
          <h1 style={{ color: "var(--text-color)", fontSize: "3rem" }}>
            Elevate your home with good furniture
          </h1>
          <div className="cta-break my-5"></div>
          <h4
            className="fs-6"
            style={{ fontFamily: "Poppins", fontWeight: 300 }}
          >
            Etiam ac metus elit. Mauris vitae cursus est. Fusce ornare tortor
            eget est sollicitudin consectetur. Sed imperdiet ligula a purus
            dictum eleifend. Vestibulum accumsan velit eget interdum volutpat.
            Mauris eget sem at nunc imperdiet vulputate. Ut a suscipit odio.
            Duis laoreet bibendum consectetur. Vestibulum urna eros, placerat id
            nisi ac, ornare sagittis libero. Maecenas tempus, nisl sed egestas
            gravida, magna quam commodo elit, cursus gravida augue metus quis
            eros. Vivamus rhoncus lobortis mauris id varius.
          </h4>
          <div className="py-4">
            <CtaButton displayText="discover" />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-5 g-0 d-none d-lg-block d-xl-block "
          style={{ background: `url(${wooden_pattern})` }}
        ></div>
        <div className="col-lg-7 g-0">
          <img src={hero_banner_img} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
