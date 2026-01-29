import { createSelector } from "@reduxjs/toolkit";
import { selectTrucks } from "../truck/selectors";

export const selectLocationFilter = (state) => state.filters.location;
export const selectFormFilter = (state) => state.filters.form;
export const selectFeaturesFilter = (state) => state.filters.features;
export const selectFilters = (state) => state.filters;

export const selectFilteredTrucks = createSelector(
  [selectTrucks, selectLocationFilter, selectFormFilter, selectFeaturesFilter],
  (
    trucks = [],
    locationFilter = "",
    formFilter = null,
    featuresFilter = [],
  ) => {
    if (!Array.isArray(trucks) || trucks.length === 0) return [];
    const loc = (locationFilter || "").toLowerCase();
    const feats = Array.isArray(featuresFilter) ? featuresFilter : [];

    // console.log("formFilter from state:", formFilter);
    // console.log("featuresFilter from state:", featuresFilter);

    console.log("FILTERS:", {
      loc,
      feats,
    });
    return trucks.filter((truck) => {
      const truckLocation = (truck.location || "").toLowerCase();
      const matchesLocation = truckLocation.includes(loc);
      const matchesForm = formFilter ? truck.form === formFilter : true;
      const matchesFeatures = feats.every((feature) => {
        if (feature === "automatic")
          return truck["transmission"] === "automatic";
        return Boolean(truck[feature]);
      });
      return matchesLocation && matchesForm && matchesFeatures;
    });
  },
);
