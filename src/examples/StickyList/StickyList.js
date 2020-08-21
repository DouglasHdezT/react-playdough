import React from 'react';
import './StickyList.css';

import StickyCard from '../../components/StickyCard/StickyCard';

const users = ["DouglasHdezT", "Nexxtor", "Petrlr14", "CarlosDubon"];

const StickyList = props => {
    const cards = [];

	for (let i = 0; i < 5; i++) { 
		const author = Math.floor(Math.random() * 4);
		cards.push(<StickyCard key={i} title={`Card ${i + 1}`} position={i} author={users[author]}/> );
	}

    return (
        <section className="sticky-list">
            { cards }
        </section>
    );        
}

export default StickyList;