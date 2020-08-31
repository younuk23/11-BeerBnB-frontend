import React, { Component } from "react";
import styled from "styled-components";
import MainContentsItems from "./MainContentsItems/MainContentsItems";
import ProductListMainFooter from "./ProductListMainFooter/ProductListMainFooter";
import mixin from "../../../../Styles/mixin";

export default class MainContents extends Component {
  render() {
    const { pageNumClickedAt, gotoHandler } = this.props;
    return (
      <article>
        <ContentsHeader>
          <WrapTripImg>
            <img
              width="40"
              height="40"
              alt=""
              src="https://a0.muscache.com/airbnb/static/packages/icon-uc-suitcase.2b1ee4bb.gif"
            />
          </WrapTripImg>
          <WrapTripDescription>
            <RemainingDayText>여행이 1일 남았습니다.</RemainingDayText>
            <FilterRecommend>
              지금 바로 예약할 수 있는 숙소를 보려면 즉시 예약 필터를
              사용하세요.
            </FilterRecommend>
          </WrapTripDescription>
        </ContentsHeader>
        <MainContentsItems />
        <ProductListMainFooter
          pageNumClickedAt={pageNumClickedAt}
          gotoHandler={gotoHandler}
        />
      </article>
    );
  }
}

const ContentsHeader = styled.div`
  ${mixin.flexSet("row", "flex-start")};
  padding-bottom: 20px;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const WrapTripImg = styled.div`
  height: 45px;
`;

const WrapTripDescription = styled.div`
  display: flex;
  margin-left: 16px;
`;

const RemainingDayText = styled.div`
  margin-right: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const FilterRecommend = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.fontColorGray};
`;