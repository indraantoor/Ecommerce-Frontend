import { LoadingSpinnerContainer } from './styles/LoadingSpinner.style';

export const LoadingSpinnerComponent = () => {
  return (
    <div>
      <LoadingSpinnerContainer>
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingSpinnerContainer>
    </div>
  );
};
