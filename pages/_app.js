// IMPORTS
import "../styles/globals.css";
import Head from "next/head";
//imports nécessaires pour utiliser redux-persist:
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
// 1- Import du reducer
import users from '../reducers/users';

// Importez la fonction combineReducers
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Définissez le ou les reducer(s) de votre application avec la fonction combineReducers
const reducers = combineReducers( {users} );

// Utilisez une clé de stockage pour définir un nom à votre store à l’intérieur du local storage :
const persistConfig = { key: "hackatweet", storage };

//Mettez ensuite à jour le contenu de votre store avec la fonction configureStore :
const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

// Transformez le store pour qu'il soit persistant
const persistor = persistStore(store);

function App({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
              
              <PersistGate persistor={persistor}>
                <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* SEO Meta Tags */}
                <meta name="description" content="social network" />
                <meta name="keywords" content="Tweet, social, network, chat" />
                </Head>
              
                <Component {...pageProps} />

              </PersistGate>

            </Provider>
        </>
    );
}

export default App;
