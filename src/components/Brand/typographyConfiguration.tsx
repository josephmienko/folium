import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/system/createTheme/createTheme";

import { PaletteMode, createTheme } from "@mui/material";


function pxToRem(pxValue: number): string {

  return `${pxValue / 16}rem`;

}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hed1Home: true;
    hed1HoverHome: true;
    hed2Home: true;
    hed4Home: true;
    chipLabel1Home: true;
    chipLabel2Home: true;
    timeStamp1Home: true;
    timeStamp2Home: true;
    byLineLinkHome: true;
    byLineHome: true;
    accredditedByHome: true;
    ctaHome: true;
    hed1Post: true;
    chipLabel1Post: true;
    timeStamp1Post: true;
    byLinePost: true;
    bodyCopyPost: true;
    captionPost: true;
    navItem: true;
    navItemHover: true;
    navItemMenu: true;
    navItemMenuHover: true;
    menuItem: true;
    menuItemHover: true;
  }
}

export const getDesignTokens = (mode: PaletteMode) => {
  return {

    typography: {
      hed1Home: {
        color: "#2f2f2f",
        fontFamily: "Playfair, serif",
        fontSize: pxToRem(20), 
        lineHeight: pxToRem(30),
        fontWeight: 400,
      },
      hed1HoverHome: {
        color: "#999999",
        fontFamily: "Playfair, serif",
        fontSize: pxToRem(20), 
        lineHeight: pxToRem(30),
        fontWeight: 400,
      },
      hed2Home: {
        color: "#000000",
        fontFamily: "Josefin, sans-serif",
        fontSize: pxToRem(64),
        lineHeight: pxToRem(64),
        fontWeight: 400,
      },
      hed4Home: {
        color: "#000000",
        fontFamily: "Josefin, sans-serif",
        fontSize: pxToRem(32),
        lineHeight: pxToRem(38),
        fontWeight: 400,
      },
      chipLabel1Home: {
        color: "#DCDCD8",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(13),
        lineHeight: pxToRem(13),
        textTransform: "uppercase",
        fontWeight: 400,
        letterSpacing: pxToRem(1),
      },
      chipLabel2Home: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(13),
        lineHeight: pxToRem(13),
        textTransform: "uppercase",
        fontWeight: 400,
        letterSpacing: pxToRem(1),
      }, 
      timeStamp1Home: {
        color: "#DCDCD8",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: pxToRem(14),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(2),
      },
      timeStamp2Home: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(26),
        fontWeight: 400,
        textTransform: "uppercase",
      },
      byLineLinkHome: {
        color: "#0505a6",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(1),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      byLineHome: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(18),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      accredditedByHome: {
        color: "#DCDCD8",
        fontFamily: "Playfair, serif",
        fontSize: pxToRem(12), 
        lineHeight: pxToRem(18),
        fontWeight: 400,
        fontStyle: "italic",
        letterSpacing: pxToRem(1),
      }, 
      ctaHome: {
        color: "#999999",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(21),
        fontWeight: 400,
      },
      hed1Post: {
        color: "#333333",
        fontFamily: "Playfair, serif",
        fontSize: pxToRem(50),
        lineHeight: pxToRem(50),
        fontWeight: 400,
      },
      chipLabel1Post: {
        color: "#2f2f2f",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(13),
        lineHeight: pxToRem(13),
        textTransform: "uppercase",
        fontWeight: 400,
        letterSpacing: pxToRem(1),
      },
      timeStamp1Post: {
        color: "#666666",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(1),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      byLinePost: {
        color: "#333333",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(16),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      bodyCopyPost: {
        color: "#000000",
        fontFamily: "Cardo, serif",
        fontSize: pxToRem(20),
        lineHeight: pxToRem(32),
        fontWeight: 400,
      }, 
      captionPost: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(11),
        lineHeight: pxToRem(11),
        fontWeight: 400,
      },
      ctaPost: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(12),
        lineHeight: pxToRem(21),
        fontWeight: 400,
      },
      navItem: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: pxToRem(60),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      navItemHover: {
        color: "#0505a6",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: pxToRem(60),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      navItemActive: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: pxToRem(60),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      navItemActiveHover: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: pxToRem(60),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(1),
      },
      menuItem: {
        color: "#000000",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(16),
        lineHeight: pxToRem(54),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(2),
      },
      menuItemHover: {
        color: "#0505a6",
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(16),
        lineHeight: pxToRem(54),
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: pxToRem(2),
      },
      h1: {
        fontSize: pxToRem(96),
        fontFamily: "Roboto, sans-serif",
        fontWeight: 475,
        lineHeight: pxToRem(96),
        marginBlockEnd: pxToRem(8),
      },
      h2: {
        fontSize: pxToRem(28),
        marginBottom: "1em",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 200,
        lineHeight: pxToRem(36),
      },
      h3: {
        fontSize: pxToRem(30),
        marginBottom: ".75em",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 700,
        lineHeight: pxToRem(36),
      },
      h4: {
        fontSize: "1.5em",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: "1.5em",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 500,
        lineHeight: .95,         
      },
      h6: {
        fontSize: "1.5em",
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,  
      },
      subtitle1: {
        fontSize: "1.5em",
        fontFamily: 'Roboto, sans-serif',
        padding: "12px 0",
        display: "block",
      },
      subtitle2: {
        fontSize: "1.5em",
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 100,
        letterSpacing: 0.15,
      },
      body1: {
        fontFamily: 'Cardo, serif',
        fontSize: pxToRem(21),
        color: "#404040",
        fontWeight: 400,
        lineHeight: "1.5em",
        marginBottom: "1em",
      },
      body2: {
        fontFamily: 'Lato, sans-serif',
        fontSize: "1.375em",
        color: "#404040",
        fontWeight: 400,
      },
      caption: {
        fontSize: "1.25em",
        fontFamily: 'Cardo, serif',
        fontWeight: 400,
      },
      overline: {
        fontFamily: 'Lato, sans-serif',
        fontSize: "1.25em",
        fontWeight: 400,
      },
      button: {
        fontFamily: "Lato, sans-serif",
        fontSize: pxToRem(16),
        lineHeight: pxToRem(54),
        fontWeight: 400,
        letterSpacing: pxToRem(2),  
        borderRadius: "2rem",
        padding: "0.5rem 1rem",
        color: "#fff",
      },
    },
    shape: {
      borderRadius: 8,
    },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          maxWidth: "65ch",
        },
      },
    },
  },
  };
};


export const typographyCustomizations: Components<Theme> = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'subtitle',
        subtitle2: 'subtitle',
        body1: 'p',
        body2: 'p',
        button: 'button',
      },
    },
  },
};
