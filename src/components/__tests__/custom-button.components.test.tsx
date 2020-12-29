import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import CustomButton from "../custom-button/custom-button.component";

describe("Test button", () => {
  it("should click", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <CustomButton type="button" isGoogleSignIn={true} onClick={onClick} />
    );
    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("snapshots", () => {
  it('is type "button" and is goole sign in', () => {
    const wrapper = shallow(
      <CustomButton type="button" isGoogleSignIn={true} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('is type "submit" and is not goole sign in', () => {
    const wrapper = shallow(
      <CustomButton type="submit" isGoogleSignIn={false} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
