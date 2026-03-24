import React from 'react';

export function CardRow({ items, renderCard }) {
    return (
        <div className='card-row'>
            {items.map((item, idx) => (
                <div className='card' key={item.id || idx}>
                    {renderCard(item)}
                </div>
            ))}
        </div>
    );
}