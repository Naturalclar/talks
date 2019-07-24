import { configure, addParameters } from "@storybook/react";

const loadStories = () => {
  const req = require.context("../src", true, /\.story\.tsx?$/);
  req.keys().forEach(story => req(story));
};

addParameters({
  viewport: { defaultViewport: "iphone6" }
});

configure(loadStories, module);
