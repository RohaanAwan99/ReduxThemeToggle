const initialStore = {
  theme: 'light',
};

export const ThemeReducer = (state=initialStore, action) => {
  switch(action.type) {
    case "TOGGLETHEME":
      let newTheme = '';

      if (state.theme == 'light')
        newTheme = 'dark';
      else 
        newTheme = 'light';

      return {...state, theme: newTheme };

    default: 
      return state;
  }
};