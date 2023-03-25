import React, { useState, FC, FormEvent, ChangeEvent } from 'react';
import { CategoryItem } from "../../../redux/shop/shop.types";
import { AddCartIcon, ButtonsContainer, CollectionFooterContainer, NameContainer, PriceContainer, ShareIcon, WishIcon } from './item-preview.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { selectWishItems } from '../../../redux/wishlist/wish.selectors';
import { addItem } from '../../../redux/cart/cart.actions';
import { addItemToWishList } from '../../../redux/wishlist/wish.actions';


type CollectionItemType = {
    item: CategoryItem;
}
const ActionComponent: FC<CollectionItemType> = ({ item }) => {

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems);

    const wishList = useSelector(selectWishItems);

    const isoncart = cartItems.filter(it => it.id == item.id).length == 1

    const issaved = wishList.filter(it => it.id == item.id).length == 1


    return (
        <CollectionFooterContainer>
            <ButtonsContainer>
                <AddCartIcon
                    isoncart={isoncart}
                    onClick={() =>
                        dispatch(addItem(item))
                    } />
                <WishIcon
                    issaved={issaved}
                    onClick={() =>
                        dispatch(addItemToWishList(item))
                        //console.log('Wish Icon')
                    } />
                <ShareIcon />
            </ButtonsContainer>
        </CollectionFooterContainer>
    )
}

export default ActionComponent;