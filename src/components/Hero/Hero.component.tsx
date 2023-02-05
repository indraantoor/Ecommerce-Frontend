import Image from 'next/image';
import HeroItems from '../HeroItems';

export const HeroComponent = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          padding: '19.4%',
        }}
      >
        <Image
          src={'/Images/heroImg.jpg'}
          fill
          alt="hero image"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <HeroItems />
    </div>
  );
};
