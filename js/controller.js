import * as model from "./model.js";
import view from "./view/resipeView.js";

const modelControl = async function () {
  const inputValue = view.getInputValue();
  const obj = await model.renderHtml(inputValue);
  view.rendir(obj);
};

const init = function () {
  view.addHandleFunc(modelControl);
};
init();
