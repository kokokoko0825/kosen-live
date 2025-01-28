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

export const information = style({
    display: "flex",
    padding: "0.625rem 6.25rem",
    alignItems: "flex-start",
    gap: "1.25rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "3.75rem 0.625rem 2rem 0.625rem",
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

export const infoContainer = style({
    display: "flex",
    padding: "6.25rem 0.625rem 6.25rem 6.25rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1.875rem",
    //alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "0.625rem 0.625rem 3.75rem 0.625rem",
            justifyContent: "center",
            gap: "0.75rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            padding: "1rem 0.625rem 5rem 3.125rem",
            justifyContent: "center",
            gap: "1.25rem",
        }
    }
});

export const list = style({
    display: "flex",
    width: "auto",
    padding: "0.625rem 0.625rem 0.625rem 0.625rem",
    alignItems: "center",
    gap: "4.375rem",
    borderBottom: `1px solid ${vars.color.lightText}`,
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            alignItems: "flex-start",
            gap: "0.625rem",
            alignSelf: "stretch",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            alignItems: "center",
            gap: "2.375rem",
            alignSelf: "stretch",
        }
    }
});

export const date = style({
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.5rem", //4.688rem
    fontWeight: 400,
    background: "linear-gradient(90deg, #00FF2A 0%, #EEFF00 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "0.75rem",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "1.5rem",
        }
    }
});

export const textEng = style({
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

export const newest = style({
    color: "#FF07B5",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "2.5rem",  //1.875rem
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