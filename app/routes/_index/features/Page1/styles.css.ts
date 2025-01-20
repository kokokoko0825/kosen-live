import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const page1 = style({
    display: "flex",
    width: "100vw",
    height: "1024px",
    padding: "0 0.625rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.25rem",
    backgroundColor: vars.color.background,
    boxSizing: "border-box",
    //marginLeft: "calc(-50vw + 50%)",
    '@media': {
        'screen and (max-width: 720px)': {
            height: "844px",
        }
    }
});

export const about = style({
    display: "flex",
    padding: "3.125rem 6.25rem 3.125rem 6.25rem",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 720px)': {
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
        'screen and (max-width: 720px)': {
            fontSize: "32px",
        }
    }
});

export const date = style({
    display: "flex",
    padding: "0.625rem 0.625rem 0.625rem 18.75rem",
    alignItems: "center",
    gap: "1.875rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 720px)': {
            padding: "0.625rem 3.75rem",
        }
    }
});

export const open = style({
    display: "flex",
    padding: "0.625rem 0.625rem 0.625rem 18.75rem",
    alignItems: "flex-start",
    gap: "1.875rem",
    flexShrink: 0,
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 720px)': {
            padding: "0.625rem 3.75rem",
        }
    }
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
    padding: "0.625rem 0.625rem 0.625rem 18.75rem",
    alignItems: "flex-start",
    gap: "1.875rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 720px)': {
            padding: "0.625rem 3.75rem",
        }
    }
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
        'screen and (max-width: 720px)': {
            fontSize: "24px",
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
        'screen and (max-width: 720px)': {
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
        'screen and (max-width: 720px)': {
            fontSize: "12px",
        }
    }
});