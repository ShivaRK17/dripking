import React, { useState } from "react";
import {motion} from 'motion/react'

const Calculator = () => {
  const [monthlyCost, setMonthlyCost] = useState(100);
  const [efficiencyGain, setEfficiencyGain] = useState(40);
  const [systemCost, setSystemCost] = useState(1000);
  const [timeFrame, setTimeFrame] = useState(12);

  const calculateROI = () => {
    const monthlySavings = (efficiencyGain / 100) * monthlyCost;
    const breakEvenMonths = Math.ceil(systemCost / monthlySavings);
    const totalSavings = monthlySavings * timeFrame;
    return { monthlySavings, breakEvenMonths, totalSavings };
  };

  const result = calculateROI();

  const sliderStyle = "w-full accent-green-400";

  return (
    <div id="calculator" className="montserrat-med z-50 relative mt-10 p-6 bg-[url('/servicesbg.jpg')] bg-white/50 bg-contain bg-blend-color-burn">
      <h2 className="text-3xl font-extrabold text-green-500 mb-8 text-center">
        💧 Drip Irrigation ROI Calculator
      </h2>

      <div className="flex lg:flex-row gap-6 flex-col items-center justify-between">
        {/* Sliders Section */}
        <div className="space-y-6 lg:w-1/2 w-full">
          {/* Monthly Cost */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              💸 Monthly Water Cost: <span className="font-bold text-lg text-sky-500">${monthlyCost}</span>
            </label>
            <input
              type="range"
              min={10}
              max={1000}
              step={10}
              value={monthlyCost}
              onChange={(e) => setMonthlyCost(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>

          {/* Efficiency Gain */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              🌿 Efficiency Gain: <span className="font-bold text-lg text-sky-500">{efficiencyGain}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={90}
              step={1}
              value={efficiencyGain}
              onChange={(e) => setEfficiencyGain(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>

          {/* System Cost */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              ⚙️ Drip System Cost: <span className="font-bold text-lg text-sky-500">${systemCost}</span>
            </label>
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={systemCost}
              onChange={(e) => setSystemCost(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>

          {/* Time Frame */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              📅 Evaluation Period: <span className="font-bold text-lg text-sky-500">{timeFrame} months</span>
            </label>
            <input
              type="range"
              min={3}
              max={60}
              step={1}
              value={timeFrame}
              onChange={(e) => setTimeFrame(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>
        </div>

        {/* ROI Summary Section */}
        {/* <div className="p-6 bg-white border border-green-200 shadow-inner h-fit">
          <h3 className="text-2xl font-bold text-sky-500 mb-4 text-center">📊 ROI Summary</h3>
          <ul className="space-y-4 text-green-700 text-lg">
            <li>
              💵 <span className="font-semibold">Monthly Savings:</span>{" "}
              ${result.monthlySavings.toFixed(2)}
            </li>
            <li>
              ⏱ <span className="font-semibold">Break-even Time:</span>{" "}
              {result.breakEvenMonths} month{result.breakEvenMonths > 1 ? "s" : ""}
            </li>
            <li>
              📈 <span className="font-semibold">Total Savings over {timeFrame} months:</span>{" "}
              ${result.totalSavings.toFixed(2)}
            </li>
          </ul>
        </div> */}
        <div className="bg-black/80 lg:w-1/2 w-full h-full items-center text-white p-8 md:p-12 rounded-2xl max-w-lg relative flex">
          {/* Animated Vertical Line */}
          <motion.div
            className="w-[2px] bg-[#ddd] mr-6"
            initial={{ height: 0 }}
            whileInView={{ height: '120px' }}
            transition={{ duration: 1 }}
          />

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white">
              ROI Summary
            </p> <br />
            {/* <p className="text-white mt-4 text-xs md:text-sm leading-relaxed montserrat-thin font-normal">
              Built with precision engineering, Dripking delivers a consistent discharge system designed to prevent clogs and interruptions. Whether you're watering crops, landscapes, or home gardens, our technology ensures smooth operation, dependable performance, and long-lasting durability—giving you confidence in every drop.
            </p> */}
            <ul className="space-y-4 text-white text-sm md:text-base">
            <li>
              💵 <span className="">Monthly Savings:</span>{" "}
              <span className="font-bold text-lg">${result.monthlySavings.toFixed(2)}
            </span></li>
            <li>
              ⏱ <span className="">Break-even Time:</span>{" "}
             <span className="font-bold text-lg"> {result.breakEvenMonths} month{result.breakEvenMonths > 1 ? "s" : ""}
            </span></li>
            <li>
              📈 <span className="">Total Savings over {timeFrame} months:</span>{" "}
              <span className="font-bold text-lg">${result.totalSavings.toFixed(2)}
            </span></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
