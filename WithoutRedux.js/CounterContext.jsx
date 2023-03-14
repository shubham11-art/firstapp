import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext({ count: 0 });

export default CounterContext;
