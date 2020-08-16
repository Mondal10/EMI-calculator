import React from 'react';
import renderer from 'react-test-renderer';
import PaymentDistribution from './PaymentDistribution';

describe("Payment Distribution Snapshot", () => {
  const monthlyDistribution = [
    { "monthlyInterest": 8750, "monthlyPrinciple": 58500, "balance": 941500 },
    { "monthlyInterest": 8238, "monthlyPrinciple": 59012, "balance": 882488 },
    { "monthlyInterest": 7722, "monthlyPrinciple": 59528, "balance": 822960 },
    { "monthlyInterest": 7201, "monthlyPrinciple": 60049, "balance": 762911 },
    { "monthlyInterest": 6675, "monthlyPrinciple": 60575, "balance": 702336 },
    { "monthlyInterest": 6145, "monthlyPrinciple": 61105, "balance": 641231 },
    { "monthlyInterest": 5611, "monthlyPrinciple": 61639, "balance": 579592 },
    { "monthlyInterest": 5071, "monthlyPrinciple": 62179, "balance": 517413 },
    { "monthlyInterest": 4527, "monthlyPrinciple": 62723, "balance": 454690 },
    { "monthlyInterest": 3979, "monthlyPrinciple": 63271, "balance": 391419 },
    { "monthlyInterest": 3425, "monthlyPrinciple": 63825, "balance": 327594 },
    { "monthlyInterest": 2866, "monthlyPrinciple": 64384, "balance": 263210 },
    { "monthlyInterest": 2303, "monthlyPrinciple": 64947, "balance": 198263 },
    { "monthlyInterest": 1735, "monthlyPrinciple": 65515, "balance": 132748 },
    { "monthlyInterest": 1162, "monthlyPrinciple": 66088, "balance": 66660 },
    { "monthlyInterest": 583, "monthlyPrinciple": 66667, "balance": 0 }
  ];

  const yearlyDistribution = [
    { "yearlyInterest": 70210, "yearlyPrinciple": 736790, "balance": 263210 },
    { "yearlyInterest": 5783, "yearlyPrinciple": 263217, "balance": 0 }
  ];

  it('Payment Distribution rendered successfully', () => {
    const tree = renderer.create(<PaymentDistribution monthlyDistribution={monthlyDistribution} yearlyDistribution={yearlyDistribution} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
