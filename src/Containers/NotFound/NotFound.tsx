import React from 'react';
import BtnMain from '../../components/btnMain/BtnMain';
import error from './image/404.png'
import styles from './NotFound.module.scss';

const NotFound = () => {
	return (
		<main>
			<section className={styles.notFound}>
				<div className={styles.notFound__container}>
					<img src={error} alt="Error" />
					<BtnMain to="/" text={'Main Page'} />
				</div>
			</section>
		</main>
	);
};

export default NotFound;
