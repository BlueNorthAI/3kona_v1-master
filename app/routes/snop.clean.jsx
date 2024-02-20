import React from "react";
import TruckSummary from "../data/truck";

const SnopClean = (props) => {
  const data2 = {
    truck: {
      type: "Multi Axle Truck",
      purchaseCost: 2300000,
      mileageWithLoad: 4.5,
      mileageWithoutLoad: 5,
      maintenance: 168000,
      capacity: 60,
      annualDistance: 84000,
      tires: 10,
      dieselPrice: 76,
      loadingUnloadingToll: 800,
      driverAndCleanerExpenses: 300000,
    },
    trips: [
      {
        origin: "Chennai",
        destination: "Kolkata",
        distance: 2279,
        fixedCostPerTrip: 309,
        adminCostPerTrip: 245,
        variableCostPerTrip: 21640,
        costPerBike: 1518,
        revenuePerBike: 1676,
      },
    ],
  };

  return (
    <div className="clean-snop">
      <TruckSummary data={data2} />
    </div>
  );
};

export default SnopClean;
