import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import './StepCard.css';

interface StepCardProps {
  stepNumber: number;
  icon: React.ReactElement;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  icon,
  title,
  description,
}) => (
  <Card
    shadow="none"
    className="step-card"
    aria-label={`Etapa ${stepNumber}: ${title}`}
  >
    <CardHeader className="step-card-header">
      <span>{icon}</span>
      <span className="step-number">{stepNumber}</span>
    </CardHeader>
    <CardBody className="step-card-body">
      <h2 className="step-title">{title}</h2>
      <p className="step-description">{description}</p>
    </CardBody>
    <CardFooter className="step-card-footer">
      <span className="step-icon-container">
        <ArrowUpRightIcon className="step-icon" />
      </span>
    </CardFooter>
  </Card>
);

export default StepCard;
