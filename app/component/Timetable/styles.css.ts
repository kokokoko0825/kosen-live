import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const page3 = style({
    display: "flex",
    width: "100%",
    height: "auto",
    padding: "0.625rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.625rem",
    backgroundColor: vars.color.background,
    boxSizing: "border-box",
});

export const timetable = style({
    display: "flex",
    padding: "8rem 6.25rem",
    alignItems: "center",
    gap: "1.25rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "3.75rem 0.625rem 3rem 0.625rem",
            justifyContent: "center",
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

export const list = style({
    display: "flex",
    padding: "0.625rem 0.625rem 10rem 0.625rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.625rem",
});

export const subTitle8 = style({
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "4.688rem",
    fontWeight: 400,
    background: "linear-gradient(90deg, #FF07B5 0%, #3300FF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "24px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "36px",
        }
    }
});

export const subTitle9 = style({
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "4.688rem",
    fontWeight: 400,
    background: "linear-gradient(90deg, #FF070B 0%, #D000FF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "24px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "36px",
        }
    }
});


export const textEng = style({
    color: vars.color.lightText,
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.813rem",
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "20px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "32px",
        }
    }
});
