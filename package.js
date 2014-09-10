Package.describe({
  summary: 'Simple PNG encoder/decoder for Node.js with no native dependencies.',
  version: "0.0.2",
  git: "https://github.com/andruschka/meteor-png.git"
});

Npm.depends({
  'node-png':'0.4.2'
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('include-png.js', ['server']);
  api.export('PNG', 'server');
});
