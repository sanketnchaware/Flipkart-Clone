import { useState, useMemo } from "react";

const Home = () => {
  const [params, setParams] = useState({
    amount: 100000,
    period: 5,
    rate: 6.5,
    interest: 0,
    emi: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: value,
    });
  };

  const findInterest = () => {
    const total_interest = params.amount * (params.rate / 100) * params.period;
    return total_interest.toFixed(2);
  };
  const findEMI = (principal, interestRate, tenure) => {
    let ratePerMonth = interestRate / 12;
    let tenureInMonths = tenure * 12;
    let emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureInMonths)) /
      (Math.pow(1 + ratePerMonth, tenureInMonths) - 1);
    return emi.toFixed(2);
  };

  useMemo(() => {
    const total_interest = findInterest();
    const total_emi = findEMI(100000, 0.01, 1);
    setParams({ ...params, interest: total_interest, emi: total_emi });
  }, [params.amount, params.rate, params.period]);

  return (
    <div>
      <div>
        <div className="flex justify-around m-6 -md:flex-col">
          <div className="flex w-1/2 p-4 shadow-2xl -md:w-full">
            <div className="w-3/4 mx-auto">
              <div className="flex justify-between w-full pt-4 mt-4 -md:flex-col">
                <div className="font-semibold -md:m-2">Loan Amount</div>
                <div>
                  <span className="px-3 font-medium rounded-md bg-bluish -md:m-2 bg-opacity-20">
                    ₹ {params.amount ?? 0}
                  </span>
                </div>
              </div>
              <div className="w-full pt-4 mt-4 -md:pt-2 -md:mt-2">
                <input
                  name="amount"
                  type="range"
                  className="w-full text-black cursor-pointer"
                  min={100000}
                  max={10000000}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-between pt-4 mt-4 -md:flex-col">
                <div className="font-semibold -md:m-2">
                  Rate of interest (p.a)
                </div>
                <div>
                  <span className="px-3 font-medium rounded-md bg-bluish -md:m-2 bg-opacity-20">
                    {params.rate ?? 0}%
                  </span>
                </div>
              </div>
              <div className="pt-4 mt-4 -md:pt-2 -md:mt-2">
                <input
                  name="rate"
                  type="range"
                  className="w-full text-black cursor-pointer"
                  min={1}
                  max={30}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-between pt-4 mt-4 -md:flex-col">
                <div className="font-semibold -md:m-2">Loan Tenure</div>
                <div>
                  <span className="px-2 font-medium rounded-md bg-bluish -md:m-2 bg-opacity-20">
                    {params.period ?? 0}yrs
                  </span>
                </div>
              </div>
              <div className="pt-4 mt-4 -md:pt-2 -md:mt-2">
                <input
                  name="period"
                  type="range"
                  className="w-full text-black cursor-pointer"
                  min={1}
                  max={30}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="w-5/12 pt-8 shadow-2xl -md:w-full">
            <div className="flex justify-between px-12 py-2 -md:px-4">
              <div>Monthly EMI</div>
              <div className="font-bold">{params?.emi ?? 0}</div>
            </div>
            <div className="flex justify-between px-12 py-2 -md:px-4">
              <div>Principal Amount</div>
              <div className="font-bold">₹ {params?.amount ?? 0}</div>
            </div>
            <div className="flex justify-between px-12 py-2 -md:px-4">
              <div>Total interest</div>
              <div className="font-bold">₹ {params?.interest ?? 0}</div>
            </div>
            <div className="flex justify-between px-12 py-2 -md:px-4">
              <div>Total amount</div>
              <div className="font-bold">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
