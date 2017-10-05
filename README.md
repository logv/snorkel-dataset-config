# snorkel dataset config

This repo contains per dataset configuration. For now, it allows one to specify
which views to enable on your datasets and will support more presenter features
in the future.

## installation

To use per dataset code configuration, clone this repo into `app/plugins` and
set the dataset_config_dir in config/config.js. If it works, all datasets
should now have a "area" test view at the bottom of the dropdown selector. 

To use the area view, the
[snorkel-plugins-demo](https://github.com/logv/snorkel-plugins-demo) has to be
installed under `app/plugins` as well.

## dataset config

When looking up the config for a dataset, snorkel will check in index.js for
the name of that dataset. If it exists, that info will be used to customize the
presentation and views for that dataset.

Two special config keywords, "default" and "all" explain how to apply configs
to your datasets.  All configs have the "all" config as their base config, with
either the __dataset specific__ config or the __default config__ overlaid on
top of it, but not both.
