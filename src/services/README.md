# Services

[How to better organize your react application](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

> Not everything can be a component, and you will need to create independent modules that can be used by your containers, components or scenes.
> You can see a service like a self-contained module where you will define the core business logic of your application. This can eventually be shared between several scenes or even applications, such as a web and native version of you app.

## Restrictions

A service can define nested services. It cannot use or define components, containers or scenes.
