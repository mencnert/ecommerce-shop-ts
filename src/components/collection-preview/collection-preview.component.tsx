import React from "react";

import {
  CollectionItem,
  Item,
} from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

interface Props {
  title: string;
  items: Item[];
}

const CollectionPreview = ({ title, items }: Props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
