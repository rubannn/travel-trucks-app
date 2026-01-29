export const LOCATION_FILTER = {
  name: "location",
  type: "text",
  label: "Location",
  placeholder: "City",
  icon: "#Map",
};

export const VEQUIPMENT_FILTER = {
  name: "features",
  type: "checkbox",
  title: "Vehicle equipment",
  options: [
    { key: "AC", label: "AC", svg: "ac", value: "AC", },
    { key: "transmission", label: "Automatic", svg: "diagram", value: "automatic" },
    { key: "kitchen", label: "Kitchen", svg: "cup-hot", value: "kitchen", },
    { key: "TV", label: "TV", svg: "tv", value: "TV", },
    { key: "bathroom", label: "Bathroom", svg: "bath", value: "bathroom", },
  ],
};

export const VTYPE_FILTER = {
  name: "form",
  type: "radio",
  title: "Vehicle type",
  options: [
    { key: "panelTruck", label: "Van", svg: "van", value: "panelTruck", },
    { key: "fullyIntegrated", label: "Fully Integrated", svg: "full", value: "fullyIntegrated", },
    { key: "alcove", label: "Alcove", svg: "alcove", value: "alcove", },
  ],
};

export const FILTERS_CONFIG = [LOCATION_FILTER, VEQUIPMENT_FILTER, VTYPE_FILTER];
