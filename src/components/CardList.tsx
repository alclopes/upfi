import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [selectedImageURL, setSelectedImageURL] = useState('');
  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleSelectedImage = (imageUrl: string): void => {
    setSelectedImageURL(imageUrl);
    onOpen();
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={40}>
        {cards.map(item => {
          return (
            <Card key={item.id} data={item} viewImage={handleSelectedImage} />
          );
        })}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      {isOpen && (
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl={selectedImageURL}
        />
      )}
    </>
  );
}
