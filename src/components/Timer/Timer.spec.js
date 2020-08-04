import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer.jsx';

describe('Timer', () => {
  let container;
  
  beforeEach(() => (container = shallow(<Timer />)));
  
  it("should render a <div />", () => {
    expect(container.find("div").length).toBegreaterThanOrEqual(1);
  });
});
