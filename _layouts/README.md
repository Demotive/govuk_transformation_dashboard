Transformation Dashboard & GOV.UK Template
==========================================

Check out https://github.com/alphagov/govuk_template then use the Liquid generator to get base files.

From the generated package, ```/views/layouts govuk_template.html``` should be moved into ```/_layouts```

### Path changes required in govuk_template.html

* CSS: ```{{ site.govuk_template_assets }}/stylesheets/foo.css``` becomes ```{% asset_path foo.css %}```
* JS: ```{{ site.govuk_template_assets }}/javascripts/govuk-template.js``` becomes ```{% asset_path govuk-template.js %}```
* Image paths remain the same

### Title and meta tag changes

Detail them here

### Assets

Assets from the generated package are split between ```/_assets_pipline``` and ```/assets```

Within ```/_assets_pipeline/govuk_template``` place

* Entire ```javascripts``` folder
* ```stylesheets``` css files **ONLY**

Within ```/assets```

* ```fonts``` folder from ```stylesheets```
* ```images``` folder from ```stylesheets```
* all ```external-links``` image files into the **root** of ```/assets```

**TODO:** write a .sh to do this stuff?
