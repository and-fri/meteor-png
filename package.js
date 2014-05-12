Package.describe({
  summary: 'PNG.js, packed for Meteor.'
});
Npm.depends({
  'png':'3.0.3'
});
Package.on_use(function(api) {
  api.add_files('include-png.js', ['server']);
  api.export(['Png'], server);
});
