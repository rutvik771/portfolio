import React, { useState } from "react";
import { workData } from "./Data";
import { Stepper } from "react-form-stepper";

export const Work = () => {
  const [currentStep, setCurrentStep] = useState<number>(3);

  const handleNextStep = async () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div id="work">
      <div className="main-content">
        <div>
          <h2 className="text-3xl font-bold">Where I’ve Worked </h2>
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
              size: "3em",
              circleFontSize: 14,
              labelFontSize: 14,
              borderRadius: 50,
              fontWeight: "700",
            }}
            className={"stepper"}
            stepClassName={"stepper__step"}
          />
          <Stepper activeStep={currentStep}>
            <div className="desiganation">
              {workData
                ?.filter((item) => {
                  return item.id === currentStep;
                })
                .map((item, index) => {
                  console.log(item, "item");

                  return (
                    <div key={index}>
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
          </Stepper>
          <div className="flex justify-between">
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
