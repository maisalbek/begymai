import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API2 } from "./consts/Consts";

export const context = createContext();
export const useDContext = () => {
  return useContext(context);
};
const INIT_STATE = {
  doctors: [],
  data: [],
  objForEdit: null,
  doctorName: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_DOCTORS":
      return {
        ...state,
        doctors: action.payload.data,
      };
    case "GET_DATA":
      return {
        ...state,
        data: action.payload.data,
      };
    case "GET_OBJ_FOR_EDIT":
      return {
        ...state,
        objForEdit: action.payload.data,
      };
    case "GET_NAMES":
      return {
        ...state,
        doctorName: action.payload,
      };
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getDoctor = async () => {
    try {
      let res = await axios.get(API);
      dispatch({
        type: "GET_DOCTORS",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      let res = await axios.get(API2);
      dispatch({
        type: "GET_DATA",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getNames = async () => {
    try {
      let res = await axios.get(API);
      let names = [];
      res.data.filter((item) => {
        names.push(
          [item.surname, item.name, item.midName, item.category].join(" ")
        );
      });
      dispatch({
        type: "GET_NAMES",
        payload: names,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addDoctor = async (obj) => {
    try {
      await axios.post(API, obj);
      getDoctor();
    } catch (err) {
      console.log(err);
    }
  };
  const addData = async (obj) => {
    try {
      await axios.post(API2, obj);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const delDoctor = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getDoctor();
    } catch (err) {
      console.log(err);
    }
  };
  const delData = async (id) => {
    try {
      await axios.delete(`${API2}/${id}`);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const idForEdit = async (id) => {
    try {
      let res = await axios.get(`${API}/${id}`);
      dispatch({
        type: "GET_OBJ_FOR_EDIT",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveDoctor = async (obj) => {
    try {
      await axios.patch(`${API}/${obj.id}`, obj);
      getDoctor();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <context.Provider
      value={{
        doctors: state.doctors,
        data: state.data,
        objForEdit: state.objForEdit,
        doctorName: state.doctorName,
        getDoctor,
        getData,
        addDoctor,
        addData,
        delDoctor,
        delData,
        idForEdit,
        saveDoctor,
        getNames,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
