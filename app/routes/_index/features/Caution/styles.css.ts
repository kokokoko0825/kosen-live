import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const caution = style({
    display: "flex",
    width: "100%",
    height: "auto",
    padding: "0.625rem 0.625rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.25rem",
    backgroundColor: vars.color.background,
    boxSizing: "border-box",
    '@media': {
        'screen and (max-width: 767px)': {
            //height: "844px",
        }
    }
});

export const toptitle = style({
    display: "flex",
    padding: "3rem 6.25rem",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            justifyContent: "center",
            padding: "1rem 6.25rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            padding: "5rem 0.625rem 5rem 3.125rem",
            justifyContent: "center",
        }
    }
});

export const title = style({
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "6.563rem",
    fontWeight: 400,
    background: "linear-gradient(90deg, #FF07B5 0%, #EEFF00 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "32px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "64px",
        }
    }
});

export const textContainer = style({
    display: "flex",
    padding: "0.625rem 0.625rem 10rem 8.75rem",
    alignItems: "flex-start",
    gap: "1.875rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "0.625rem 3.75rem 15rem 3.75rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            padding: "0.625rem 3.75rem 10rem 3.75rem",
        }
    }
});

export const text = style({
    color: vars.color.lightText,
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.5rem",
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "12px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "20px",
        }
    }
});

export const subText = style({
    color: vars.color.lightText,
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "1.875rem",
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "12px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "20px",
        }
    }
});