import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="pGray.900" w="auto" maxW="900px">
        <ModalBody p="0">
          <Image src={imgUrl} maxH="600px" objectFit="cover" />
        </ModalBody>
        <ModalFooter h="8" p="10px">
          <Link
            isExternal
            color="teal.500"
            href={imgUrl}
            mr="auto"
            fontSize="sm"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
