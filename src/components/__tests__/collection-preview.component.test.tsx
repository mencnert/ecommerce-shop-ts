import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import CollectionPreview from "../collection-preview/collection-preview.component";

it("should match snapshot", () => {
  const data = {
    title: "title",
    items: [
      {
        id: 1,
        name: "name",
        price: 20,
        imageUrl: "url",
      },
    ],
  };
  const wrapper = shallow(<CollectionPreview {...data} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
