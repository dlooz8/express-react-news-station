import ContentLoader from "react-content-loader";

const LoaderBanner = () => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 1536 452"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" width="360" height="452" rx="12" />
        <rect x="390" y="0" width="360" height="452" rx="12" />
        <rect x="780" y="0" width="756" height="452" rx="12" />
    </ContentLoader>
);

const LoaderPopularNews = () => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 1536 390"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" width="360" height="390" rx="12" />
        <rect x="392" y="0" width="360" height="390" rx="12" />
        <rect x="786" y="0" width="360" height="390" rx="12" />
        <rect x="1176" y="0" width="360" height="390" rx="12" />
    </ContentLoader>
);

const LoaderHotSport = () => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 1536 472"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" width="756" height="472" rx="12" />
        <rect x="780" y="0" width="756" height="224" rx="12" />
        <rect x="780" y="248" width="756" height="224" rx="12" />
    </ContentLoader>
);

const LoaderLatestNews = () => (
    <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 1536 690"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" width="756" height="214" rx="12" />
        <rect x="780" y="0" width="756" height="214" rx="12" />
        <rect x="0" y="238" width="756" height="214" rx="12" />
        <rect x="780" y="238" width="756" height="214" rx="12" />
        <rect x="0" y="476" width="756" height="214" rx="12" />
        <rect x="780" y="476" width="756" height="214" rx="12" />
    </ContentLoader>
);

export { LoaderBanner, LoaderPopularNews, LoaderHotSport, LoaderLatestNews };
