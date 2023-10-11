# Sign in with Apple

OAuth Sign in with Apple official JavaScript SDK by Apple 

## Setup Dependencies

Make sure to install the dependencies:

```bash
# make
$ make dep

# npm
$ npm install
```

## Development Server

Start the development server:

```bash
# make
$ make dev

# npm
$ npm run dev
```

This will starting app default on `http://localhost:3000`

## Production

Build the application for production:

```bash
# make
$ make build

# npm
$ npm run build
```

Locally preview production build:

```bash
# make
$ make preview

# npm
$ npm run preview
```

## Image Previews

![Index](/images/index.png)

![Login](/images/login.png)

![Valid](/images/valid.png)

## Dependencies

Dependency | Documentation | Description
-- | -- | --
jose | https://github.com/panva/jose | JWT decoder and validator
mixpanel | https://github.com/mixpanel/mixpanel-js | Tracking events
zod | https://github.com/colinhacks/zod | Type validation
