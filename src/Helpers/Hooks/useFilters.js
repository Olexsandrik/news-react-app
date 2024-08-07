import { useState } from "react";
export const useFilters = (func) => {
  const [filters, setFilters] = useState(func);

  const changeFilters = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilters };
};
