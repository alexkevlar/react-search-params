# React Search Params

This library is a little enhancement of the hook **useSearchParams** in React Router **6**

### Dependencies

- React 18
- React Router 6

<br/>

## How to install

In the project directory, you can run:

```
npm i react-search-params
```
or
```
yarn add react-search-params
```

<br/>

## How to use

<br/>

Import library:

```javascript
import { useReactSearchParams } from "react-search-params";
```

<br/>

Hook init:
```javascript
function MyComponent() {

  const { search, setSearch } = useQuerySearch();
  
  // rest of your code
}

/**
 * 
 * Output:
 * http://localhost:3000/?foo=bar
 * 
 */
```

<br/>

Set params:
```javascript

const { setSearch } = useQuerySearch();
setSearch({ foo: "bar" })

// Output
// http://localhost:3000/?foo=bar

```

<br/>

Get params:
```javascript

// Given an URL
// http://localhost:3000/?foo=bar

const { search } = useQuerySearch();

console.log(search.toString());
// Output
// foo=bar


console.log(search.get("foo"));
// Output
// bar

console.log(search.has("foo"));
// Output
// true

search.forEach((value, key) => {
  console.log(key, value)
});
// Output
// foo bar

```