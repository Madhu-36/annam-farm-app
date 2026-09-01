# 1. Offline-first PWA Architecture

## Status

Accepted

## Context

Target users (Indian smallholder farmers) frequently operate in rural areas with poor or non-existent internet connectivity. Cloud-dependent AI solutions fail to provide reliable utility in these conditions.

## Decision

We will architect the frontend as a Progressive Web Application (PWA) with a Service Worker implementing a cache-first strategy. All core logic (including KNN yield prediction) will run locally in the browser using JavaScript and `localStorage`.

## Consequences

- **Positive:** App is 100% usable without an internet connection.
- **Positive:** Zero server hosting costs for the core product.
- **Negative:** AI models are limited by device CPU and browser storage limits. Deep learning models (CNNs) are currently too heavy and require future optimization via TensorFlow.js.
