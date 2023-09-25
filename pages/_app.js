import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Get Youtube Thumbnail From youtube : Youtube thumbnail downloader tool"
        description="Download YouTube thumbnails with our thumbnail grabber Tool. You can Get thumbnail From Youtube easily, whether you need to get a YouTube thumbnail for your video or simply want to grab a YouTube videos thumbnail for any purpose."
        canonical="https://www.getthumbnailfromyoutube.com"
        openGraph={{
          url: "https://www.getthumbnailfromyoutube.com",
          title: "Get Thumbnail From Youtube",
          description="Download Youtube Thumbnail in high-quality from YouTube videos."
          site_name: "Get Youtube Thumbnail From Youtube",
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
