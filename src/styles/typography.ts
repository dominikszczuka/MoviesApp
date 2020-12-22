import { StyleSheet } from "aphrodite";

export const typography = StyleSheet.create({
  smallFont: {
    fontSize: "14px",
    fontWeight: 300,
    fontFamily: "Rajdhani, sans-serif",
  },
  normalFont: {
    fontSize: "18px",
    fontWeight: 500,
    fontFamily: "Rajdhani, sans-serif",
  },
  bigFont: {
    fontSize: "22px",
    fontWeight: 500,
    fontFamily: "Rajdhani, sans-serif",
  },
  logoFont: {
    fontSize: "42px",
    fontWeight: 700,
    fontFamily: "Rajdhani, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  buttonFont: {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily: "Rajdhani, sans-serif",
    textTransform: "uppercase",
  },
});
