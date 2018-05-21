# Configuration

## Overview
Configuration provides you ability to customize your app with set of attributes. These attributes contain information required by application and used across program code.

The whole structure of config data is defined in a base configuration file. In addition, your app can be configured by specifying [environment variables](#setting-config-values-using-environment-variables) or [command-line arguments](#setting-config-values-using-cli-arguments), by changing the local or specific config files, conventionally located in the `config/` folder of app projects.

In terms of code perspective, work with configuration is encapsulated in [ConfigurationManagement](https://github.com/dynamic-talks/ui-platform-core/blob/master/lib/configuration-manager/modules/ConfigurationManager.js) class. It provides an interface for getting specific config data. Nested object data can be obtain with dot notation (.e.g `api.endpoint.baseUrl`). See [Accessing config in app](#accessing-config-in-app) for more details.

During app lifecycle there are 2 type of configuration managers: server and client. Server config is an instance of [ServerConfigurationManager](https://github.com/dynamic-talks/ui-platform-core/blob/master/lib/configuration-manager/modules/ServerConfigurationManager.js), which initialized on server bootstraping and contains whole configuration data object. On the other hand client config is an instance of [ConfigurationManager](https://github.com/dynamic-talks/ui-platform-core/blob/master/lib/configuration-manager/modules/ConfigurationManager.js), which initialized on client apps and contains configuration data object with set of keys defined in `clientProps` of server configuration object.


## Configuration files
All configuration files should be placed into `config/` folder. There 3 types of files, which have to be taken into account:
- _Base config_ - define whole shape and default values of configuration. Filename - `config/base.<ext>`;
- _Specific config_ - intended for defining configuration of specific app instance or environment. Such type of config data is going to override values defined by _Base config_. The filename should be passed with `-c` command-line argument as relative path to project folder on app launch (e.g. `NODE_ENV=staging node ./bin/www -c config/staging.yaml`). In case of filename is not provided, then just _Base config_ is going to be used.
- _Local config_ - such type of config is intended to configure app for your local environment (e.g. your laptop). Filename `config/local.<ext>`.  Since they're intended only for local use, they should not be put under VCS (in case of `git` it should be included in `.gitignore` file for that reason).

`YAML` and `JSON` formats are supported for storing configuration data in files. Which format to use depends on file extension. If _Base config_ is provided in both formats (2 files) then YAML take precedence over JSON.


## Setting config values using environment variables
In addition to using configuration files, you can set individual config values on the command line when you launch app by prefixing the config key names with `config_`, and separating nested key names with double-underscores (`__`). Any environment variable formatted this way will be parsed as JSON (if possible). For example, you could do the following to set the `europe.payment.supportedCreditCard` to `["Visa", "MasterCard"]` on the command line:
```bash
config_europe__payment__supportedCreditCard='["Visa", "MasterCard"]' ./bin/www -c config/dev.yaml
```
> Note the use of double-quotes to indicate strings within the JSON-encoded value, and the single quotes surrounding the whole value so that it is parsed correctly.

This value will be in effect only for the lifetime of this particular app instance, and will override any values in the configuration files.


## Setting config values using CLI arguments
For situations where setting an environment variable on the command line may not be practical (such as some Windows systems), you can use regular command-line arguments to set configuration options. To do so, specify the name of the option prefixed by two dashes and `config.` string (`--config.`), with nested key names separated by dots. All config specific CLI arguments should be be
```bash
# Set API base endpoint
./bin/www --config.api.endpint='https://apiserver.com/api/2.0'

# Below argument value will be parsed as array
./bin/www --config.europe.payment.supportedCreditCard='["Visa", "MasterCard"]'
```

## Accessing config in app
Instance of `ConfigurationManager` is availabe in [IoC container](./dependency-injection.md) on both client and server environments.

### Server route example
In case of server routes, you have an access to [`ServerUiApplication`](https://github.com/dynamic-talks/ui-platform-core/blob/master/lib/ui-application/server.ui-application.js) via `req.$app`. This instance has an appropriate getter for configuration:

```javascript
// .....
router.get('/:productId', function(req, res) {
  // is ads enbaled in cofniguration
  // this flag is defined in `{ ads: enabled: bool }` coinfig data
  // so we can get that from `req.$app.config`
  const isAdsEnabled = req.$app.config.get('ads.enabled');

  let scripts = [];

  if (isAdsEnabled) {
    scriptList.push('/js/ads.bundle.js');
  }

  res.renderApp({ scripts });
}
```
### React Component example
In order to pass config instance from IoC container to React component as prop you can archieve it with [`connectWithIoC`](https://github.com/dynamic-talks/ui-platform-core/blob/master/lib/react-enhancers/connectWithIoC.js) enhancer:

```jsx
import React from 'react';
import { ConfigurationManager } from 'ui-platform-core/lib/configuration-manager/ConfigurationManager';
import { connectWithIoC } from 'ui-platform-core/lib/react-enhancers/connectWithIoC';

const PromoMessage => ({ message }) => (
  <p className="promo-msg">{message}</p>
);


class PromoBlock extends React.Component {
  static propTypes = {
    config: PropTypes.instanceOf(ConfigurationManager),
  }

  render() {
    const messageList = this.config.get('markeing.campaigns.promos');

    return (
      <div className="promo-block">
        {messageList.map(messageItem =>
          <PromoMessage message={messageItem} />
        )}
      </div>
    )
  }
}

export default connectWithIoC(['config'])(PromoBlock);
```



## Order of precedence for configuration (Cascading)
The order presented from highest to lowest priority:
1. command line arguments, prefixed with `--config.` (e.g. `./bin/www --config.api.endpint='https://apiserver.com/api/2.0'`)
2. Environment variables prefixed with `config_`, and using double underlines to indicate dots (e.g. `config__api__endpint='https://apiserver.com/api/2.0' ./bin/www`)
3. Local config, which is defined in `config/local.<ext>` file.
4. Specific config file, which filename is passed with `-c` command-line argument as relative path to project folder (e.g. `NODE_ENV=staging node ./bin/www -c config/staging.yaml`)
5. Base config, which is defined in `config/base.<ext>` file.


## Reserved keys in configuration data object
- `clientProps` - list of properties, which should be exposed to client configuration data object by server config manager. This key is required by `ConfigurationManager` and throw exception in case of it's absence.

## TODO
 - Implement logic with `local` config files
 - Finish implementation of reading config data from env vars and cli based on convention
 - Dynamic reconfiguration
