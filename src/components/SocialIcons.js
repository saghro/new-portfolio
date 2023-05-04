const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/saghro">
        <i className="fa-brands fa-github" aria-hidden="true" title="yuba' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/ayoub-saghro-1652ba228/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="yuba' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://instagram.com/yu_ba_s?igshid=YmMyMTA2M2Y=">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="yuba' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/ayoub.saghro.7?mibextid=LQQJ4d">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="yuba' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
