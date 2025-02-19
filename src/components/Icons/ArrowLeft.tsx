import React from 'react';

const ArrowLeft = ({ ...props }) => {
	return (
		<svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.28511 14.7071C7.89459 15.0976 7.26142 15.0976 6.8709 14.7071L2.8709 10.7071C2.48037 10.3166 2.48037 9.68342 2.8709 9.29289L6.8709 5.29289C7.26142 4.90237 7.89459 4.90237 8.28511 5.29289C8.67564 5.68342 8.67564 6.31658 8.28511 6.70711L5.99222 9L17.578 9C18.1303 9 18.578 9.44771 18.578 10C18.578 10.5523 18.1303 11 17.578 11L5.99222 11L8.28511 13.2929C8.67564 13.6834 8.67564 14.3166 8.28511 14.7071Z'
				fill='black'
			/>
		</svg>
	);
};

export default ArrowLeft;
