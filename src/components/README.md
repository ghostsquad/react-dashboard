# Components

[Presentation and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

My presentational components:
 * Are concerned with how things look.
 * May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
 * Often allow containment via this.props.children.
 * Have no dependencies on the rest of the app, such as Flux actions or stores.
 * Don’t specify how the data is loaded or mutated.
 * Receive data and callbacks exclusively via props.
 * Rarely have their own state (when they do, it’s UI state rather than data).
 * Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

## Organization

[How to better organize your react application](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

> You all already know what a component is, but one important thing in this organization is the ability to nest a component into another component.
> Components defined at the root level of your project, in the components folder, are global and can be used anywhere in your application. But if you decide to define a new component inside another component (nesting), this new component can only be used its direct parent.

## Restrictions

A component can define nested components. It cannot use or define scenes or services.
