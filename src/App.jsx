import "@code-hike/mdx/styles";
import { MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";

import Intro from "./intro.mdx";
import Validation from "./validation.mdx";
import Conclusion from "./conclusion.mdx";

import { Example } from "./example";
import { Slide, Frame } from "./components";

const App = () => (
  <Slide.Container>
    <Slide>
      <Intro />
    </Slide>
    <Slide style={{ maxWidth: 700 }}>
      <Frame>
        <MarigoldProvider theme={theme}>
          <Example />
        </MarigoldProvider>
      </Frame>
    </Slide>
    <Slide>
      <Validation />
    </Slide>
    <Slide>
      <Conclusion />
    </Slide>
    <Slide style={{ textAlign: "center" }}>
      <a className="cta" href="https://www.marigold-ui.io/concepts/validation">
        Read the documentation!
      </a>
    </Slide>
  </Slide.Container>
);

export default App;
