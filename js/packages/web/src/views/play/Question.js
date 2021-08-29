import React, { useMemo, useState } from 'react';
import { Row, Button, Modal, ButtonProps } from 'antd';
import { ArtCard } from './../../components/ArtCard';
import { useUserArts } from '../../hooks';
import Masonry from 'react-masonry-css';
import { SafetyDepositDraft } from '../../actions/createAuctionManager';

function Question (props){

    const questions = [
        "Q1- Cool question No. One",
        "Q2- Cool question No. Two",
        "Q3- Cool question No. Three",
        "Q4- Cool question No. Four",
    ]

    let question = null

    if(props.questionNumber === "Q1")
        question = questions[0]
    else if(props.questionNumber === "Q2")
        question = questions[1]
    else if(props.questionNumber === "Q3")
        question = questions[2]
    else if(props.questionNumber === "Q4")
        question = questions[3]

    let items = useUserArts();

    const [visible, setVisible] = useState(false);

    const open = () => {
        setVisible(true);
    };

    const close = () => {
        setVisible(false);
    };

    const confirm = () => {
        close();
      };
    
    const onSelect = () =>{
        
    }
      
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      };
    if(visible===false){
        return(
            <div className="question-container">
                <h1 style={{color: "black"}}>{question}</h1>
                <div className="answer-container">
                    <div className="header-container">
                        <div className="header-box">NFT</div>
                        <div className="header-box">Raisel</div>
                        <div className="header-box">Percent</div>
                        <div className="header-box">Proof Link</div>
                    </div>
                    <div className="option-container">
                        <div className="option-box"><img className="cat" src="https://gifbook.io/assets/nyancat-trans.gif"/></div>
                        <div className="option-box"><input placeholder='' /></div>
                        <div className="option-box"><input placeholder='' /></div>
                        <div className="option-box"><input placeholder='' /></div>
                    </div>
                    <div className="option-container">
                        <div className="option-box"><img className="cat" src="https://gifbook.io/assets/nyancat-trans.gif"/></div>
                        <div className="option-box"><input placeholder='' /></div>
                        <div className="option-box"><input placeholder='' /></div>
                        <div className="option-box"><input placeholder='' /></div>
                    </div>
                </div>
                <button className="nftBtn" onClick={open}>Place NFT</button>
            </div>
        )
    }
    else if(visible===true){
        return(
            <Modal
        visible={true}
        onCancel={close}
        onOk={confirm}
        width={1100}
        footer={null}
      >
        <Row className="call-to-action" style={{ marginBottom: 0 }}>
          <h2>Select the NFT you want to sell</h2>
          <p style={{ fontSize: '1.2rem' }}>
            Select the NFT that you want to sell copy/copies of.
          </p>
        </Row>
        <Row
          className="content-action"
          style={{ overflowY: 'auto', height: '50vh' }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map(m =>{
                    return(
                        <ArtCard
                            key={m.metadata.pubkey}
                            pubkey={m.metadata.pubkey}
                            preview={false}
                            //onClick={onSelect}
                            //className={isSelected ? 'selected-card' : 'not-selected-card'}
                        />
                    )
                })
              
            } 
          </Masonry>
        </Row>
        <Row>
          <Button
            type="primary"
            size="large"
            onClick={confirm}
            className="action-btn"
          >
            Confirm
          </Button>
        </Row>
      </Modal>
        )
    }
    
}

export default Question;