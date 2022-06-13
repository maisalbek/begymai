import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API2, API3 } from "./consts/Consts";

export const context = createContext();
export const useDContext = () => {
  return useContext(context);
};
const INIT_STATE = {
  doctors: [],
  data: [],
  objForEdit: null,
  objForPush: null,
  doctorName: [],
  doctorName2: [],
  analyze: [],
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
    case "GET_ANALYZE":
      return {
        ...state,
        analyze: action.payload.data,
      };
    case "GET_OBJ_FOR_EDIT":
      return {
        ...state,
        objForEdit: action.payload.data,
      };
    case "GET_OBJ_FOR_PUSH":
      return {
        ...state,
        objForPush: action.payload.data,
      };
    case "GET_NAMES":
      return {
        ...state,
        doctorName: action.payload,
      };
    case "GET_NAMES2":
      return {
        ...state,
        doctorName2: action.payload,
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

      let filteredArr = res.data.reduce((acc, current) => {
        let x = acc.find((item) => item.category === current.category);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      dispatch({
        type: "GET_NAMES",
        payload: filteredArr,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getNames2 = async (obj) => {
    try {
      let res = await axios.get(API);
      let newArr = res.data.filter((item) => {
        return item.category === obj.category;
      });
      dispatch({
        type: "GET_NAMES2",
        payload: newArr,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getAnalyze = async () => {
    try {
      let res = await axios.get(API3);
      dispatch({
        type: "GET_ANALYZE",
        payload: res,
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
  const addAnalyze = async (obj) => {
    try {
      await axios.post(API3, obj);
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
  const idForPush = async (id) => {
    try {
      let res = await axios.get(`${API}/${id}`);
      dispatch({
        type: "GET_OBJ_FOR_PUSH",
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
        objForPush: state.objForPush,
        doctorName: state.doctorName,
        doctorName2: state.doctorName2,
        analyze: state.analyze,
        getAnalyze,
        idForPush,
        getDoctor,
        getData,
        addDoctor,
        addData,
        delDoctor,
        delData,
        idForEdit,
        saveDoctor,
        getNames,
        getNames2,
        addAnalyze,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
