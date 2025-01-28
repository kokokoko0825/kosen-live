import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const countDown = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.625rem",
    padding: "15.625rem 1.25rem 1.25rem 1.25rem",
    boxSizing: "border-box",
    '@media': {
        'screen and (max-width: 767px)': {
            flexDirection: "column",
            padding: "21.875rem 0.625rem 0.625rem 0.625rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            padding: "18.75rem 1.25rem 1.25rem 1.25rem",
        }
    }
});

export const title = style({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
});

export const count = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: "1.875rem",
});

export const day = style({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "1.5rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "2.5rem",
        }
    }
});

export const text = style({
    color: vars.color.lightText,
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.5rem", //2.813rem
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "0.75rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "1.5rem",
        }
    }
});

export const countText = style({
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "6.563rem",
    fontWeight: 400,
    background: "linear-gradient( #E80505 0%, #FDD819 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "48px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "64px",
        }
    }
})

// #FF07B5 0%, #7E00FF 60%,  #EEFF00 100%