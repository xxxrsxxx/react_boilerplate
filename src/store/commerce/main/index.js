import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { $_get } from "../../../utils/api";

const initialState = {
  dummy: [],
};

/**
 * @description 초기 비동기 데이터 로드
 * @type {AsyncThunk<Promise<*>, void, {}>}
 */
export const loadDummy = createAsyncThunk(
  "Main/loadDummy",
  async (config, thunkAPI) => {
    const params = { ...config };
    const res = await $_get("", params);
    return res.data;
  }
);

export const mainSlice = createSlice({
  name: "Main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadDummy.fulfilled, (state, action) => {
      state.dummy = action.payload;
    });
  },
});
export const {} = mainSlice.actions;

export function HookMainView() {
  const MainStoreState = useSelector((state) => state.commerce.Main);

  const dispatch = useDispatch();

  return {
    MainStoreState,
    dispatch,
  };
}

export default mainSlice.reducer;
