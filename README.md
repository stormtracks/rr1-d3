
This is a fork of [react-redux-d3](https://github.com/lucmerceron/React-Redux-D3)
with some new d3 graphs.

In parallel I am also working on
[Aspen]() which are the new d3 concepts in a
[create-react-app](https://github.com/facebookincubator/create-react-app) framework instead of serving up
the static bundle via Express in this repo.
Note, for development the static bundle is much faster.

## Introduction

A simple example on how D3 can be used with a classic React web application stack (React Router, Redux, webpack).
[Demonstration](https://lucmerceron.github.io/)

## Features

* All the power of D3 with animations and transitions.
* A special care for the responsiveness of the application.
* A refresh button to update data (random) and see transitions

## Install

```
$ npm install
```

## Usage

```
$ npm run build   Build the bundle
$ npm run watch   Build the bundle and watch for modification (only if you want to modify stuffs)
$ npm start       Start the server (port 8080)
```

Then open <http://localhost:8080/> in your browser

## Thanks

Graphs inspired by [Abhisek Jana](http://www.adeveloperdiary.com/react-js/integrate-react-and-d3/)
