import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Directory from "../directory/directory.component";

it("should match snapshot", () => {
  const wrapper = shallow(<Directory />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
