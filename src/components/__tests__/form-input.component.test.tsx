import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import FormInput from "../form-input/form-input.component";

const onChangeMock = jest.fn();

const props = {
  label: "asdf",
  name: "name",
  type: "email",
  handleChange: onChangeMock,
  value: "value",
  required: false,
};

it("calls onChange method", () => {
  const wrapper = shallow(<FormInput {...props} />);
  wrapper.find("input").simulate("change");
  expect(onChangeMock).toBeCalledTimes(1);
});

it("should match snapshot with label", () => {
  const wrapper = shallow(<FormInput {...props} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("should match snapshot without label", () => {
  const wrapper = shallow(<FormInput {...props} label={""} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("should match snapshot without value", () => {
  const wrapper = shallow(<FormInput {...props} value={""} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
