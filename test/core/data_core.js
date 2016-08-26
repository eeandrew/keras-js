// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function () {
  var DATA = {
    'core.Dense.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [7.3, -0.21], shape: [2] }
    },
    'core.Dense.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [0.999325, 0.447692], shape: [2] }
    },
    'core.Dense.2': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] }
      ],
      expected: { data: [6.801113, 0.338274], shape: [2] }
    },
    'core.Dense.3': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [7.3, -0.21], shape: [2] }
    },
    'core.Dense.4': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [0.999325, 0.447692], shape: [2] }
    },
    'core.Dense.5': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] }
      ],
      expected: { data: [6.801113, 0.338274], shape: [2] }
    },
    'core.Activation.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [0.999999, -0.206966], shape: [2] }
    },
    'core.Activation.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [1.0, 0.458], shape: [2] }
    },
    'core.Dropout.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] }
      ],
      expected: { data: [7.3, -0.21], shape: [2] }
    },
    'core.Flatten.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] }
    },
    'core.Flatten.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] }
    },
    'core.Flatten.2': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2, 2] },
      expected: { data: [0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0], shape: [12] }
    },
    'core.Reshape.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [2, 3] }
    },
    'core.Reshape.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2] },
      expected: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] }
    },
    'core.Reshape.2': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2, 2] },
      expected: { data: [0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0], shape: [4, 3] }
    },
    'core.Permute.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [3, 2] },
      expected: { data: [0.0, 0.5, 1.0, 0.2, -0.1, 2.0], shape: [2, 3] }
    },
    'core.Permute.1': {
      input: {
        data: [0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2, 0, 0.2, 0.5, -0.1, 1, 2],
        shape: [2, 3, 4]
      },
      expected: {
        data: [0.0, 0.0, 1.0, 1.0, 0.5, 0.5, 0.2, 0.2, 2.0, 2.0, -0.1, -0.1, 0.5, 0.5, 0.0, 0.0, 1.0, 1.0, -0.1, -0.1, 0.2, 0.2, 2.0, 2.0],
        shape: [4, 3, 2]
      }
    },
    'core.RepeatVector.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: {
        data: [0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0, 0.0, 0.2, 0.5, -0.1, 1.0, 2.0],
        shape: [7, 6]
      }
    },
    'core.Merge.0': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [4.85, 4.27], shape: [2] }
    },
    'core.Merge.1': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [-17.885, -0.9408], shape: [2] }
    },
    'core.Merge.2': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [2.425, 2.135], shape: [2] }
    },
    'core.Merge.3': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [7.3, 4.48], shape: [2] }
    },
    'core.Merge.4': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [7.3, -0.21, -2.45, 4.48], shape: [4] }
    },
    'core.Merge.5': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48], shape: [3, 4] }
    },
    'core.Merge.6': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [7.3, -0.21, 7.3, -0.21, 7.3, -0.21, -2.45, 4.48, -2.45, 4.48, -2.45, 4.48], shape: [6, 2] }
    },
    'core.Merge.7': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [7.3, -0.21, 7.3, -0.21, 7.3, -0.21, -2.45, 4.48, -2.45, 4.48, -2.45, 4.48], shape: [6, 2] }
    },
    'core.Merge.8': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48], shape: [3, 4] }
    },
    'core.Merge.9': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [-53.655003, 98.112007, 1.5435, -2.8224], shape: [2, 2] }
    },
    'core.Merge.10': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [-18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258], shape: [3, 3] }
    },
    'core.Merge.11': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [-1.0, 7.972744, 0.125427, -1.0], shape: [1, 2, 2] }
    },
    'core.Merge.12': {
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1, -2, 0, 0.3, 0.2, 0.1, 3, 0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1, 0, -0.9, 0.6, -0.7, 0, 0.2, 0.4, 0, 0, -1, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      expected: { data: [-0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843], shape: [1, 3, 3] }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()