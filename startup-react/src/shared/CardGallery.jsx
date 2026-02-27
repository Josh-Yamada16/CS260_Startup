import React from 'react';

// Generic card gallery component
export function CardGallery({ items, renderCard }) {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
      {items.map((item, idx) => (
        <div className="col" key={item.id || idx}>
          {renderCard(item)}
        </div>
      ))}
    </div>
  );
}
