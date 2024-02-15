import "@code-hike/mdx/styles";
import { MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";

import Slides from "./slideshow.mdx";
import { Example } from "./example";
import { Frame } from "./Frame";

const App = () => (
  <div
    data-theme="b2b"
    style={{ maxWidth: 900, margin: "0 auto", fontFamily: "sans-serif" }}
  >
    <Slides />
    <Frame>
      <MarigoldProvider theme={theme}>
        <Example />
      </MarigoldProvider>
    </Frame>
  </div>
);

export default App;
