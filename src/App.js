import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import 'react-chat-widget/lib/styles.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/menu/header.component";
import Profile from "./pages/profile/profile.component";

import { checkUserSession } from "./redux/user/user.actions";
import { MainContainer } from "./components/main/mainContainer";

import { GlobalStyle } from "./globalStyles";
import CartMenu from "./components/cart/cart-menu/cart-menu.component";

// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import SHOP_DATA from './redux/shop/shop.data';
const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	});
	return (
		<MainContainer>
			<GlobalStyle />
			<Header />
			<div style={{ paddingTop: "80px", width: "80%", height: "100%" }}>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="shop/*" element={<ShopPage />} />
					<Route path="signin" element={<SignInAndSignUpPage />} />
					<Route path="checkout" element={<CheckoutPage />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</div>
		</MainContainer>
	);
};

export default App;
