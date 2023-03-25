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
				return store.cartas.length
			}
		}
	};
};

export default getState;
