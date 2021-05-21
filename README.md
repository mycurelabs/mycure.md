# web-main

> MYCURE Main Website

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Signup Flow

PH -> Pricing -> OTP -> Success -> Login
non-PH -> Pricing -> Success -> Login


# Old CI Configs


### Staging

```yml
name: Deploy:Staging

on: 
  push:
    branches:
      - environment/staging

jobs:
  deploy_to_live:
    name: Deploy staging hosting
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [10]
    steps: 
      - uses: actions/checkout@master
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
      - name: Install Yarn
        run: npm install yarn@latest -g
      - name: Install Firebase Tools
        run: npm install firebase-tools -g
      - name: Install dependencies
        run: yarn
      - name: Run build
        env: 
          API_URL: ${{ secrets.STAGING_API_URL }}
          CMS_URL: ${{ secrets.STAGING_CMS_URL }}
          ENV: ${{ secrets.STAGING_ENV }}
          GA_ID: ${{ secrets.STAGING_GA_ID }}
          IPSTACK_API_KEY: ${{ secrets.STAGING_IPSTACK_API_KEY }}
          IPSTACK_API: ${{ secrets.STAGING_IPSTACK_API }}
          PX_PORTAL_URL: ${{ secrets.STAGING_PX_PORTAL_URL }}
          SIGNIN_URL: ${{ secrets.STAGING_SIGNIN_URL }}
          STRIPE_CHECKOUT_CANCEL_URL: ${{ secrets.STAGING_STRIPE_CHECKOUT_CANCEL_URL }}
          STRIPE_CHECKOUT_SUCCESS_URL: ${{ secrets.STAGING_STRIPE_CHECKOUT_SUCCESS_URL }}
          STRIPE_PK: ${{ secrets.STAGING_STRIPE_PK }}
        run: yarn generate
      - name: Run deploy
        env: 
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
        run: |
          firebase use mc-v4-stg
          firebase target:clear hosting staging
          firebase target:apply hosting staging staging-web-main
          yarn deploy:stg
```

### Production

```yml
name: Deploy:Prod

on: 
  push:
    branches:
      - master

jobs:
  deploy_to_live:
    name: Deploy PROD hosting
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [10]
    steps: 
      - uses: actions/checkout@master
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
      - name: Install Yarn
        run: npm install yarn@latest -g
      - name: Install Firebase Tools
        run: npm install firebase-tools -g
      - name: Install dependencies
        run: yarn
      - name: Run build
        env: 
          API_URL: ${{ secrets.PROD_API_URL }}
          CMS_URL: ${{ secrets.PROD_CMS_URL }}
          ENV: ${{ secrets.PROD_ENV }}
          GA_ID: ${{ secrets.PROD_GA_ID }}
          IPSTACK_API_KEY: ${{ secrets.PROD_IPSTACK_API_KEY }}
          IPSTACK_API: ${{ secrets.PROD_IPSTACK_API }}
          PX_PORTAL_URL: ${{ secrets.PROD_PX_PORTAL_URL }}
          SIGNIN_URL: ${{ secrets.PROD_SIGNIN_URL }}
          STRIPE_CHECKOUT_CANCEL_URL: ${{ secrets.PROD_STRIPE_CHECKOUT_CANCEL_URL }}
          STRIPE_CHECKOUT_SUCCESS_URL: ${{ secrets.PROD_STRIPE_CHECKOUT_SUCCESS_URL }}
          STRIPE_PK: ${{ secrets.PROD_STRIPE_PK }}
        run: yarn generate
      - name: Run deploy
        env: 
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
        run: |
          firebase use mycure-ab311
          firebase target:clear hosting prod
          firebase target:apply hosting prod mycure-ab311
          yarn deploy:prod
```