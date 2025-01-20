import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const page2 = style({
    display: "flex",
    width: "100vw",
    height: "auto",
    padding: "0.625rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.625rem",
    backgroundColor: vars.color.background,
    boxSizing: "border-box",
    //marginLeft: "calc(-50vw + 50%)",
});

export const performers = style({
    display: "flex",
    padding: "0.625rem 6.25rem",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 720px)': {
            padding: "3.75rem 0.625rem 0.625rem 0.625rem",
            justifyContent: "center",
        }
    }
});

export const title = style({
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "6.563rem",
    fontWeight: 400,
    background: "linear-gradient(90deg, #EEFF00 0%, #FF07B5 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '@media': {
        'screen and (max-width: 720px)': {
            fontSize: "32px",
        }
    }
});

export const list = style({
    display: "flex",
    padding: "0.625rem 0.625rem 3.75rem 0.625rem",
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
        'screen and (max-width: 720px)': {
            fontSize: "24px",
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
        'screen and (max-width: 720px)': {
            fontSize: "24px",
        }
    }
});

export const bandList = style({
    display: "flex",
    padding: "0.625rem 0.625rem 1.875rem 0.625rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.625rem",
    '@media': {
        'screen and (max-width: 720px)': {
            padding: "0 0.625rem",
        }
    }
});

export const textEng = style({
    color: vars.color.lightText,
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.813rem",
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 720px)': {
            fontSize: "20px",
        }
    }
});

export const textJap = style({
    color: vars.color.lightText,
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "1.875rem",
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 720px)': {
            fontSize: "16px",
        }
    }
});

export const andMore = style({
    color: vars.color.lightText,
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.25rem",
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 720px)': {
            fontSize: "14px",
        }
    }
});