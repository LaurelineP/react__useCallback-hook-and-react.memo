import { useState, useCallback } from 'react';

import ButtonCustom from './components/ButtonCustom';
import RadioGroup from './components/RadioGroup';
import Title from './components/Title';

import './App.scss';

export default function App() {
	const [nb, setNb] = useState(0);
	const [experience, setExperience] = useState('regularClick');
	const getNumber = () => Math.floor(Math.random() * 10);
	/**
	 * Handles changes between radio buttons
	 * @param {object} e - event
	 */
	const onRadioChange = (e) => {
		setExperience(e.target.value);
	};

	/** Handles click regularly */
	const handleClick = () => {
		console.log('[ NO USECALLBACK ] - Click');
		setNb(getNumber());
	};

	/**
	 * Click wrapped within useCallback
	 * - this would avoid re-creating the function within jsx element - to chance the onClick prop input
	 * - using React.memo for the ButtonCustom definition avoid to
	 * rerender the component if no input change --> console.log within would not be executed
	 */
	const handleClick_cb = useCallback((e) => {
		console.log('[ USECALLBACK ] - Click within useCallBack');
		setNb(getNumber());
	}, []);

	return (
		<div className="App">
			{/** Intro */}
			<Title text="Understand useCallBack and React.memo" />

			{/** Project's experiences */}
			<div id="description">
				<RadioGroup {...{ experience }} onChange={onRadioChange} />
				{experience === 'regularClick' ? (
					<ButtonCustom onClick={handleClick} label="Regular Click" />
				) : (
					<ButtonCustom
						onClick={handleClick_cb}
						label="UseCallBack Click"
					/>
				)}
			</div>

			{/** Dummy action's result */}
			<p>
				{' '}
				Action applie on click :
				<b>
					<u>{nb}</u>
				</b>
			</p>
		</div>
	);
}
