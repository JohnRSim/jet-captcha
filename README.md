# JSE Captcha

**[JSECOIN](https://jsecoin.com/)** [THE FUTURE BLOCKCHAIN & ECOSYSTEM FOR ECOMMERCE AND DIGITAL ADVERTISING]

## WARNING

We are still working on the interface and know there are still a number of bugs and cross browser issues - please be patient..

## Overview
JET-Captcha is a webcomponent designed to be used with other Oracle JET projects. 
And provides first level of defence against automated bot requests.

JSEcoin servers provides the endpoint to query against to confirm the likelyhood of an automated request.


## Server-side Verification
It is essential that you also check the captcha has been completed using server-side code to protect your endpoints. We do this using the clients IP address (IPV4) and the following URL: 

```
https://api.jsecoin.com/captcha/check/:ipAddress/
```

## Demo
[JSE Captcha Demo](https://jsecoin.com/iCaptcha/).

## Technology:
The webcomponent is a JET component that incorporates a Svelte JS amd compatible library https://github.com/JSEcoin/captcha which is used to build the interface.

### 1. DOM
```html
 <jet-captcha size="S" debug="true" theme="flat" captcha-server=""></jet-captcha>
```

## Properties

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

## Events

- **success** - Emitted if user passes captcha bot detection tests.
- **fail** - Emitted if user fails captcha bot detection tests.

## Event Response (JSON)

#### Success
```json
{"success":1,"rating":87,"pass":true,"knownIP":true, "ip":"148.252.129.187"}
```

#### Fail
```json
{"success":1,"rating":0,"pass":false,"knownIP":false, "ip":"148.252.129.187"}
```

## Developers
### Quickstart

1. Install [Node.js](https://nodejs.org) v8.0.0 or higher.
2. Clone this repository: `git clone https://github.com/JohnRSim/jet-captcha`
3. Install dependencies `npm install`
4. ojet serve

## Jet-composite location
[/src/js/jet-composites/jet-captcha](https://github.com/JohnRSim/jet-captcha/tree/master/src/js/jet-composites/jet-captcha).


## Contribute
If you'd like to assist and help the team please first review our [Contribution Guidelines](./CONTRIBUTING.md).

## License
This project is under the [GNU General Public License v3.0](./LICENSE.md).
