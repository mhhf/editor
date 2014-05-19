Package.describe({
  summary: "CodeMirror Markdown with own plugins"
});

Package.on_use(function (api) {
  
  api.use('templating', 'client');
  api.use('ui', 'client');
  api.use('deps', 'client');
  
  api.add_files("codemirror.js", "client");
  api.add_files("codemirror.css", "client");
  api.add_files("continuelist.js", "client");
  api.add_files("markdown.js", "client");
  api.add_files("own-hint.js", "client");
  api.add_files("show-hint.js", "client");
  api.add_files("show-hint.css", "client");
  api.add_files("editorView.html", "client");
  api.add_files("editorView.js", "client");

  if (api.export) 
    api.export('CodeMirror');
});
