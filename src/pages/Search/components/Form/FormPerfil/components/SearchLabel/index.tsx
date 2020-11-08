import React from 'react';
import './styles.css';

type Props={
    text: string;
}

const SearchLabel = ({text}: Props) => (
    <div className="shape-label">
        <h5>{text}</h5>
        
    </div>
);

export default SearchLabel;