# JET CAPTURE
CAPTCHA interface for bot detection

### DOM

```html
<jet-captcha size="S" debug="true" theme="flat" captcha-server="" on-failed-captcha="[[fail]]" on-passed-captcha="[[success]]"></jet-captcha>
```

## Attributes

- **size** controls the UI display
  - 'S' - Small
  - 'M' - Medium
  - 'L' - Large
- **theme** available themes
  - '' - dropshadow popup theme
  - 'flat' - flat simple theme
- **captchaServer** only used by devs for testing tweaking server side algorithms.
  - url of server (https://load.jsecoin.com)
- **debug** only used by devs for testing tweaking server side algorithms.
  - false - Production
  - true - Disable interactive options
- **on-failed-captcha** emitted failed captcha event
- **on-passed-captcha** emitted passed captcha event
 
## Usage
Refer to the oj.Composite jsdoc
http://www.oracle.com/webfolder/technetwork/jet/jsdocs/oj.Composite.html
