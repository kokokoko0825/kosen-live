import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const page1 = style({
    display: "flex",
    width: "100%",
    height: "auto",
    padding: "0.625rem 0.625rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.25rem",
    backgroundColor: vars.color.background,
    boxSizing: "border-box",
    '@media': {
        'screen and (max-width: 767px)': {
            //height: "844px",
        }
    }
});

export const about = style({
    display: "flex",
    padding: "3rem 6.25rem",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
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

export const aboutContainer = style({
    display: "flex",
    padding: "2rem 0.625rem 0.625rem 0.625rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1.25rem",
    //alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "0.625rem 0.625rem 3rem 0.625rem",
            justifyContent: "center",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            padding: "0.625rem 0.625rem 5rem 0.625rem",
            justifyContent: "center",
        }
    }
});

export const date = style({
    display: "flex",
    alignItems: "center",
    gap: "1.875rem",
    alignSelf: "stretch",
});

export const open = style({
    display: "flex",
    alignItems: "flex-start",
    gap: "1.875rem",
    flexShrink: 0,
    alignSelf: "stretch",
});

export const openTime = style({
    display: "flex",
    padding: "0.625rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.625rem",
});

export const place = style({
    display: "flex",
    alignItems: "flex-start",
    gap: "1.875rem",
    alignSelf: "stretch",
});

export const placeContainer = style({
    display: "flex",
    padding: "0.625rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.625rem",
});

export const subTitle = style({
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "4.688rem",
    fontWeight: 400,
    background: "linear-gradient(90deg, #00FFFF 0%, #FF07B5 100%)",
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

export const text = style({
    color: vars.color.lightText,
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "4rem",
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