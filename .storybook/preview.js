import { addReadme } from "storybook-readme";
import { addDecorator, addParameters, configure } from "@storybook/react";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addParameters({
  options: {
    showPanel: false,
    panelPosition: "bottom",
  },
  readme: {
    codeTheme: "github",
  }
});

addDecorator(addReadme);

const loaderFn = () => {
  const e = [];  // [require("./entry.stories.tsx")];
  const req = require.context("../src/stories", true, /\.stories\.tsx$/);
  req.keys().forEach(fname => e.push(req(fname)));
  return e;
};

configure(loaderFn, module);
