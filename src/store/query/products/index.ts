import { moduleApi } from '..';

export const extendedApi = moduleApi.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<null, any>({
			query: () => ({
				url: '/catalog',
				method: 'GET',
			}),
		}),
	}),

	overrideExisting: false,
});

export const { useGetProductsQuery } = extendedApi;
