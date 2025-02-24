const domain =
  import.meta.env.VITE_NODE_ENV === "production"
    ? "https://backend.rakib-dev.com"
    : "http://localhost:5000";

export default domain;
