var default_ = require("./default");


// The dataset plugin config is applied like so:
// all is the base layer
// if dataset config exists:
//   dataset config is overlaid on all
// else:
//   default config is overlaid on all
module.exports = {
  default: default_,
  all: default_
};
