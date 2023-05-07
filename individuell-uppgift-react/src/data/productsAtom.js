import { atom } from "recoil";

export const productState = atom ({
	key: "productState",
	default: []
})

export const isLoggedInState = atom({
	key: 'isLoginState',
	default: false
})
export const isMobileState = atom({
	key: 'isMobileState',
	default: false
})

export const searchState = atom({
	key: "searchState",
	default: "",
  });
export const savedProducts = atom({
	key: "savedProductsState",
	default: "",
  });
export const cartState = atom({
	key: "cartState",
	default: [],
  });