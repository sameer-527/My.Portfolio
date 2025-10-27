import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/site/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">404</h1>
          <p className="text-lg text-foreground/70 mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:no-underline">Return to Home</a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
