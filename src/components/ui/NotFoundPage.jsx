import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center vh-100 text-center ${styles.wrapper}`}>
      <h1 className={`fw-bold display-1 mb-3 ${styles.code}`}>404</h1>
      <h2 style={{   
            color: "white",       
          }}className="fw-semibold mb-2">Oops! Page Not Found</h2>
      <p style={{   
            color: "white",       
          }}className="text-muted mb-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className={`btn btn-dark rounded-pill px-4 py-2 ${styles.homeBtn}`}>
        <FaHome className="me-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
