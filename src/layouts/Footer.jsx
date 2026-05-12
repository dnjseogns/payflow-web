function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-left">
        © {new Date().getFullYear()} PAYFLOW. All rights reserved.
      </div>

      <div className="footer-right">
        v1.0.0
      </div>
    </footer>
  );
}

export default Footer;