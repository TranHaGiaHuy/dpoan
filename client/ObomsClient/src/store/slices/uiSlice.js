import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toasts: [],
  activeModals: [],
  isNavOpen: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addToast: (state, action) => {
      const id = Date.now().toString();
      state.toasts.push({ ...action.payload, id });
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
    showModal: (state, action) => {
      const id = Date.now().toString();
      state.activeModals.push({ ...action.payload, id });
    },
    hideModal: (state, action) => {
      state.activeModals = state.activeModals.filter((modal) => modal.id !== action.payload);
    },
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addToast, removeToast, showModal, hideModal, toggleNav, setLoading } = uiSlice.actions;
export const uiReducer = uiSlice.reducer; 