To reproduce

- Run `yarn start` to serve the application with SSR and hydration
- Throttle network in browser to make sure there's a delay between initial load and client hydration
- Modify the form controls while the app is bootstrapping

Expected:
- Both inputs retain their values after hydration

Actual:
- The input with a `FormControl` is reset to the default `FormControl` value.
