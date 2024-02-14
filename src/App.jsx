import "@code-hike/mdx/styles";
import { MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";

import Content from "./slideshow.mdx";
import { Example } from "./example";

const App = () => (
  <div
    data-theme="b2b"
    style={{ maxWidth: 1024, margin: "0 auto", fontFamily: "sans-serif" }}
  >
    <Content />
    <MarigoldProvider theme={theme}>
      <Example />
    </MarigoldProvider>
  </div>
);

export default App;
