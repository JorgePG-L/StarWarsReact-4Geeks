const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cartas : []
		},
		actions: {
			addToCart : (payload) => {
				const store = getStore();
				setStore({ cartas: [...store.cartas, payload]})				
			},

			getFromCart : () => {
				const store = getStore(); 
				console.log(store)
			}
		}
	};
};

export default getState;
