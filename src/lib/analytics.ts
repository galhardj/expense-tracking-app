import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-8LTT29Y24V"; // Replace with your actual GA4 Measurement ID

export const initGA = (): void => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (): void => {
  ReactGA.send("pageview");
};

export const logEvent = (
  category: string,
  action: string,
  label: string
): void => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
