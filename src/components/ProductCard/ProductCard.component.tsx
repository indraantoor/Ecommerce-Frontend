import Image from 'next/image';
import { IProductCardComponentPropsTypes } from './core/interfaces/ProductCardProps.interface';

function ProductCardComponent({
  title = '',
  price = '',
  imageSrc = '',
  currency = '$',
}: IProductCardComponentPropsTypes) {
  return (
    <div
      style={{
        background: 'white',
        cursor: 'pointer',
        borderRadius: '2px',
        padding: '23px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '35px',
        flexDirection: 'column',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          fontSize: '20px',
          width: '100%',
        }}
      >
        <div>{title}</div>
        <div
          style={{
            fontSize: '16px',
            marginTop: '15px',
          }}
        >
          <span
            style={{
              color: 'orange',
              marginRight: '5px',
            }}
          >
            Price
          </span>
          {`${currency}${price}`}
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          position: 'relative',
          padding: '35%',
          height: 0,
          width: 0,
        }}
      >
        <Image
          src={imageSrc}
          fill
          alt="product-image"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
}

export default ProductCardComponent;
