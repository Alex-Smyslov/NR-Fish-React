import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getImagesList } from '../../store/app/effects';

export const ProductPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const goBack = () => {
		navigate('/catalog');
	};

	const goForward = () => {
		navigate('/');
	};

	useEffect(() => {
		if (params.id) {
			dispatch(getImagesList(params.id));
		}
	}, []);

	return (
		<div>
			<span>{`Hi i am product number - ${params.id ?? ''} `}</span>
			<button onClick={goBack}>Go back</button>
			<button onClick={goForward}>Go forward</button>
		</div>
	);
};
