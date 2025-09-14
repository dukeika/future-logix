import React from "react";
import styled from "styled-components";

import CloudIcon from "@mui/icons-material/Cloud";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SecurityIcon from "@mui/icons-material/Security";
import { useTheme } from "@mui/material/styles";

// Styled Components

const WhyWrapper = styled.section`
  padding: 80px 20px;
  background-color: #f5f7fa;
`;

const WhyContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const WhyTitle = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 20px;
  font-weight: bold;
`;

const WhySubtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 40px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const WhyCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 30px;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const WhyIcon = styled.div`
  font-size: 40px;
  color: #00b74a;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const WhyCardTitle = styled.h3`
  font-size: 1.3rem;
  color: #003366;
  margin-bottom: 10px;
`;

const WhyCardContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

export default function WhyPartnerSection() {
  const reasons = [
    // {
    //   icon: <CloudIcon fontSize="large" />,
    //   title: "AWS Advanced Partner",
    //   description:
    //     "Recognized expertise and trusted by leading organizations across Africa.",
    // },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "98% Satisfaction Rate",
      description:
        "Reflecting our results-driven approach and commitment to excellence.",
    },
    {
      icon: <HandshakeIcon fontSize="large" />,
      title: "Tailored Solutions",
      description:
        "Custom-built strategies that align perfectly with your business needs.",
    },
    {
      icon: <PublicIcon fontSize="large" />,
      title: "Local & Global Reach",
      description:
        "Deep understanding of Nigerian markets with global technology standards.",
    },
    // {
    //   icon: <VerifiedUserIcon fontSize="large" />,
    //   title: "Proven Experience",
    //   description:
    //     "Years of delivering transformative tech solutions across diverse industries.",
    // },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: "Security First Approach",
      description:
        "Built-in security practices ensure your systems are protected at all times.",
    },
  ];

  return (
    <WhyWrapper>
      <WhyContainer>
        <WhyTitle>Why Partner with FutureLogix?</WhyTitle>
        <WhySubtitle>
          Our commitment to excellence is reflected in the success of our
          clients. Hear directly from the businesses we've empowered.
        </WhySubtitle>
        <CardsGrid>
          {reasons.map((reason, index) => (
            <WhyCard key={index}>
              <WhyIcon>{reason.icon}</WhyIcon>
              <WhyCardTitle>{reason.title}</WhyCardTitle>
              <WhyCardContent>{reason.description}</WhyCardContent>
            </WhyCard>
          ))}
        </CardsGrid>
      </WhyContainer>
    </WhyWrapper>
  );
}
