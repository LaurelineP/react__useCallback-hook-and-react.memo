export default function RadioGroup({ onChange, experience }) {
	return (
		<div id="container-radioGroup">
			<div className="input-group">
				<input
					type="radio"
					id="regularClick"
					name="regularClick"
					value="regularClick"
					checked={experience === 'regularClick' ? true : false}
					{...{ onChange }}
					onChange={onChange}
				/>
				<label htmlFor="regularClick">
					Experience a regular click handler{' '}
				</label>
			</div>

			<div className="input-group">
				<input
					type="radio"
					id="useCallbackClick"
					name="useCallbackClick"
					value="useCallbackClick"
					{...{ onChange }}
					checked={experience === 'useCallbackClick' ? true : false}
				/>
				<label htmlFor="useCallbackClick">
					Experience a React.useCallback click handler{' '}
				</label>
			</div>
		</div>
	);
}
