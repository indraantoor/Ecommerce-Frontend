import Image from 'next/image';
import HeroItems from '../HeroItems';
import { HeroContainer } from './styles/HeroLayout.style';

export const HeroComponent = () => {
  return (
    <HeroContainer>
      <div className="image-container">
        <Image
          src={'/Images/heroImg.jpg'}
          fill
          alt="hero image"
          className="image"
        />
      </div>
      <HeroItems />
    </HeroContainer>
  );
};
