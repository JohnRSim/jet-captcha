/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./jet-captcha-view.html', './jet-captcha-viewModel', 'text!./component.json', 'css!./jet-captcha-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('jet-captcha', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);