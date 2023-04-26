import React, { useEffect } from 'react';
import { PostCard } from '../../components/Posts/PostCard';
import styles from './PostsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../store/app/effects';
import {
	getProductsListIsError,
	getProductsListIsLoading,
	getProductsListIsSuccess,
	getProductsListSelector,
} from '../../store/app/selectors';

export const PostsPage = () => {
	const dispatch = useDispatch();

	const products = useSelector(getProductsListSelector);
	const isSuccess = useSelector(getProductsListIsSuccess);
	const isError = useSelector(getProductsListIsError);
	const isLoading = useSelector(getProductsListIsLoading);

	useEffect(() => {
		dispatch(getProductsList());
	}, []);

	return (
		<div className={styles.postList}>
			{isSuccess &&
				products.length > 0 &&
				products.map(({ title, id, description }) => <PostCard key={id} title={title} body={description} id={id} />)}
			{isLoading && <span>Loading...</span>}
			{isError && <span>Error</span>}
		</div>
	);
};
