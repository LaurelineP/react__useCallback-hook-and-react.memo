import { useState, useCallback } from 'react';

import ButtonCustom from './components/ButtonCustom';
import RadioGroup from './components/RadioGroup';
import Intro from './components/Intro';

import './App.scss';

export default function App() {
	const [nb, setNb] = useState(0);
	const [experience, setExperience] = useState('regularClick');
	const getNumber = () => Math.floor(Math.random() * 10);

	const onRadioChange = (e) => {
		console.log('e', e);
		setExperience(e.target.value);
	};

	// Regular click cb
	const click = (e) => {
		console.log('click');
		setNb(getNumber());
	};

	/**
	 * Click wrapped within useCallback
	 * - this would avoid re-creating the function within jsx element - to chance the onClick prop input
	 * - using React.memo for the ButtonCustom definition avoid to
	 * rerender the component if no input change --> console.log within would not be executed
	 */
	const clickCB = useCallback((e) => {
		console.log('click cb');
		setNb(getNumber());
	}, []);

	return (
		<div className="App">
			<Intro text="Understand useCallBack and React.memo" />
			<div id="description">
				<RadioGroup {...{ experience }} onChange={onRadioChange} />
				{experience === 'regularClick' ? (
					<ButtonCustom onClick={click} label="Regular Click" />
				) : (
					<ButtonCustom onClick={clickCB} label="UseCallBack Click" />
				)}
			</div>
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
