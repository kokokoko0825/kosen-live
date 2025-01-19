import { vars } from "app/styles/theme.css";
import { style } from "@vanilla-extract/css";

//const cubicBezier = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

export const hero = style({
    display: "flex",
    //width: "1440px",
    height: "1024px",
    flexDirection: "column",
    alignItems: "center",
    background: "url(/images/poster2.jpg)",
    backgroundColor: vars.color.background,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
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
    /*
    overflow: 'hidden',
    transform: 'translate(-100%, 0)',
    transition: `transform ${cubicBezier} 0.5s`,
    */
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