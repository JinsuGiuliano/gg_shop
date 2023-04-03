import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:15px;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width:100%;

  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
     & > div {
      width: 100%;
    margin-bottom: 5px;
  }
  }
`;
