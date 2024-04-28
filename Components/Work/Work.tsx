import React, { useState, useEffect } from "react";
import { workData } from "./Data";
import { Stepper } from "react-form-stepper";

export const Work = () => {
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  const handleNextStep = async () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div id="work">
      <div>
        <h2 className="heading">Where I’ve Worked </h2>
        <Stepper
          steps={[
            { label: "Jan 2022 - Apr 2022" },
            { label: "May 2022  - Jun 2022" },
            { label: "July 2022 - Sept 2023" },
            { label: "Aug 2023 - present" },
          ]}
          activeStep={currentStep}
          styleConfig={{
            key: currentStep,
            activeBgColor: "#61892f",
            activeTextColor: "#fff",
            inactiveBgColor: "#fff",
            inactiveTextColor: "#61892f",
            completedBgColor: "#fff",
            completedTextColor: "#2b7cff",
            size: width < 576 ? "1.3em" : "3em",
            circleFontSize: width < 576 ? 8 : 14,
            labelFontSize: width < 576 ? 8 : 14,
            borderRadius: 50,
            fontWeight: "700",
          }}
          className={"stepper"}
          stepClassName={"stepper__step"}
        />
        <Stepper activeStep={currentStep}>
          <div className="desiganation-container">
            <div className="desiganation">
              {workData
                ?.filter((item) => {
                  return item.id === currentStep;
                })
                .map((item, index) => {
                  return (
                    <div key={index} className="desiganation-break">
                      <div className="">
                        <p className="text-lg">
                          <span className="font-bold">{item?.designation}</span>
                          <span className="secondary-text opacity-80 font-bold ">
                            {item?.companyName}
                          </span>
                        </p>
                        <p className="text-sm">{item?.duration}</p>
                      </div>
                      <div className="desiganation-detail">
                        {item?.work?.map((item, index) => {
                          return (
                            <ul key={index}>
                              <li>{item}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-between pt-8">
              <button
                className="primary-btn"
                disabled={currentStep == 0}
                onClick={handlePrevStep}
              >
                Previous
              </button>
              <button
                className="primary-btn"
                disabled={currentStep == 3}
                onClick={handleNextStep}
              >
                Next
              </button>
            </div>
          </div>
        </Stepper>
      </div>
    </div>
  );
};
