import { memo as ReactMemo } from 'react';

const ButtonCustom = ReactMemo(({ onClick, label }) => {
	return (
		<button {...{ onClick }}>
			{console.log(`${label} - re-rendering\n\n`)}
			{label}
		</button>
	);
});
export default ButtonCustom;
