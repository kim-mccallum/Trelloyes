import React from 'react'
import './List.css';
import Card from './Card';

function List(props){
    console.log(props);
    const renderCardArr = props.cardIds.map(function(cardId){
        let cardProps = props.store.allCards[cardId];
        return <Card title={cardProps.title} content={cardProps.content} key={cardId}/>
    });
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {renderCardArr}
            </div>

        </section>
    );
}

export default List;