var state = {
  dep:	new Deps.Dependency,
  val: 'editor', // editor, split, preview
  get: function(){
    this.dep.depend();
    return this.val;
  },
  set: function( val ){
    this.dep.changed();
    this.val = val;
  }
}
var editor;

Template.editorView.helpers({
  isActive: function( s ){
    return (state.get() === s)? 'active': '';
  },
  getEditorClass: function(){
    switch( state.get() ){
      case 'editor': return 'col-md-12';
      case 'split': return 'col-md-6';
      case 'preview': return 'hide';
    }
  },
  getViewClass: function(){
    switch( state.get() ){
      case 'editor': return 'hide';
      case 'split': return 'col-md-6';
      case 'preview': return 'col-md-12';
    }
  }
   
});

Template.editorView.rendered = function(){
  
  editor = CodeMirror(this.find('#editor'),{
    value: '',
    mode:  "markdown",
    lineNumbers: true,
    extraKeys: {"Ctrl-J": "autocomplete"},
    lines: 10,
  });
  
  var previewWrapper = $('#preview-md');
  
  var lastChange;
  editor.on('change', function(i){
    if( state.get() !== 'editor' ) {
      previewWrapper.html( marked( i.getValue() ) );
    }
  });
};

Template.editorView.events = {
  "click button.editorView": function(e,t){
    e.preventDefault();
    
    $('#preview-md').html( marked( editor.getValue() ) );
    var target = e.currentTarget.dataset.target;
    state.set( target );
  }
}
