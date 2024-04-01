import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="300" cy="200" r="50" />
    <rect x="150" y="150" width="200" height="10" />
    <rect x="100" y="200" width="300" height="10" />
    <rect x="75" y="50" width="500" height="10" />
  </ContentLoader>
);

export default MyLoader;