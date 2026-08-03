import { Link } from "react-router-dom";

const NotFoundPage = () => <section className="not-found container"><span className="section-kicker">404</span><h1>That workspace does not exist.</h1><Link className="primary-button" to="/">Return to dashboard</Link></section>;

export default NotFoundPage;
