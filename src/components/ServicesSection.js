import React from "react";
import styled from "styled-components";

// Styled Components
const ServicesWrapper = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
`;

const ServicesContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 40px;
  font-weight: bold;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 60px;
  color: #00b74a;
  margin: 30px auto;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  padding: 0 20px 30px;
`;

// Icons (you can replace these with SVG or real icons later)
const IconCloud = () => (
  <span role="img" aria-label="cloud">
    ☁️
  </span>
);
const IconAnalytics = () => (
  <span role="img" aria-label="analytics">
    📊
  </span>
);
const IconDevOps = () => (
  <span role="img" aria-label="devops">
    🛠️
  </span>
);
const IconLibrary = () => (
  <span role="img" aria-label="library">
    📚
  </span>
);
const IconCode = () => (
  <span role="img" aria-label="code">
    💻
  </span>
);
const IconSecurity = () => (
  <span role="img" aria-label="security">
    🔒
  </span>
);

const ServiceCard = ({ icon, title, description }) => (
  <Card>
    <CardIcon>{icon}</CardIcon>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </Card>
);

export default function ServicesSection() {
  const services = [
    {
      icon: <IconCloud />,
      title: "Cloud & AWS Services",
      description:
        "Unlock the agility and scalability of cloud computing with our expert migration, management, and optimization.",
    },
    {
      icon: <IconLibrary />,
      title: "Library Solutions",
      description:
        "Modernize library operations with tailored Koha, DSpace, and custom digital repository solutions.",
    },
    {
      icon: <IconCode />,
      title: "Custom Development",
      description:
        "Build robust, scalable, and intuitive digital products with our full-stack development expertise.",
    },
    {
      icon: <IconAnalytics />,
      title: "Data Analytics & AI",
      description:
        "Empower your business with actionable insights through advanced data analytics and AI-driven decision-making tools.",
    },
    {
      icon: <IconDevOps />,
      title: "DevOps & Automation",
      description:
        "Streamline development workflows with robust CI/CD pipelines, infrastructure as code, and automated deployment strategies.",
    },
    {
      icon: <IconSecurity />,
      title: "Security & Compliance",
      description:
        "Protect your valuable assets with comprehensive security strategies and compliance adherence.",
    },
  ];

  return (
    <ServicesWrapper>
      <ServicesContainer>
        <ServicesTitle>Our Core Expertise</ServicesTitle>
        <CardsGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </CardsGrid>
      </ServicesContainer>
    </ServicesWrapper>
  );
}
