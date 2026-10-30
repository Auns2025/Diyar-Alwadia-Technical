// Official Content & Configuration for Diyar Alwadiya Technical Services
import heroPoolImg from '../assets/images/pool-construction.jpg';
import poolServiceImg from '../assets/images/pool-residential-modern.jpg';
import waterproofingServiceImg from '../assets/images/verified-waterproofing.jpg';
import fitoutServiceImg from '../assets/images/fitout-commercial-real.jpg';
import renovationServiceImg from '../assets/images/renovation-modern-villa.jpg';
import cinematicWidePoolImg from '../assets/images/cinematic-wide-pool.jpg';

// Gallery verified architectural photographs
import galleryInfinityPool from '../assets/images/verified-infinity-pool.jpg';
import galleryVillaExterior from '../assets/images/gallery-2.jpg';
import galleryInteriorFitout from '../assets/images/gallery-interior-fitout.jpg';
import galleryPoolBasinDetail from '../assets/images/verified-pool-tiles.jpg';

import ctaPoolImg from '../assets/images/cta-pool.jpg';

export const siteConfig = {
  companyName: "Diyar Alwadiya Technical Services",
  shortName: "Diyar Alwadiya",
  tagline: "Exceptional Pools. Expertly Built Spaces.",
  experienceYears: "03",
  location: "United Arab Emirates",
  
  // Official verified contact & WhatsApp number
  contact: {
    whatsappNumber: "971506875352",
    whatsappDisplay: "+971506875352",
    phonePlaceholder: "+971506875352",
    phoneDisplay: "+971506875352",
    email: "info@diyaralwadiya.com",
    address: "Dubai & Across UAE, United Arab Emirates",
    workingHours: "Monday – Saturday: 8:00 AM – 6:00 PM",
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Swimming Pools", href: "/swimming-pools" },
    { name: "Waterproofing", href: "/waterproofing" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "DIYAR ALWADIYA TECHNICAL SERVICES",
    heading: "Exceptional Pools.\nExpertly Built Spaces.",
    description:
      "From bespoke swimming pool construction to waterproofing, fit-out, and renovation, we deliver technical solutions designed around quality, precision, and lasting performance.",
    primaryCta: "Explore Our Services",
    secondaryCta: "Request a Consultation",
    backgroundImage: heroPoolImg,
  },

  about: {
    eyebrow: "WHO WE ARE",
    heading: "Built on Precision.\nDefined by Quality.",
    description:
      "Diyar Alwadiya Technical Services is a UAE-based company with three years of experience delivering swimming pool construction, professional waterproofing, interior fit-out, and renovation services for residential and commercial properties.\n\nWe approach every project with attention to detail, practical expertise, and a commitment to lasting results.",
    cta: "Discover Our Expertise",
    metrics: [
      { label: "Years in Business", value: 3, display: "03" },
      { label: "Core Technical Disciplines", value: 4, display: "04" },
      { label: "UAE Operational Coverage", value: "National", display: "UAE" },
    ],
  },

  services: [
    {
      id: "pool-construction",
      number: "01",
      title: "Swimming Pool Construction",
      subtitle: "Custom Residential & Luxury Villa Pools",
      href: "/swimming-pools",
      description:
        "Custom swimming pool construction for residential and commercial environments. We execute contemporary pool architecture, luxury villa pools, and precision aquatic engineering tailored to UAE outdoor living.",
      image: poolServiceImg,
      tags: ["Custom Residential Pools", "Luxury Villa Pools", "Aquatic Engineering", "Deck & Coping"],
    },
    {
      id: "waterproofing",
      number: "02",
      title: "Waterproofing Solutions",
      subtitle: "Structural Protection & Durability",
      href: "/waterproofing",
      description:
        "Reliable waterproofing solutions designed to protect structures and improve long-term durability. Specialized membrane and seal applications for swimming pool basins, basements, wet areas, and commercial properties.",
      image: waterproofingServiceImg,
      tags: ["Pool Basin Waterproofing", "Torch-down Bitumen", "Structural Concrete Protection", "Moisture Barriers"],
    },
    {
      id: "fit-out",
      number: "03",
      title: "Interior Fit-Out Works",
      subtitle: "Refined Commercial & Residential Spaces",
      href: "/projects",
      description:
        "Professional fit-out services for refined, functional residential and commercial interiors. From retail shop fit-outs to bespoke architectural joinery, partition systems, and high-end surface finishes.",
      image: fitoutServiceImg,
      tags: ["Commercial Shop Fit-outs", "Interior Finishing", "Joinery & Ceilings", "Architectural Partitions"],
    },
    {
      id: "renovation",
      number: "04",
      title: "Villa & Commercial Renovation",
      subtitle: "Comprehensive Property Transformation",
      href: "/projects",
      description:
        "Thoughtful renovation solutions that transform existing spaces. Full-scope villa modernizations, commercial retail upgrades, and structural remodeling executed with craftsmanship and minimal disruption.",
      image: renovationServiceImg,
      tags: ["Complete Villa Renovation", "Commercial Shop Renovation", "Spatial Reconfiguration", "Facade Upgrades"],
    },
  ],

  featuredPool: {
    eyebrow: "AQUATIC ARCHITECTURE",
    heading: "Where Design Meets Water.",
    description:
      "Thoughtfully constructed swimming pools that complement their surroundings and elevate outdoor living.",
    image: cinematicWidePoolImg,
    highlights: [
      {
        title: "Custom Pool Construction",
        description: "Tailored geometry, skimmer and overflow systems engineered precisely for UAE climatic conditions.",
      },
      {
        title: "Refined Finishing",
        description: "Selection of premium porcelain mosaics, natural travertine coping, and integrated LED aquatic illumination.",
      },
      {
        title: "Built for Lasting Performance",
        description: "Robust hydraulic circulation, multi-stage filtration, and resilient waterproofing barriers.",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "OUR CORE STANDARDS",
    heading: "A Commitment to Every Detail.",
    description:
      "Our technical operations in the UAE are guided by rigorous engineering discipline, transparent communication, and meticulous material selection.",
    points: [
      {
        number: "01",
        title: "Technical Expertise",
        description: "Practical construction knowledge applied with care and attention to detail across every structural and hydraulic stage.",
      },
      {
        number: "02",
        title: "Quality-Focused Execution",
        description: "A commitment to appropriate materials, workmanship, and dependable results built to withstand high temperatures and salinity.",
      },
      {
        number: "03",
        title: "Integrated Services",
        description: "Swimming pool construction, waterproofing, fit-out, and renovation under one cohesive, accountable service offering.",
      },
      {
        number: "04",
        title: "Client-Centered Approach",
        description: "Solutions shaped around project requirements, functionality, and design expectations with direct site supervision.",
      },
    ],
  },

  gallery: {
    eyebrow: "VISUAL SHOWCASE",
    heading: "Spaces That Inspire.",
    supportingText: "Explore the design possibilities across swimming pools, interiors, and renovation.",
    disclaimer: "Curated design inspiration illustrating architectural concepts, finishing standards, and execution possibilities.",
    items: [
      {
        id: "p1",
        title: "Modern Villa Infinity Pool",
        category: "Swimming Pools",
        displayCategory: "Pool Construction Concept",
        image: galleryInfinityPool,
        span: "col-span-12 md:col-span-7",
        details: "Seamless vanishing edge pool constructed with reinforced C40 concrete, dual-coat elastomeric waterproofing, and premium porcelain coping stone."
      },
      {
        id: "p2",
        title: "Contemporary Villa Exterior & Terrace",
        category: "Renovation",
        displayCategory: "Renovation Architecture",
        image: galleryVillaExterior,
        span: "col-span-12 md:col-span-5",
        details: "Integrated outdoor living transformation with sunken seating lounge, outdoor shower, and non-slip travertine terrace paving."
      },
      {
        id: "p3",
        title: "Bespoke Architectural Interior Fit-Out",
        category: "Fit-Out",
        displayCategory: "Commercial & Residential Fit-Out",
        image: galleryInteriorFitout,
        span: "col-span-12 md:col-span-5",
        details: "Minimalist interior architecture featuring textured concrete wall panels, acoustic wood slatting, and hidden LED lighting."
      },
      {
        id: "p4",
        title: "Precision Aquatic Basin & Stone Detailing",
        category: "Swimming Pools",
        displayCategory: "Finishing & Waterproofing Detail",
        image: galleryPoolBasinDetail,
        span: "col-span-12 md:col-span-7",
        details: "High-temperature resistant glass-mosaic tile installation with anti-efflorescence epoxy grout and balanced underwater hydraulic jets."
      },
      {
        id: "p5",
        title: "Structural Torch-Down Waterproofing",
        category: "Waterproofing",
        displayCategory: "Membrane Application",
        image: waterproofingServiceImg,
        span: "col-span-12 md:col-span-6",
        details: "Multi-layer SBS modified bitumen torch-applied membrane protecting foundation slabs against groundwater pressure and moisture ingress."
      },
      {
        id: "p6",
        title: "Modern Villa Facade & Terrace Upgrade",
        category: "Renovation",
        displayCategory: "Villa Modernization",
        image: renovationServiceImg,
        span: "col-span-12 md:col-span-6",
        details: "Architectural property transformation featuring insulated exterior wall cladding, thermal glass facades, and landscaped lighting."
      }
    ],
  },

  experience: {
    number: "03",
    label: "Years in Business",
    heading: "Experience That Shapes Better Spaces.",
    description:
      "Three years of delivering technical services with a focus on quality, precision, and customer requirements across the United Arab Emirates.",
    values: [
      { title: "Specialized Disciplines", desc: "Pools, Waterproofing, Fit-Out & Renovation" },
      { title: "UAE Standards", desc: "Engineered for regional climate & structural codes" },
      { title: "Precision First", desc: "No compromises on materials or technical integrity" },
    ],
  },

  cta: {
    heading: "Your Vision.\nOur Expertise.",
    description:
      "Planning a swimming pool, waterproofing project, fit-out, or renovation? Let's discuss your requirements.",
    primaryBtn: "Start Your Project",
    secondaryBtn: "Explore Our Services",
    backgroundImage: ctaPoolImg,
  },

  footer: {
    companyDescription:
      "Diyar Alwadiya Technical Services provides swimming pool construction, waterproofing, fit-out, and renovation solutions across the UAE.",
    copyright: "© 2026 Diyar Alwadiya Technical Services. All rights reserved.",
  },

  faqs: [
    {
      q: "What is the typical timeframe for constructing a custom villa swimming pool in the UAE?",
      a: "A standard custom residential villa pool typically takes between 6 to 10 weeks from final approved 3D engineering drawings, including excavation, steel reinforcement, concrete pouring, waterproofing, tiling, and hydraulic commissioning."
    },
    {
      q: "Why is professional waterproofing critical for swimming pools in the UAE?",
      a: "The UAE climate features extreme temperatures, high water evaporation rates, and ground salinity. We use dual-layer membrane and elastomeric cementitious waterproofing to protect against structural water loss and groundwater ingress."
    },
    {
      q: "Do you provide swimming pool equipment and smart filtration systems?",
      a: "Yes. We engineer complete hydraulic systems including energy-efficient variable speed pumps, glass media sand filters, automatic chemical dosers, salt chlorinators, and integrated LED lighting."
    },
    {
      q: "What areas of the United Arab Emirates do you cover?",
      a: "Diyar Alwadiya Technical Services operates across Dubai, Abu Dhabi, Sharjah, and other emirates for residential villa projects, commercial renovations, and waterproofing works."
    },
    {
      q: "How can I request an initial site inspection and cost estimate?",
      a: "You can submit a consultation request through our website, or directly message our technical hotline on WhatsApp at +971506875352 to arrange a site evaluation."
    }
  ]
};
