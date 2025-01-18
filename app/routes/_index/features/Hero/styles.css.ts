import { vars } from "app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const hero = style({
    display: "flex",
    width: "100vw",
    height: "1024px",
    flexDirection: "column",
    alignItems: "center",
    background: "url(/images/poster2.jpg)",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
});

export const yearConatainer = style({
    display: "flex",
    padding: "6.875rem 0.625rem 0 6.25rem",
    alignItems: "flex-end",
    gap: "0.625rem",
    alignSelf: "stretch",
});

export const yearText = style({
    color: vars.color.lightText,
    fontSize: "2.25rem",
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontWeight: 400,
});

export const titleContainer = style({
    display: "flex",
    padding: "0 0.625rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
});

export const title = style({
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "10.938rem",
    fontWeight: 400,
    background: "linear-gradient(90deg, #00FFFF 0%, #EEFF00 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
});

export const placeContainer = style({
    display: "flex",
    padding: "0 3.125rem",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.625rem",
    flexShrink: 0,
    alignSelf: "stretch",
});

export const placeText = style({
    color: vars.color.lightText,
    fontSize: "3rem",
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontWeight: 400,
});