(function () {
  var Pos = CodeMirror.Pos;

  function ownHint(editor, options) {

    // Find the token at the cursor
    var cur = editor.getCursor(), token = editor.getTokenAt(cur);

		if(token.string != "$media") return;

    return {list: ["muh","mäh"],
            from: Pos(cur.line, token.start),
            to: Pos(cur.line, token.end)};
  };

  CodeMirror.ownHint = ownHint; // deprecated
  CodeMirror.registerHelper("hint", "own", ownHint);

})();
