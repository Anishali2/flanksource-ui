import React, { useState, createContext, useContext } from "react";
import { ConfigItem } from "../api/services/configs";

export type ConfigState = {
  data?: ConfigItem[];
  filteredData?: ConfigItem[];
};

export type ConfigPageState = {
  configState: ConfigState;
  setConfigState: React.Dispatch<React.SetStateAction<ConfigState>>;
};

const initialState: ConfigPageState = {
  configState: {
    data: [],
    filteredData: []
  },
  setConfigState: ({ ...props }) => {}
};

const ConfigPageContext = createContext(initialState);

export const ConfigPageContextProvider = ({
  children
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [configState, setConfigState] = useState({
    ...initialState.configState
  });
  return (
    <ConfigPageContext.Provider value={{ configState, setConfigState }}>
      {children}
    </ConfigPageContext.Provider>
  );
};

export const useConfigPageContext = () => {
  const context = useContext(ConfigPageContext);

  if (context === undefined) {
    throw new Error(
      "useConfigPageContext must be used within a ConfigPageContextProvider"
    );
  }
  return context;
};
