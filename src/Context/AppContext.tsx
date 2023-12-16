import { createContext, Dispatch, SetStateAction, useState } from "react";

type AppContextValues = {
  registrationFormData: regustrationFormDataType;
  setRegistrationFormData: Dispatch<SetStateAction<regustrationFormDataType>>;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

type regustrationFormDataType = {
  name: string;
  email: string;
  ticketType: string;
  suggestions: string;
};

export const AppContext = createContext({} as AppContextValues);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // States
  const [registrationFormData, setRegistrationFormData] =
    useState<regustrationFormDataType>({
      name: "",
      email: "",
      ticketType: "",
      suggestions: "",
    });

  return (
    <AppContext.Provider
      value={{
        registrationFormData,
        setRegistrationFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
