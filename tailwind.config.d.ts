declare type TailwindPurge = {
  enabled: boolean;
  content: Array<string>;
};

declare type TailwindScreen = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
declare type TailwindScreens = Record<TailwindScreen, string>;
declare type TailwindColors = Record<string, string>;

declare type TailwindTheme = {
  screens: TailwindScreens;
  extend: {
    colors: TailwindColors;
  };
};

declare type TailwindConfig = {
  mode: 'jit',
  purge: TailwindPurge,
  theme: TailwindTheme;
};

declare const tailwindConfig:TailwindConfig;

export default tailwindConfig;
