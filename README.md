# Geoscape API proxying with Serverless

A sample to show how to deploy a proxy for the Geoscape APIs into AWS lambda, using [Serverless](https://serverless.com); a simple and scaleable way to use the APIs in front-end JS applications without exposing your API key.

This example proxys the follow services, with some limited properties:
- Address Prediction, under the `/suggest` url
  - It defaults to the GNAF dataset and a maxiumum of 10 results
- Single Building from GNAF id, under the `/getBuilding` url
  - It returns the `footprint2d` and `maximumRoofHeight` for the buildings

## Requirements

- An API Key ([get it here](https://developer.psma.com.au/))
- Node
- An [AWS CLI](https://aws.amazon.com/cli/) setup with your information

## Usage

### Setup and Deploy

TODO
