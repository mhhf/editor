Package.describe({
  summary: "CodeMirror Markdown with own plugins"
});

Package.on_use(function (api) {
  api.add_files(".js", "client");
  api.add_files("codemirror.js", "client");
  api.add_files("codemirror.css", "client");
  api.add_files("continuelist.js", "client");
  api.add_files("markdown.js", "client");
  api.add_files("own-hint.js", "client");
  api.add_files("show-hint.js", "client");
  api.add_files("show-hint.css", "client");

  if (api.export) 
    api.export('CodeMirror');
});
