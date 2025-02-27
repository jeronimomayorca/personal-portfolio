import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm from <span className="blue"> Manizales, </span>a medium-sized city located in the heart of the coffee axis, 
            known for human kindness, sunsets, coffee, and university culture.
            <br />
            <br />
            I currently work as a systems and programming instructor at Colegiatura del Café, teaching 10th and 11th-grade students enrolled in the Technical Vocational Program in Administrative Assistance.
            <br />
            <br />
            I am a <span className="blue">creative</span> and <span className="blue">disruptive</span> youngster who questions everything around me to find new and better ways of doing things.
            That's why I always look for unconventional alternatives and <span className="underlined">usually come up with great ideas!</span>
            <br />
            <br />
            I am currently studying Software Engineering at Universidad Iberoamericana de Bogotá and actively seeking job opportunities.
          </p>

          <br />
          <p style={{ color: "rgb(138, 191, 255)" }}>
            If you're looking for someone who thinks differently and has great ideas, count on me!
          </p>
          <br />
          <footer className="blockquote-footer">Mayorcadev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
