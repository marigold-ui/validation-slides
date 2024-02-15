import "@code-hike/mdx/styles";
import { MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";

import Slides from "./slideshow.mdx";
import { Example } from "./example";
import { Frame } from "./Frame";

const App = () => (
  <div data-theme="b2b" className="content">
    <div className="content-item">
      <Slides />
    </div>
    <div className="content-item" style={{ maxWidth: 700 }}>
      <Frame>
        <MarigoldProvider theme={theme}>
          <Example />
        </MarigoldProvider>
      </Frame>
    </div>
  </div>
);

export default App;
