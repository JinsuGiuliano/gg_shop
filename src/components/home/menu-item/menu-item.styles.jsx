import styled from 'styled-components';
import { ReactComponent as EditIconSVG } from '../../../assets/edit.svg';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 7.5px 15px;
	overflow: hidden;
  filter: grayscale(80%);

	&:hover {
    filter: grayscale(50%);
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

export const BackgroundImageContainer = styled.div`
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
  position: absolute;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 40px;
  color: white;
  text-shadow: 5px 5px 10px #000 ;

`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 20px;
  color: white;
  text-shadow: 5px 5px 10px #000 ;
`;

export const EditIcon = styled(EditIconSVG)`
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 50px;
  & path {
      fill: ${({color}) => color };
    }
`;