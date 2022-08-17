const getCSRFToken = () => {
  let csrfToken;

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    // individual cookies have their key and value separated by an equal sign
    const crumbs = cookie.split("=");
    if (crumbs[0].trim() === "csrftoken") {
      csrfToken = crumbs[1];
    }
  }
  return csrfToken;
};

export default getCSRFToken;
