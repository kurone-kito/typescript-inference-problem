# 🐝 typescript-inference-problem

Demonstration a type inference problem in TSServer.

## Usage

```sh
npm ci
npm start # node_modules/.bin/tsserver < commands.json
```

## Source

```ts
interface Params {
  foo: string | undefined;
}

export default (params: Params) => params.foo;
//     ^---- quickinfo here
```

### Expected

```json
// ...(omitted)
"displayString": "(property) default: (params: Params) => string | undefined"
// ...(omitted)
```

### Got

```json
// ...(omitted)
"displayString": "(property) default: (params: Params) => string"
// ...(omitted)
```
