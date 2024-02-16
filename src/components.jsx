/* eslint-disable react/prop-types */

export const Frame = ({ children }) => (
  <div
    className="ch-codegroup"
    style={{
      "--ch-t-icon-foreground": "#424242",
      "--ch-t-editorGroupHeader-tabsBackground": "#f3f3f3",
    }}
  >
    <div className="ch-editor-frame">
      <div className="ch-frame-title-bar">
        <div className="ch-frame-buttons">
          <div className="ch-frame-button ch-frame-button-left"></div>
          <div className="ch-frame-button-space"></div>
          <div className="ch-frame-button ch-frame-button-middle"></div>
          <div className="ch-frame-button-space"></div>
          <div className="ch-frame-button ch-frame-button-right"></div>
        </div>
      </div>
      <div style={{ padding: 48, background: "#fff" }}>{children}</div>
    </div>
  </div>
);

export const Slide = ({ children, maxWidth }) => (
  <div className="slide" style={{ maxWidth }}>
    <div style={{ width: "100%" }}>{children} </div>
  </div>
);

const SlideContainer = ({ children }) => (
  <div data-theme="b2b" className="slide-container">
    {children}
  </div>
);

Slide.Container = SlideContainer;
