import { styled } from 'styled-components';
import { StyleCartItemWrapper } from '../../../CarItem/components/CartItemBox/CartItemBox.style';
import { StyleCartWrapper } from '../CartItemListContainer/CartItemList.style';

import {
  StylePayingBox,
  StylePayingWrapper,
} from '../../../Payment/components/ExpectedPayment/ExpectedPayment.style';

function SkeletonCart() {
  return (
    <>
      <StyleCartWrapper>
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonImage key={index} />
        ))}
      </StyleCartWrapper>
      <StylePayingWrapper>
        <SkeletonPayingBox />
      </StylePayingWrapper>
    </>
  );
}

const SkeletonImage = styled(StyleCartItemWrapper)`
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

const SkeletonPayingBox = styled(StylePayingBox)`
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
