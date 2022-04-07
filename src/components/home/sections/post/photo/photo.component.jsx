import React from "react";
import { PhotoContaier } from "./photo.styled";
import { BackgroundImageContainer } from "../previews/postPreview.styles";
export const Photo = ({photo, size})=> 
{
    return(
    <PhotoContaier>
        <BackgroundImageContainer
            className='background-image'
            imageUrl={photo}
            size={size}
        />
    </PhotoContaier>
    );
}