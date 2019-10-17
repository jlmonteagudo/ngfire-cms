module.exports = {
  name: 'material-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/material-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
