import React from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import './ValueCard.css';

interface ValueCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <Card shadow="none" className="step-card" aria-label={title}>
    <CardHeader className="step-card-header">
      <span>{icon}</span>
    </CardHeader>
    <CardBody className="step-card-body">
      <h2 className="step-title">{title}</h2>
      <p className="step-description">{description}</p>
    </CardBody>
  </Card>
);

export default ValueCard;
