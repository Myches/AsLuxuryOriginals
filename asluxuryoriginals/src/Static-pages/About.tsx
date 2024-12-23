// import React from 'react';
import "./About.css";

const About = () => {
  document.title = "About Us | AS Luxury";

  return (
    <div>
      <div className="div text-r">
        <article>
          <img src=".\src\assets\Images\about-asset-3.webp" alt="" />
        </article>
        <div className="p-10">
          <p>ABOUT US</p>
          <p>
            From humble beginnings as an aspirational store, we have evolved
            into a prestigious online empire. Our mission remains unwavering: to
            present high street consumers with the finest selection of designer
            luxury fashion. We continually push the envelope in digital
            innovation, while maintaining unparalleled standards of customer
            service.
          </p>
        </div>
      </div>

      <div className="div">
        <article>
          <img src=".\src\assets\Images\mens-apparel-fashion-stores-interior-design-1-1334x834.jpg" alt="" />
        </article>
        <div>
          <p>EXCEPTIONAL SERVICE.</p>
          <p>
            As Luxury Originals is dedicated to providing the latest premium and
            designer menswear and accessories. With an extensive brand
            portfolio, we continue to seek out the latest styles and trends in
            clothing, footwear and accessories season after season. Visit As
            Luxury Originals for your next dose of fashion inspiration.
          </p>
        </div>
      </div>

      <div className="div text-r">
        <article>
          <img src=".\src\assets\Images\showroom-4-946x1024.jpg" alt="" />
        </article>

        <div>
          <p>LEADING MARKETPLACE</p>
          <p>
            As Luxury Originals is a leading marketplace for the luxury fashion
            industry. The As Luxury Originals Marketplace connects customers in
            the country with items from the world's best brands, boutiques, and
            department stores, delivering a truly unique shopping experience and
            access to the most extensive selection of luxury on a global
            marketplace.
          </p>
        </div>
      </div>

      <div className="div">
        <article>
          <img src=".\src\assets\Images\model-b.jpg" alt="" />
        </article>
        <div>
          <p>WHY CHOOSE US?</p>
          <p>
            Why Choose Us At ASL ORIGINALS, we offer luxury apparel that shows
            off your unique style. Here's why people love us:
            <li>
              Top Quality: We offer the best materials. Our apparel is made to
              last and feel amazing.
            </li>
          
            <li>
              Inclusive Luxury: We offer a wide range of styles and sizes for
              everyone. Our apparel is perfect for any occasion, from formal
              events to relaxed weekends
            </li>

            <li>Elegant Design: Our designers create stylish looks that mix classic and modern trends. Each piece is unique and classy.
            </li>
            
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
