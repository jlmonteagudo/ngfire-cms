module.exports = {
  name: 'cms-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cms-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
