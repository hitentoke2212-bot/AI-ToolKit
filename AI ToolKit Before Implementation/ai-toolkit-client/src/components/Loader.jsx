const Loader = ({ label = "Preparing workspace" }) => (
  <div className="loader" role="status" aria-label={label}>
    <span className="spinner" />
  </div>
);

export default Loader;
