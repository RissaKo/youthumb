import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Get Youtube Thumbnail From youtube : Youtube thumbnail downloader tool"
        description="Download Youtube Thumbnail in high-quality from YouTube videos : If You Looking to get a thumbnail from YouTube? Check out our YouTube thumbnail downloader tool, which allows you to easily download high-quality thumbnails from any YouTube video."
        canonical="https://www.getthumbnailfromyoutube.com"
        openGraph={{
          url: "https://www.getthumbnailfromyoutube.com",
          title: "Get Thumbnail From Youtube",
          description="Download Youtube Thumbnail in high-quality from YouTube videos : If You Looking to get a thumbnail from YouTube? Check out our YouTube thumbnail downloader tool, which allows you to easily download high-quality thumbnails from any YouTube video."
          site_name: "Get Youtube Thumbnail From Youtube",
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
