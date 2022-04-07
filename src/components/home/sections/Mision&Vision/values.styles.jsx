import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: 500px;
	width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
  flex-direction:column;
	align-items: center;
	justify-content: unset;
	margin: 0 7.5px 15px;
	overflow: hidden;
  filter: grayscale(80%);
  &:hover {
    filter: grayscale(50%);
    color: #d68b27;
  }

	&:first-child {
    margin-right: 0px;
  }
  &:after {
    content: "";
    display: block;
    background-color: #5b5555;
    height: 1px;
    margin: 20px 0;
    width: 70px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 120px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  shadow-box: 5px 5px 60px #5b5555; 
 
`;

export const ContentContainer = styled.div`
  height: 120px;
  width:180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 26px;
  color: white;
  text-shadow: 5px 5px 10px #000;
  `;

export const ContentSubtitle = styled.span`
  padding: 20px;
  text-align:center;
  font-weight: lighter;
  font-size: 16px;
`;
