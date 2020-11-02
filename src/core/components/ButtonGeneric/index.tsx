import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonGeneric = ({ text }: Props) => (
    <button className="btn-dimension">
        <h5>{text}</h5>
    </button>

)

export default ButtonGeneric;