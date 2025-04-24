import "./ServicesSection.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ServicesSection() {
  return (
    <div className="services-section">
      <section className="servicesCards">
        <div className="services-grid">

          <div className="row-1-wrapper">
            {cardData.slice(0, 3).map((card, index) => (
              <ServiceCard key={index} card={card} />
            ))}
          </div>

          <div className="row-2-wrapper">
            {cardData.slice(3, 5).map((card, index) => (
              <ServiceCard key={index + 3} card={card} />
            ))}
          </div>

          <div className="row-3-wrapper">
            {cardData.slice(5, 8).map((card, index) => (
              <ServiceCard key={index + 5} card={card} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
function ServiceCard({ card }) {
    return (
      <div
        className="service-card"
        style={{ background: card.bgColor }}
      >
        <div className="card-text">
          <h3>{card.emoji} {card.title}</h3>
          <h4>{card.subtitle}</h4>
          <p>{card.description}</p>
          <ul className={`checklist ${card.color}`}>
            {card.points.map((point, i) => (
              <li key={i}>
                <i className="fa-regular fa-circle-check"></i>
                {point}
              </li>
            ))}
          </ul>
          {card.teamNote && <p className="team-note">{card.teamNote}</p>}
  
          {/* Add a button */}
          {card.buttonText && (
            <a
              className="card-button"
              href={card.buttonLink || "#"}
            >
              {card.buttonText}
            </a>
          )}
        </div>
        <div className="card-img">
          <img src={card.image} alt={card.alt} />
        </div>
      </div>
    );
  }
  
const cardData = [
  {
    emoji: "",
    title: "Market positioning & strategy",
    description: "We work with you to define your business goals, understand your market, and carve out a unique competitive position.",
    points: [
      //"A clear market fit to help you attract the right customers and stand out in your industry.",
      //"A custom growth strategy tailored to your goals, resources, and stage of business.",
      //"A powerful positioning statement and well-defined goals to guide your brand's messaging and focus.",
      //"Strategic business planning support to align your operations, marketing, and vision."
    ],
    color: "orange",
    bgColor: "linear-gradient(135deg,rgb(255, 239, 212) 0%,rgb(255, 249, 240) 100%)",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  
  {
   
    title: "Software & AI solutions",
    description: "Need a custom dashboard, internal app, or automation? We design and build tools tailored to your business goals",
    points: [
      
    ],
    color: "card2",
    bgColor: "linear-gradient(135deg,rgb(248, 239, 255) 0%,rgb(237, 215, 255) 100%)",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  {
 
    title: "Branding & design",
    description: "Whether you're starting from scratch or rebranding, we design identities that inspire trust and recognition",
    points: [
      
    ],
    color: "card3",
    bgColor: "linear-gradient(135deg,rgb(248, 224, 221) 0%,rgb(255, 246, 245) 100%)",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },

  {
   
    title: "Data & analytics",
    description: " We help you collect, analyze, and visualize the numbers that matter so you can track performance and plan ahead",
    points: [
     
    ],
    color: "card4",
    bgColor: "#D9F0FF",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  {
   
    title: " Digital presence & social media",
    description: "We build your online presence and grow your following with strategies that connect and convert",
    points: [
     
    ],
    color: "card5",
    bgColor: "#FFF9CD",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  {
   
    title: "Customer & user experience (CX/UX)",
    description: " We train your team and design systems to create consistent, memorable customer experiences that drive loyalty",
    points: [
      
    ],
    color: "card6",
    bgColor: "#EAECFF",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  
  {
   
    title: "Client success & support",
    //subtitle: "Smart tools built just for you.",
    description: "Need a custom dashboard, internal app, or automation? We design and build tools tailored to your business goals",
    points: [
     
    ],
    color: "card7",
    bgColor: "#F8EFFF",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  {
   
    title: "Business consulting & legal supports",
    description: "We help you build a solid foundation with legal guidance, operations consulting, and compliance assistance.",
    points: [
    
    ],
    color: "card8",
    bgColor: "#EBFDFF",
    image: "/images/service1.png",
    alt: "Market Strategy",
    buttonText: "Learn more",
    buttonLink: "/contact"
  },
  
];
