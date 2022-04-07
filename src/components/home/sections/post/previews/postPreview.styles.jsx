import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: 300px;
	overflow: hidden;
	flex: 1 1 auto;
	display: grid;
	align-items: initial;
	justify-content: space-between;
	margin: 0 10px 15px;
  border-radius: 10px;
  border: solid 1px #cfe8e4;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: unset;
  justify-content: space-between;
`;


export const BackgroundImageContainer = styled.div`
  width:  ${({ size }) => `${size}%`};
  height:  ${({ size }) => `${size}%`};
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  width:100%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  opacity: 0.7;
  position: relative;
`;

export const ContentTitle = styled.h3`
  width: 100%;
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  position: relative;
`;

export const ContentSubtitle = styled.p`
  font-weight: lighter;
  font-size: 16px;
`;