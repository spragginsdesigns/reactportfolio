import React from "react";

const HeaderButton = () => {
	return (
		<>
			<div className="mx-auto">
				<a href="#about">
					<button className="see">
						Contact Me Here
						<i className="fa fa-eye" aria-hidden="true"></i>
					</button>
				</a>
			</div>
		</>
	);
};

export default HeaderButton;
