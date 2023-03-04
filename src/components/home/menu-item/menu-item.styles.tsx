import styled from 'styled-components';
import { backgroundColor, textColor } from '../../../redux/theme/styles.const';

type MenuItemContainerType = {
  size?: number;
}
export const MenuItemContainer = styled.div<MenuItemContainerType>`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${textColor};
	margin: 0 7.5px 15px;
  @media screen and (max-width: 800px) {
    overflow: ;
	  flex: 1 1 auto;
    min-width: 100%;
    width: 50px;
    padding: 0;
  }


	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

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
type BackgroundImageType = {
  imageUrl: string;
}
export const BackgroundImageContainer = styled.div<BackgroundImageType>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${textColor};
  background-color: ${backgroundColor};
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: ${textColor};
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
