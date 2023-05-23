import { useNavigate } from 'react-router-dom';

import * as S from './CartStepperWithIcon.style';
import { useCartLength } from '@recoil/cart/withCartLength';
import { useRefreshCartList } from '@recoil/cart/cartState';

function CartStepperWithIcon() {
  const navigate = useNavigate();
  const cartListLength = useCartLength();
  const refresher = useRefreshCartList();

  return (
    <S.CartWrapper
      type="button"
      aria-label="장바구니 페이지로 가기"
      role="button"
      onClick={() => {
        refresher();
        navigate('/cart');
      }}
    >
      <S.CartTitle>
        <S.CartText>장바구니</S.CartText>
      </S.CartTitle>
      <S.CartCountWrapper>
        <S.CartCount aria-live="polite">{cartListLength}</S.CartCount>
      </S.CartCountWrapper>
    </S.CartWrapper>
  );
}

export default CartStepperWithIcon;
