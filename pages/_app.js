import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Get Youtube Thumbnail From Youtube Downloader"
        description="Youtube Thumbnail Downloader :Grab any youtube thumbnail video and save it to your device."
        canonical="https://www.getthumbnailfromyoutube.com"
        openGraph={{
          url: "https://www.getthumbnailfromyoutube.com",
          title: "Get Thumbnail From Youtube",
          description: "Get Thumbnail From Youtube you can Download high-quality thumbnails from YouTube videos.",
          site_name: "Get Youtube Thumbnail From Youtube",
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
