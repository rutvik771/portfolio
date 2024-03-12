import React, { useState } from "react";
import { workData } from "./Data";
import { Stepper } from "react-form-stepper";

export const Work = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentStep, setCurrentStep] = useState<number>(0);

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
              { label: "Feb 2021 - Mar 2021" },
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
                .map((item) => {
                  console.log(item, "item");

                  return (
                    <>
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
                    </>
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
      {/* <div className="flex justify-center px-4">
        <div>
          <h2 className="text-3xl font-bold">Where I’ve Worked </h2>
          <div className="main-content">
            <div className="btn-list">
              <button
                className={`btn ${activeStep === 0 ? "active-btn" : ""}`}
                type="button"
                onClick={() => {
                  setActiveStep(0);
                }}
              >
                CreatorX
              </button>
              <button
                className={`btn ${activeStep === 1 ? "active-btn" : ""}`}
                type="button"
                onClick={() => {
                  setActiveStep(1);
                }}
              >
                Stroke
              </button>
              <button
                className={`btn ${activeStep === 2 ? "active-btn" : ""}`}
                type="button"
                onClick={() => {
                  setActiveStep(2);
                }}
              >
                Arth
              </button>
              <button
                className={`btn ${activeStep === 3 ? "active-btn" : ""}`}
                type="button"
                onClick={() => {
                  setActiveStep(3);
                }}
              >
                Aakash
              </button>
            </div>
            <div className="desiganation">
              {workData
                ?.filter((item) => {
                  return item.id === activeStep;
                })
                .map((item) => {
                  return (
                    <>
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
                        {item?.work?.map((item) => {
                          return (
                            <ul>
                              <li>{item}</li>
                            </ul>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
