"use client";
import { useContext } from "react";

import { PersonContext } from "@/context/PersonContext";

export const usePerson = () => {
  const context = useContext(PersonContext);

  if (context === undefined) {
    throw new Error("usePerson debe usarse con un PersonProvider");
  }

  return context;
};
