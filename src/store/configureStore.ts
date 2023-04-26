import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { moduleApi } from './query';
import { appDataNameReducer, appDataReducer } from './app';

const rootReducer = combineReducers({
	[appDataNameReducer]: appDataReducer,
	[moduleApi.reducerPath]: moduleApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moduleApi.middleware),
	devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
