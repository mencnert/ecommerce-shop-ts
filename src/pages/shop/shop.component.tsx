import React from "react";

// components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// data
import SHOP_DATA, { ShopDataModel } from "./shop.data";

type State = {
  collections: ShopDataModel[];
};

class ShopPage extends React.Component<{}, State> {
  state: State = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
