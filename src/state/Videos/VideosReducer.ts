import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { AxiosGet } from '../../setup/axios/axiosClient';
import { VideosCategory, VideosType } from '../../enums/Videos';

interface IVideoState {
  key: any;
  status: string;
}
// Define the initial state using that type
const initialState = {
  key: '',
  status: '',
} as IVideoState;

interface IPayloadGetVideosTrailer {
  category: VideosCategory;
  videoId: number;
  type: VideosType;
}

export const GetVideosTrailer = createAsyncThunk(
  'videos/GetVideosTrailer',
  (payload: IPayloadGetVideosTrailer) => {
    const response = AxiosGet(`${payload.category}/${payload.videoId}/videos`);
    return response;
  }
);

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetVideosTrailer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetVideosTrailer.fulfilled, (state, action) => {
        const videoTrailer = action.payload.results.find(
          (movie: any) => movie.type === 'Trailer' && movie.official
        );
        state.key = videoTrailer.key;
        state.status = 'ok';
      })
      .addCase(GetVideosTrailer.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const {} = videosSlice.actions;

export default videosSlice.reducer;
