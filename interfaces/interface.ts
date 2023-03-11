export interface ITheme {
  palette?: {
    primary?: {
      main?: string;
    };
  };

  customError?: {
    main?: string;
    dark?: string;
  };
}

export interface IStylesNavbar {
  container: {
    display: string
    justifyContent: string
    position: 'absolute' | 'relative' | 'fixed'
    top: number
    right: number
    left: number
    padding: string
    alignItems: string
    height: number
  }
  imageLogo: {
    width: number
    height: number
  }
}

