import React from 'react';
import Container from '../container';
import Card from './Card';
const cardMock = [
  { title: 'Futebol', icon: 'teste' },
  { title: 'NFL', icon: 'teste' },
  { title: 'Basquete', icon: 'teste' },
];
export default function CardsList() {
  return (
    <Container>
      {cardMock.map(({ title, icon }) => (
        <Card key={title} icon={icon}>{title}</Card>
      ))}
    </Container>
  );
}
