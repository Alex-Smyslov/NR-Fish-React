import './mobileFooter.css';

const MobileFooter = () => {
	return (
		< div className="mobile__wrapp" >
			<a className="phone mobile__phone" href="tel:+79960004574" >
				+7(996) 000 - 45 - 74
			</a>
			< br />
			<a className="mobile__btn modal--open" href="#!" >Оставить заявку</a>
		</div>
	);
};

export default MobileFooter;



