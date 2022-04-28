# Twig Challenge

Group elements of target array into smaller arrays of equal size, last array should include values where remaining array length is less that group size.

Add entries for array size and number of grouped arrays.

twig.js

```sh
var chunked = new ChunkArray(250, 2);

console.log(chunked.getEqualChunkedElements());
```

Run:

```sh
> node twig.js
```
