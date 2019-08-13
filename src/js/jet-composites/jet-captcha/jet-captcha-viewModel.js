/**
  JSE-Captcha Component
  https://github.com/JSEcoin/captcha

  JET component using JSEcoin captcha for bot detection
*/
'use strict';

define([
  'knockout',
  //'ojL10n!./resources/nls/jet-captcha-strings',
  'ojs/ojlogger',
  './lib/jsecaptcha.amd.min' // https://github.com/JSEcoin/captcha/blob/master/dist/jsecaptcha.amd.min.js
], (
  ko,
  log,
  //componentStrings,
  //jCaptcha,
) => {
  log.option("level",  3);
  

  /**
   * Define global namespace for CCA component
   * Helps organise code
   * @namespace global
   */
  const global = (() => {
    return {
      /**
       * Additional properties
       */
      data: {},

      /**
       * Computed ko bindings stored and referenced here
       */
      computed: {
        initialized: ko.observable(false), // OCE init observer
      },

      /**
       * Created on initialise setup events/bindings
       * @param {*} context 
       */
      created(context) {
        log.info('[CCA][jet-captcha][created]', context, this);
        const self = this;

        //required: define init methods core functionality 
        if (typeof (self.methods) === 'function') {
          self.methods = self.methods();
        }

        //At the start of your viewModel constructor
        //const busyContext = oj.Context.getContext(context.element).getBusyContext();
        //const options = { 'description': 'CCA Startup - Waiting for data' };
        //self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;
        self.properties = context.properties;
        //self.res = componentStrings['jet-captcha'];

        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        //self.busyResolve();
      },

      /**
       * events
       */
      events() {
      },

      /**
       * Define methods
       */
      methods() {
        // Enables access to base props/data from methods
        const base = this;

        return {
          /**
           * passedCaptcha
           * @param {*} e 
           */
          passedCaptcha(e, composite) {
            console.log('passedCaptcha: ', e.detail, this);
            const eventParams = {
              bubbles : false,
              cancelable : false,
              detail : e.detail,
            };
            //Raise the custom event
            composite.dispatchEvent(new CustomEvent('passedCaptcha', eventParams));
          },
          /**
           * failedCaptcha
           * @param {*} e 
           */
          failedCaptcha(e, composite) {
            console.log('failedCaptcha: ', e.detail, this);
            const eventParams = {
              bubbles : false,
              cancelable : false,
              detail : e.detail,
            };
            //Raise the custom event
            composite.dispatchEvent(new CustomEvent('failedCaptcha', eventParams));
          },
        };
      },

      /**
       * connected
       */
      connected(context) {
        log.info('[CCA][jet-captcha][connected]', context, this);
        const self = this;


        /**
         * FYI
         * Additionally you can injet JSEcaptcha into the dom and connect with emitted events like this
         */
        /*
        const captcha = new jCaptcha({
          target: document.getElementById('captcha'),
          props: {
            size: 'L',
            theme: 'flat',
            debug: true,
            //captchaServer: 'http://localhost:346',
          }
        });

        //success response
        captcha.$on('success', ({ detail }) => {
          console.log('Success: ', detail);
        });

        //failed reponse
        captcha.$on('fail', ({ detail }) => {
          console.log('Fail: ', detail);
        });
        */
        
      },
      bindingsApplied(context) {
        log.info('[CCA][jet-captcha][bindingsApplied]', context, this);
        const self = this;
        
        //setup events from JSE-captcha passthrough
        context.element.querySelector('jse-captcha').$on('success', (e) => {
          self.passedCaptcha(e, context.element);
        });
        context.element.querySelector('jse-captcha').$on('fail', (e) => {
          self.failedCaptcha(e, context.element);
        });
      },
    };
  })();

  /**
   * Define jet-captcha model for view
   * @param {*} context 
   */
  function JETcaptcha(context) {
    log.info('[CCA][jet-captcha][Model]', context, this);

    const self = this;

    // Initialise setup param data in global obj
    global.created(context);

    // Define bindings on model
    Object.assign(self, global.computed);

    //setup view functions
    const modelFuncs = {
      passedCaptcha: global.methods.passedCaptcha,
      failedCaptcha: global.methods.failedCaptcha,
    };

    //assign functions to model
    Object.assign(self, modelFuncs);

    // Add CCA event listener support
    //self.connected = global.connected;
    self.bindingsApplied = global.bindingsApplied;
    //self.disconnect = global.disconnect;
    //self.propertyChanged = global.propertyChanged;
    //self.activated = global.activated;

    // Init when props defined - used with OCE components
    if (typeof (context.data) !== 'undefined') {
      context.data.then((properties) => {
        self.properties = properties;

        // Init
        self.initialized(true);
      });
    } else {
      // Define ctx props if any
      self.properties = context.properties || '';
    }
  }

  /*
    * Returns a constructor for the ViewModel so that the ViewModel is constructed
    * each time the view is displayed.  Return an instance of the ViewModel if
    * only one instance of the ViewModel is needed.
    */
  return JETcaptcha;
});
