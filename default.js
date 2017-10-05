module.exports = {
  // extra views to include from app/plugins/
  included_views: {
    "snorkel-plugins-demo/area" : "Area Chart",
  },

  // make a list of excluded views,
  // like "time", "area", etc.
  // can be a list or a config similar to included_views
  excluded_views: [ ],

  // if exclusive views exists, we will only show this set of views
  // for this dataset
  //
  // example: {
  //    "snorkel-plugins-demo/area" : "area",
  //    "time" : "Time Series",
  //    "samples" : "Samples"
  // }
  exclusive_views: {

  },
};
