export const LOCATION_FILTER = {
  name: "location",
  type: "text",
  label: "Location",
  placeholder: "City",
  icon: "#Map",
};

export const FEATURES_FILTER = {
  name: "features",
  type: "checkbox",
  title: "Vehicle equipment",
  options: [
    { key: "transmission", label: "Automatic", svg: "diagram", value: "automatic" },
    { key: "kitchen", label: "Kitchen", svg: "cup-hot", value: "kitchen", },
    { key: "AC", label: "AC", svg: "ac", value: "AC", },
    { key: "TV", label: "TV", svg: "tv", value: "TV", },
    { key: "bathroom", label: "Bathroom", svg: "water", value: "bathroom", },
  ],
};

export const FORM_FILTER = {
  name: "form",
  type: "radio",
  title: "Vehicle type",
  options: [
    { key: "panelTruck", label: "Van", svg: "van", value: "panelTruck", },
    { key: "fullyIntegrated", label: "Fully Integrated", svg: "full", value: "fullyIntegrated", },
    { key: "alcove", label: "Alcove", svg: "alcove", value: "alcove", },
  ],
};

export const FILTERS_CONFIG = [LOCATION_FILTER, FEATURES_FILTER, FORM_FILTER];
