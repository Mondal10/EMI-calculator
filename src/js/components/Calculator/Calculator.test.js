import React from 'react';
import Calculator from './Calculator';

import { mount } from 'enzyme';

describe('Calculator functionality', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Calculator />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Loan Amount input box tests numbers", () => {
    // Loan Amount Inputbox Test:
    wrapper.find('input').at(0).simulate('change', { target: { name: 'LA', value: 2000000 } });
    expect(wrapper.find("input").at(0).prop('value')).toBe(2000000);
  });

  it("Loan Amount input box tests alphabets", () => {
    // Loan Amount Inputbox Test:
    wrapper.find('input').at(0).simulate('change', { target: { name: 'LA', value: 'test@123' } });
    // This also tests the isValidNumber() because it will return false and output will be empty string('')
    expect(wrapper.find("input").at(0).prop('value')).toBe('');
  });

  it("Interest Rate input box tests", () => {
    // Interest Rate Inputbox Test:
    wrapper.find('input').at(1).simulate('change', { target: { name: 'IR', value: 12.5 } });
    expect(wrapper.find("input").at(1).prop('value')).toBe(12.5);
  });

  it("Loan Tenure input box tests", () => {
    // Loan Tenure Inputbox Test:
    wrapper.find('input').at(2).simulate('change', { target: { name: 'LT', value: 240 } });
    expect(wrapper.find("input").at(2).prop('value')).toBe(240);
  });

  it("If other undefined input name is selected", () => {
    wrapper.find('input').at(2).simulate('change', { target: { name: 'dummy', value: 123 } });
  });

  // Test Calculation of EMI:
  it("Check EMI Calculation", () => {
    wrapper.find('input').at(0).simulate('change', { target: { name: 'LA', value: 1000000 } });
    wrapper.find('input').at(1).simulate('change', { target: { name: 'IR', value: 10.5 } });
    wrapper.find('input').at(2).simulate('change', { target: { name: 'LT', value: 120 } });

    // Check resulting values
    expect(wrapper.find('#loanEmi').first().text()).toBe('Loan EMI: ₹ 13,493');
    expect(wrapper.find('#totalInterest').first().text()).toBe('Total Interest Payable: ₹ 6,19,220');
    expect(wrapper.find('#totalPayment').first().text()).toBe('Total Payment: ₹ 16,19,220');
  });
});
