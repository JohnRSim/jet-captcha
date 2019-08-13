/**
  Copyright (c) 2017, 2019, JSEcoin Ltd.
  GNU GENERAL PUBLIC LICENSE Version 3
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