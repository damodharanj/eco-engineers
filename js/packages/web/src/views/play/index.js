import Question from './Question.js';
import React, { useMemo, useState } from 'react';
import { Row, Button, Modal, ButtonProps } from 'antd';
import { ArtCard } from './../../components/ArtCard';
import { useUserArts } from '../../hooks';
import Masonry from 'react-masonry-css';
import { SafetyDepositDraft } from '../../actions/createAuctionManager';

export function PlayView(){

    const [selected, setSelected] = useState("Q1");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };

    
    return(
        <div className="game-page">
            <div className="game-page-container">
                <select className="qusetion-bar" size="4" onChange={changeSelectOptionHandler}>
                    <option className="question">Q1</option>
                    <option className="question">Q2</option>
                    <option className="question">Q3</option>
                    <option className="question">Q4</option>
                </select>
                <Question questionNumber={selected}/>
            </div>
        </div>
    )
}
