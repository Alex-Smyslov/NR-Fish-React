import React from 'react';
import styles from './AboutStore.module.scss';


const AboutStore = () => {
	return (
		<div className={styles.aboutStore}>
			<div className={styles.aboutStore__img}>
				<img src="" alt="Store" />
			</div>
			<div className={styles.aboutStore__description}>
				<p className={styles.aboutStore__title}>Lorem, ipsum dolor.</p>
				<p className={styles.aboutStore__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel minima explicabo aspernatur a delectus quia asperiores? Esse, reiciendis fuga beatae repudiandae voluptatem laboriosam, recusandae, quaerat dolore id aspernatur quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel minima explicabo aspernatur a delectus quia asperiores? Esse, reiciendis fuga beatae repudiandae voluptatem laboriosam, recusandae, quaerat dolore id aspernatur quae.</p>
			</div>
		</div>
	);
};

export default AboutStore;