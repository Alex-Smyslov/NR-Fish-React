import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getImagesList } from '../../store/app/effects';

export const PostPage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const goBack = () => {
		navigate('/posts');
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
			<span>{`Hi i am post number - ${params.id ?? ''} `}</span>
			<button onClick={goBack}>Go back</button>
			<button onClick={goForward}>Go forward</button>
		</div>
	);
};
