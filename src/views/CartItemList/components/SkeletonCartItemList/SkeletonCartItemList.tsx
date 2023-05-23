import { styled } from 'styled-components';
import * as S from '../CartItemList/CartItemList.style';
import {
  PayingBox,
  PayingContainer,
} from '@views/Payment/components/ExpectedPayment/ExpectedPayment.style';
import { CartItemContainer } from '@views/CartItem/components/CartItemBox/CartItemBox.style';

function SkeletonCart() {
  return (
    <>
      <S.CartWrapper>
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonImage key={index} />
        ))}
      </S.CartWrapper>
      <PayingContainer>
        <SkeletonPayingBox />
      </PayingContainer>
    </>
  );
}

const SkeletonImage = styled(CartItemContainer)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;

  margin-bottom: 1rem;

  padding-left: 50%;
  padding-top: 30%;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const SkeletonPayingBox = styled(PayingBox)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;

  margin-bottom: 1rem;

  padding-left: 50%;
  padding-top: 50%;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default SkeletonCart;
