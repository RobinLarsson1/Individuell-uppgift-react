import { atom, atomFamily } from "recoil";

export const productState = atom({
	key: "productState",
	default: []
})

export const isLoggedInState = atom({
	key: 'isLoggedInState',
	default: false,
  });

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

export const userState = atom({
	key: 'userState',
	default: {
	  id: null,
	  username: null,
	  email: null,
	  isLoggedIn: false
	}
  });
  export const userListState = atom({
	key: 'userListState',
	default: []
  });
  

