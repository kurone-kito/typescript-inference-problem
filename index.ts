interface Params {
  foo: string | undefined;
}

export default (params: Params) => params.foo;
