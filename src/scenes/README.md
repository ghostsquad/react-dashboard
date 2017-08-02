# Scenes

[How to better organize your react application](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

> A scene is an application. Your application can consist of many other applications. 
> Consider each page a separate application. You can see a scene just like any component, but I like to separate them into their own folder.
> If you use React-Router or React Native Router, you can import all your scenes in your main index.js file and setup your routes.
> With the same principle components can be nested, you can also nest a scene into a scene, and also define components or services into a scene. You have to remember that if you decide to define something into a scene, you can only use it within the scene folder itself.

## Restrictions

A scene can define nested components, containers, scenes or services.
