import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { ArrowLeftSvg } from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const HeroOne = () => {
  return (
    <>
      {/* banner */}
      <section className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6">
              <Pentagon />
            </div>
            <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1">
              <Pentagon />
            </div>
            <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1">
              <Pentagon />
            </div>
          </div>

          <div className="mil-gradient" />

          <div className="container">
            <div className="mil-banner-content mil-up mil-up-200 proper-farsi">

              <h1 className="mil-muted mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.title }} />

              <div className="row">
                <div className="col-md-7 col-lg-5">
                  <p className="mil-light-soft mil-mb-60">{Data.description}</p>
                </div>
              </div>
              <div className="hero-flex-row">

                <Link href={Data.button1.link} className="mil-button mil-button-rtl  mil-arrow-place mil-btn-space">
                  <ArrowLeftSvg />
                  <span>{Data.button1.label}</span>
                </Link>

                {/*<Link href={Data.button2.link} className="mil-link mil-link-rtl mil-muted mil-arrow-place">*/}
                {/*  <span>{Data.button2.label}</span>*/}
                {/*  <ArrowLeftSvg />*/}
                {/*</Link>*/}
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default HeroOne;