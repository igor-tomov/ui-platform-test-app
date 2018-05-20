# Architectural overview

## Goals
The main goal of this platform is to be suitable for Enterprise level apps like web stores.
So, due to that, we need to achieve next criteria:


* **Distributed infrastructure** - generally, web stores consist of pages like _Product list Page_ (PLP),
_Product Details page_ (PDP), _Checkout page_(CP), etc. In most cases these pages are developed by separate teams and 
should be released and deployed independently of each other. So, in order to achieve that we need to organize each page
(or set of pages) into separate VCS repositories (git) and packages (npm), which gives us ability to make it as
independable and deployable entities (services). We, also, would like to provide some boilerplate generator for that,
so you can I up on run your project as easy as possible.


* **Platform Framework** - for rapid and consistent development of distributed pages of web store, we need to provide
some _"shared"_ functionality like:
  - base initialization of client and server apps
  - library of UI components (e.g. Buttons, Form controls, Header, etc)
  - services (e.g Data Service, App configuration, I18n, etc.)
  - helper/util functions
  - assets (e.g. fonts, images, icons)
  - something else...

  So, all these stuff we can gather into separate repo/package and identify it as platform _"framework"_. Framework
  should be used as dependency in specific project.
  
* **Orchestration service** - in order to deliver distributed web pages into production, we need to have such service,
which should launch central web server, checkout all necessary page repos, initialize them and bind to specific
endpoints.


* **Automate platform updates** - as soon as some part of platform has been updated (added functionality or fixed issue),
we have to applied that for all existing projects. So, in order to make it more convenient we would like to provide a
set of tools (scripts), which can be used on the project side for automation such updates. 


* **Server side rendering** - web stores are intended to deliver _content fist_, SSR is **required** here.


* **Single Page App (Isomorphic)** - for archiving SPA approach we need to design client routing (navigate between
pages with reloading). Since, SSR is required it should be implement as _isomorphic_ solution. It also require to think
about _Code splitting_, since aggregation of all pages code in one JS bundle is inefficient in terms of performance.


* **Dynamic reconfiguration** - in enterprise, business often requests some app configuration updates, which should be
applied as soon as possible (e.g. update some promo message on landing page, change logo in header, etc.). Usually,
in order to achieve that we need to update configuration and redeploy web server. It may take a significant amount of
time. So in order to optimize it, we need to design _dynamic reconfiguration_, which  allows us to make configuration
changes to a runtime Web Server. We do not have to stop or restart the Web Server for the changes to take effect.


Let's treat last two items as optional.



## What do we have now

Currently there is a single repo for platform research. All goals described above we're trying implement (PoC) there.
In the future, we would like to decompose it into separate repos/packages (as described in **Distributed infrastructure**).
Entire repo is a sample of specific project (web page or set of pages) except `platform` folder.

Project specific folders:
 * `/config` - set of app configuration files (for details see [Configuration](./configuration.md)).
 * `/src/ui` - container for UI page directories.
 * `/src/core` - shared functionality, which should be available across project UI pages
 * `/webpack` - project's webpack configs


`platform` folder contains next entities:
  * `platform-core` - contains the library of core and shared components/services/helpers (Platform Framework).
  * `platform-launcher` - starts the web server and bind UI pages to specific endpoints (Orchestration service).
  * `devtools` - set of CLI scripts responsible to automate platform updates in existing projects. E.g. wepback config
  has been updated with loader for `json5` format support. So, in order to apply this update all over projects, each project
  should fetch last devtools and just run an appropriate script instead of doing it manually.

