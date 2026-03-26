"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      button={{
        text: "Call Now",
        href: "tel:+919876543210",
      }}
      brandName="Karupati Coffee Shop"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      title="Authentic Karupatti Coffee in Pichatur"
      description="Fresh traditional coffee, tea, and snacks served with rich flavor. Experience the true taste of South India, crafted with care and tradition."
      testimonials={[
        {
          name: "Anil Kumar",
          handle: "@anilkumar",
          testimonial: "Superb coffee and tea. The Karupatti coffee is truly authentic and reminds me of home. A must-visit!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman_1098-21002.jpg",
        },
        {
          name: "Priya Sharma",
          handle: "@priyasharma",
          testimonial: "Absolutely love the cozy ambiance and the delicious hot snacks. My go-to spot for an evening chai!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-female-sitting-with-coffee_23-2147834493.jpg",
        },
        {
          name: "Raghav Rao",
          handle: "@raghavrao",
          testimonial: "The filter coffee is perfectly brewed every time. A fantastic local business that truly cares about quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-indian-man-posing-studio_23-2150692695.jpg",
        },
        {
          name: "Deepika Reddy",
          handle: "@deepikareddy",
          testimonial: "Friendly staff and quick service. The taste of Karupatti coffee is unmatched. Highly recommend to everyone in Pichatur!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-smiling-shopping-center_23-2148225680.jpg",
        },
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Call Now",
          href: "tel:+919876543210",
        },
        {
          text: "Get Directions",
          href: "https://maps.app.goo.gl/Pichatur",
        },
        {
          text: "WhatsApp",
          href: "https://wa.me/919876543210",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cozy-cup-tea_169016-3634.jpg"
      imageAlt="Traditional South Indian coffee cup"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Story: The Taste of Tradition"
      description="Karupati Coffee Shop is a cherished local favorite in Pichatur, renowned for its exquisite Karupatti coffee. We meticulously craft each cup using authentic palm jaggery and time-honored traditional brewing methods, ensuring a rich and distinct flavor that captures the essence of South Indian coffee culture. Our passion for tradition and quality shines in every sip and bite."
      imageSrc="http://img.b2bpic.net/free-photo/cheerful-asian-young-woman-drinking-warm-coffee-tea-enjoying-it-while-sitting-cafe_7861-1012.jpg"
      imageAlt="Interior of Karupati Coffee Shop with warm lighting"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "karupatti-coffee",
          name: "Karupatti Coffee",
          price: "₹60",
          variant: "Traditional Jaggery Blend",
          imageSrc: "http://img.b2bpic.net/free-photo/turkish-sutlac-table_140725-9291.jpg",
          imageAlt: "Hot Karupatti coffee in a traditional cup",
        },
        {
          id: "filter-coffee",
          name: "Filter Coffee",
          price: "₹50",
          variant: "Authentic South Indian Brew",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-coffee-brewing-gadgets-wooden-bar-counter_176420-7894.jpg",
          imageAlt: "South Indian filter coffee in dabara tumbler",
        },
        {
          id: "tea",
          name: "Tea",
          price: "₹40",
          variant: "Classic Milk Tea",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-glasses-with-flavored-fruit-juice_23-2148633209.jpg",
          imageAlt: "A cup of hot Indian chai tea",
        },
        {
          id: "hot-snacks",
          name: "Hot Snacks",
          price: "From ₹30",
          variant: "Daily Specials",
          imageSrc: "http://img.b2bpic.net/free-photo/spring-rolls-with-cheese-dark-wood-background_1150-45271.jpg",
          imageAlt: "Assorted hot snacks like samosas and vadas",
        },
      ]}
      title="Our Popular Menu"
      description="Discover the delightful range of beverages and snacks that keep our customers coming back for more. Hand-crafted with the finest ingredients and a touch of traditional love."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardOne
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Art of Coffee",
          description: "See the passion in every cup.",
          imageSrc: "http://img.b2bpic.net/free-photo/assorted-coffee-cups-textured-background_53876-88454.jpg",
          imageAlt: "Variety of coffee cups on display",
        },
        {
          title: "Our Welcoming Space",
          description: "Relax and unwind in our charming interior.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup-coffee-shop_74190-60.jpg",
          imageAlt: "Bright and clean coffee shop interior",
        },
        {
          title: "Happy Faces",
          description: "Customers enjoying their favorite beverages.",
          imageSrc: "http://img.b2bpic.net/free-photo/best-friends-hanging-out-while-enjoying-delicious-drink_23-2148914562.jpg",
          imageAlt: "Happy customers enjoying coffee in the cafe",
        },
        {
          title: "Crafted with Care",
          description: "Our baristas perfecting every brew.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-people-gathering-coffee_23-2148817100.jpg",
          imageAlt: "Barista preparing coffee with an espresso machine",
        },
        {
          title: "Local Charm",
          description: "The inviting exterior of our coffee shop.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-yard-terrace-restaurant-made-national-style-with-greenery-chairs-ad-tables-nikiti-greece_1268-16662.jpg",
          imageAlt: "Exterior of Karupati Coffee Shop during daytime",
        },
        {
          title: "Sweet Treats",
          description: "Delicious pastries and snacks to complement your coffee.",
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-with-macaroons-near-coffee_23-2147787052.jpg",
          imageAlt: "Display of fresh pastries and cakes in a coffee shop",
        },
      ]}
      title="A Glimpse of Karupati Coffee"
      description="Step into our cozy world and discover the warmth of our coffee shop. From expertly brewed cups to inviting interiors and happy customers, explore the moments that make us special."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Anil Kumar",
          date: "2 days ago",
          title: "Best Karupatti Coffee!",
          quote: "Superb coffee and tea. The Karupatti coffee is truly authentic and reminds me of home. A must-visit!",
          tag: "Coffee Lover",
          avatarSrc: "http://img.b2bpic.net/free-photo/confident-businessman_1098-21002.jpg",
          avatarAlt: "Anil Kumar avatar",
        },
        {
          id: "2",
          name: "Priya Sharma",
          date: "1 week ago",
          title: "Cozy Ambiance & Snacks",
          quote: "Absolutely love the cozy ambiance and the delicious hot snacks. My go-to spot for an evening chai!",
          tag: "Regular Customer",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-female-sitting-with-coffee_23-2147834493.jpg",
          avatarAlt: "Priya Sharma avatar",
        },
        {
          id: "3",
          name: "Raghav Rao",
          date: "2 weeks ago",
          title: "Perfect Filter Coffee",
          quote: "The filter coffee is perfectly brewed every time. A fantastic local business that truly cares about quality.",
          tag: "Coffee Connoisseur",
          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-indian-man-posing-studio_23-2150692695.jpg",
          avatarAlt: "Raghav Rao avatar",
        },
        {
          id: "4",
          name: "Deepika Reddy",
          date: "3 weeks ago",
          title: "Unmatched Taste!",
          quote: "Friendly staff and quick service. The taste of Karupatti coffee is unmatched. Highly recommend to everyone in Pichatur!",
          tag: "Local Patron",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-girl-smiling-shopping-center_23-2148225680.jpg",
          avatarAlt: "Deepika Reddy avatar",
        },
      ]}
      title="Hear From Our Happy Customers"
      description="Don't just take our word for it. Our patrons love the authentic flavors and friendly atmosphere at Karupati Coffee Shop, making it their favorite spot."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Connect With Us"
      title="Visit or Call Karupati Coffee Shop"
      description="We'd love to hear from you! Reach out for inquiries, orders, or simply to learn more about our traditional Karupatti coffee. Located conveniently in Pichatur, Andhra Pradesh. \n\n**Address:** Pichatur, Andhra Pradesh 517587. Find us easily on Google Maps below!\n\n**Call us:** +91 98765 43210\n\nFill out the form below for a callback regarding your queries."
      inputPlaceholder="Your Name"
      buttonText="Request Callback"
      termsText="By clicking Request Callback you're confirming that you agree with our Terms and Conditions. (Placeholder text for form submission)"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Karupati Coffee Shop"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
