Package.describe({
  summary: 'Simple PNG encoder/decoder for Node.js with no native dependencies.'
});
Npm.depends({
  'node-png':'0.4.2'
});
Package.on_use(function(api) {
  api.add_files('include-png.js', ['server']);
  api.export(['PNG'], 'server');
});
