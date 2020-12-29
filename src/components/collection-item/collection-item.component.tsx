import React from "react";

import "./collection-item.styles.scss";

export type Item = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const CollectionItem: React.FC<Item> = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
