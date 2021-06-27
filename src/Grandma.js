import React, { useState, useEffect } from 'react';
import Mom from './Mom';
import Baby from './Baby';

function Grandma() {
	const [ mama, setMama ] = useState('hi mama');
	const [ baby, setBaby ] = useState('hi baby');

	return (
		<div>
			<h1>Grandma</h1>
            <h2>{mama}{baby}</h2>
			<Mom mama={mama} setMama={setMama} baby={baby} setBaby={setBaby} />
		</div>
	);
}
export default Grandma;
