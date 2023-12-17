import { createContext, Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

type AppContextValues = {
  registrationFormData: regustrationFormDataType;
  setRegistrationFormData: Dispatch<SetStateAction<regustrationFormDataType>>;
  postDetails: () => void;
  postDetailsRequest: requestType;
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

type requestType = {
  error: string | null;
  data: any;
  isLoading: boolean;
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

  const [postDetailsRequest, setPostDetailsRequest] = useState<requestType>({
    error: null,
    isLoading: false,
    data: null,
  });

  // ROuter
  const navigate = useNavigate();

  // Requests
  const postDetails = () => {
    setPostDetailsRequest({
      error: null,
      isLoading: true,
      data: null,
    });
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}`, {
        name: registrationFormData.name,
        email: registrationFormData.email,
        ticket_type: registrationFormData.ticketType,
        suggestions: registrationFormData.suggestions,
      })
      .then((res) => {
        console.log(res);
        setPostDetailsRequest({
          isLoading: false,
          data: res?.data?.detail,
          error: null,
        });
        navigate(`/account-details`);
      })
      .catch((err) => {
        console.log(err);
        setPostDetailsRequest({
          isLoading: false,
          data: null,
          error: err.response.data.detail,
        });
      });
  };

  return (
    <AppContext.Provider
      value={{
        registrationFormData,
        setRegistrationFormData,
        postDetails,
        postDetailsRequest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
