export type Theme = {
  name: string;
  background: {
    layerOne: string;
    layerTwo: string;
    layerThree: string;
    layerFour?: string;
  };
  heading: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary?: string;
    negative: string;
  };

  button: {
    border: {
      primary: string;
      secondary: string;
      negative: string;
    };
    text: {
      primary: string;
      secondary: string;
      negative: string;
    };
    background: {
      primary: string;
      secondary: string;
      negative: string;
    };
  };

  common: {
    black: string;
    white: string;
    grey: string;
  };
};
