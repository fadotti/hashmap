# hashmap

An implementation of a basic hashmap class in Javascript, with the following characteristics:

- Keys must be strings.
- Each `HashMap` object will have 3 properties: a `loadFactor`, a `capacity`, and a `bucketList`.
- Ten methods are defined for `HashMap` objects:
  - `set(key, value)` takes a key and a value and adds it to the hashmap if the key is not already present in the hashmap. If there is already a key-value pair with the given key, the value is overwritten with the new value.
  - `get(key)` returns the value assigned to the key passed to it. If the key is not found, it returns `null`.
  - `has(key)` takes a key as an argument and returns `true` or `false` based on whether or not they key is in the hashmap.
  - `remove(key)` removes a key-value pair from the hashmap and returns `true` if such a pair is currently in the map. Otherwise, it returns `false`.
  - `length()` returns the number of stored keys in the hashmap.
  - `clear()` removes all entries in the hashmap.
  - `keys()` returns an array containing all the keys inside the hashmap.
  - `values()` returns an array containing all the values inside the hashmap.
  - `entries()` returns an array that contains each key-value pair.
