import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { TDispatch, TRootState } from "./store";

export const useTypedDispatch: () => TDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
