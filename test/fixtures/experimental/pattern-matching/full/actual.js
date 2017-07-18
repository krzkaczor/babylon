let getLength = vector => match (vector) {
    { x, y, z }: Math.sqrt(x ** 2 + y ** 2 + z ** 2),
    { x, y }:    Math.sqrt(x ** 2 + y ** 2),
    // [...]:       vector.length, @todo
    "hello":     "its just a string",
    else: {
      throw new Error("Unknown vector type");
    }
}
