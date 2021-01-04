import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { CollectionItem } from "../collection-item/collection-item.component";

it("should match snapshot", () => {
  const data = {
    id: 1,
    name: "hello",
    price: 20,
    imageUrl: "url",
  };
  const wrapper = shallow(<CollectionItem {...data} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
