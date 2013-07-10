window.URL = window.URL || window.webkitURL;

// deflate

var decode = function ( string ) {

  return RawDeflate.inflate( window.atob( string ) );

};

var encode = function ( string ) {

  return window.btoa( RawDeflate.deflate( string ) );

};

// These templates now contain references to local libraries in the js subdirectory.

var templates = [ {
  filename: '3D starter project',
  filetype: 'text/plain',
  autoupdate: true,
  code: decode( "dVLRSsMwFH3fV1z21ElJ58MQ3BxIrW4gnWwFfZPYXJeMLilJtuq+3jTtCtUZAgm5556cc5LZh2Lf81nkl8HM5FqUFozO74Y7E1muEcnODB2iKf3FxFyrPT6KLzSXkfMBQBRBxoUBNyuOGsHYw+cnCAnqoGFL9wiVKArgtCxR3rqOI9VgcpQIdyCxgmyxThKyqU+C0XTwm5M6QYgGLG+5zxzUlJjbd02tUI6qEpKpiggpUb8KZjlEvbMFii2307Y5d8I07Sl4Qe0ZxRFjXw1uJmHvlhCu3Ry7Map5Gg5SKiNcUZKTo5uMx3XJ+yOUsaAB9X35QJimVWOvdtbq8U6VtKqxm7tH6jLTKJkLWPdEx1QeqVm3pcDrOgOJQbsRJwz+RBNeSMa3MpUf9igtqX8N8U/GYi4KFnSkTO2TAmtQZ+qqHbDJ7tcZxKuHZfoEq9RpTCBN3jJ4XqZJB2u7UlWFYLj6N4VfGXQKmk3gMw6hC7j7nj8=" )
}, {
  filename: 'Empty project',
  filetype: 'text/plain',
  autoupdate: true,
  code: decode( "s0nKT6m0s9EHU1w2xclFmQUlCsVFybZKWcX6IRlFqal6WcVKQBUQKUw1zhlF+bmpbpkVqcXYVdpxKSjo6ytE5pcWKSTnp6QqpOenFitkpBal6unpccGVAwA=" )
}, {
  filename: '3D Starter Project (with Physics)',
  filetype: 'text/plain',
  autoupdate: true,
  code: decode( "hVRZT+MwEH7vrxixD6SrkgRWsBKXhLrlkFBBbfZ4QyaZNobEztpOswXx33dsJ+FcrdXDGn/z+ZvLh7cyWx8fRu5vcKhTxSsDWqVHG3c6SnKFGN7pDUL4o/eYKl9r/h/MOFeyxFP+B/UbZAc9HgBEEVxbslSDRmO4WGqyOtOdDj1Oh6wsJRzBJtHaLfFtHnwAa6S6R9UCK394443exV+Y5FwDfZocFYI29WIBXICsFSxZidDwooCcVRWKffJYMQU6RYFELLDpb51bW/AICwoxS3iJc4PVPuxABHsxPA2tQucXUmRniq24WQeWIDmfTSbhD0yNVF8CiEewtR3TbwzD4XuNjFKKqMHkrdZOU8Mzk5OmhotMNiEXAtVPaxsRwK4c+TI3bxDnzthBmK5Ixo1ihksHtJRR63nQXpRSUhRro/fir1E5T77CsTsNvu6OXrGNYJs+MS2XCArpH1RXyuRyqViV87Tl8niALacn2hlBv/HK7G7redvd5P18Dv1NYSU1JzUifKBLd+P4uSgsywIPep10V/1Mscbn3qa9Ve3KIIWRvhYpzUnfIApFRt2kXoU2ZmLF9Kw9ClwiOqBtijl/wOB9+T6ol3PNZFqXKExoBzd0/ZmNc15kQU+ayXJSoAV94KHNusDwlqX3SyVr8pWFdNPyaeFWPyCf2wXz5GSWwPjq28X0DK6mFNYEppNfCVxeTCc9bDBo/U4EL5lBKKVNuZ0pmyg7U3S+qEXqzMyjgiE8ui5U+LtGbbwzAU4VOQQtyoXxImt+E7gSjqCvH8ATfXtma/CSZrWAyj8wLzVYTXZcexHtoPKyLnoGR/C9ymxILYedbEOjrsG2QypFBtq2AzVKFzQ9ZKWUJve0aOzLIGsTdFf6Xo324l72s5iDQf9K/gU=" )
}, {
  filename: 'Spinning Multi-Sided Thingy',
  filetype: 'text/plain',
  autoupdate: true,
  code: decode( "dVRRa9swEH5efoXoS9VhFLUQBnFa2Lx0Gaww2kKfNesSq9hSdlLipCP/fZItp/HiGWPLd9999+nu5NkvI/d3s3HzGs1sjmrtiMX89uLVjp8LBGCv9sIjWtc5JivQVHCvdmCHkXcjQrYCSS4qQJEQm4OGhCBoCQiYRvcKPI3DfUIq4QCVKP0KbJGOPEBp5ehVgAqtgj98+K/lRudOGR0B5I+3kTYDuSUaavK8eJzP2VOwxJg2nbBryJ0H1UpLUzOlNeCLkq4g455tAWpVuLQJbLfQY/4J2DCpLWSNl36aJJE9Idf+5pxfnYaztbEqiGZvnmnCeTr60ChmQkraYmJA8+gK00v7PTdWFCDR6G/RT2849+liaFfEXtSDr+cXYVX+EL20LZiXZkqDU8J3vLkSEu21Qlii1zQlDjdwbv+hPH0o25TctM5DV+bQvbP09LzPUfF7DUJgR9KNSY8oE3or7GN00UjQQZkFl5UgMAubWsCO8t2yuQaAT+oN6NkMJAMj0CmSJt9UoB0LZ4ZZty+BVQJXSnuNPP0vxmwBl6WpPeqyUFKCvhwCi/Xay8sKVUp6FCpNNS8hgJotHHqzfzwScfwRfm/Aus+N2QPuQ59oRJ02h6FxDYLtvKiv3su0qT3PR8KZn4JJOgDdD0Gv/+kWaxc0nvWToT6Mjj+Ivw==" )
} ];

var documents = ( localStorage.codeeditor !== undefined ) ?
  JSON.parse( localStorage.codeeditor ) :
  [templates[templates.length-1]];

var EDIT_ONLY = window.location.search.indexOf('?e') > -1;
var GAME_MODE = window.location.search.indexOf('?g') > -1;

var ice_parent = document.getElementById('ice') || document.body,
    embedded = !!document.getElementById('ice');

ice_parent.style.margin = '0px';
ice_parent.style.overflow = 'hidden';

// preview

var preview = document.createElement( 'div' );
preview.id = embedded ? "preview_embed" : "preview";
if (!EDIT_ONLY) {
  ice_parent.appendChild( preview );
}

// editor

var editor_el = document.createElement( 'div' );
editor_el.id = embedded ? "editor_embed" : "editor";
ice_parent.appendChild( editor_el );

var editor = ace.edit(editor_el.id);
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setUseWrapMode(true);
editor.getSession().setUseSoftTabs(true);
editor.getSession().setTabSize(2);
editor.setPrintMarginColumn(false);
editor.setDisplayIndentGuides(false);
editor.setFontSize('18px');

var UndoManager = require("ace/undomanager").UndoManager;
var CommandManager = editor.getKeyboardHandler();
var EmacsManager = require("ace/keyboard/emacs").handler;
editor.setKeyboardHandler(CommandManager);

function handleChange(event) {
  save();
  resetUpdateTimer();
}

function setContent(data) {
  editor.getSession().removeListener('change', handleChange);
  editor.setValue(data, -1);
  editor.getSession().setUndoManager(new UndoManager());
  editor.getSession().on('change', handleChange);
  update(); // visualization layer
}

var interval;
document.addEventListener('keydown', function (event) {
  if (interval) resetUpdateTimer();
});

editor.keyBinding.originalOnCommandKey = editor.keyBinding.onCommandKey;
editor.keyBinding.onCommandKey = function(e, hashId, keyCode) {
  if (keyCode >=37 && keyCode <= 40) {
    if (interval) resetUpdateTimer();
  }
  this.originalOnCommandKey(e, hashId, keyCode);
};

function resetUpdateTimer() {
  if (documents[0].autoupdate === false) return;

  clearTimeout(interval);
  interval = setTimeout(
    function() { update(); interval = undefined; },
    1.5 * 1000
  );
}

// popup

var popup_el = document.createElement( 'div' );
popup_el.id = "popup";
if (!embedded) document.body.appendChild( popup_el );

// toolbar

var pad = function ( number, length ) {

  var string = number.toString();

  while ( string.length < length ) string = '0' + string;
  return string;

};

var codeToolbar = function() {
  if (embedded) return;
  toolbar(
    buttonUpdate(),
    buttonHide(),
    buttonCodeMenu()
  );
};

var shortCodeToolbar = function() {
  toolbar(
    buttonShow()
  );
};

var projectMenu = function() {
  menu(
    menuNew(),
    menuOpen(),
    menuSave(),
    menuMakeCopy(),
    menuShare(),
    menuDownload(),
    menuInfo()
  );
};

var toolbar = function() {
  var buttons = Array.prototype.slice.apply(arguments);

  var old = document.getElementById('code-editor-toolbar');
  if (old) document.body.removeChild(old);

  var el = document.createElement( 'div' );
  el.id = 'code-editor-toolbar';
  el.style.position = 'absolute';
  el.style.right = '15px';
  el.style.top = '15px';
  document.body.appendChild( el );

  buttons.forEach(function(button) {
    el.appendChild(button);
  });
};

var menu = function() {
  var items = Array.prototype.slice.apply(arguments);

  var old = document.getElementById('code-editor-menu');
  if (old) {
    document.body.removeChild(old);
    return;
  }

  var el = document.createElement( 'ul' );
  el.id = 'code-editor-menu';
  el.className = 'menu';
  el.style.position = 'absolute';
  el.style.right = '17px';
  el.style.top = '55px';
  document.body.appendChild( el );

  items.forEach(function(item) {
    el.appendChild(item);
  });

  el.addEventListener( 'click', function ( event ) {
    document.body.removeChild(el);
  });
};

var buttonUpdate = function() {
  var el = document.createElement( 'button' );
  el.className = 'button';

  var checkbox = document.createElement( 'input' );
  checkbox.type = 'checkbox';

  if ( documents.length == 0 || documents[ 0 ].autoupdate === true ) checkbox.checked = true;

  checkbox.style.margin = '-4px 4px -4px 0px';
  checkbox.addEventListener( 'click', function ( event ) {

    event.stopPropagation();

    documents[ 0 ].autoupdate = documents[ 0 ].autoupdate === false;

    syncStore();

  }, false );

  el.appendChild( checkbox );
  el.appendChild( document.createTextNode( 'update' ) );

  el.addEventListener( 'click', function ( event ) {

    update();

  }, false );

  return el;
};

var menuMakeCopy = function() {
  var el = document.createElement( 'li' );
  el.textContent = 'make a copy';
  el.addEventListener( 'click', function ( event ) {

    openMakeCopyDialog();

  }, false );

  return el;
};

var menuSave = function() {
  var el = document.createElement( 'li' );
  el.textContent = 'save';
  el.addEventListener( 'click', function ( event ) {

    save();

  }, false );

  return el;
};

var menuDownload = function() {
  var el = document.createElement( 'li' )
    , a = document.createElement( 'a' );

  el.appendChild( a );

  a.download = 'index.html';
  a.textContent = 'download';
  a.addEventListener( 'click', function ( event ) {

    download(event.target);

  }, false );

  return el;
};

var menuNew = function() {
  var el = document.createElement( 'li' );
  el.textContent = 'new';
  el.addEventListener( 'click', function ( event ) {

    openNewDialog();

  }, false );
  return el;
};

var menuOpen = function() {
  var el = document.createElement( 'li' );
  el.textContent = 'open';
  el.addEventListener( 'click', function ( event ) {

    openProjectsDialog();

  }, false );
  return el;
};

var menuInfo = function() {
  var el = document.createElement( 'li' );
  el.textContent = 'Help';
  el.addEventListener( 'click', function ( event ) {

    window.open( 'https://github.com/mrdoob/code-editor' );

  }, false );
  return el;
};

var menuShare = function() {
  var el = document.createElement( 'li' );
  el.textContent = 'share';
  el.addEventListener( 'click', function ( event ) {

    var input = document.createElement( 'input' );
    input.value = 'http://gamingjs.com/ice/#B/' + encode( editor.getValue() );
    input.style.width = '400px';
    input.style.padding = '5px';
    input.style.border = '0px';

    var toggle_game_mode = document.createElement('input');
    toggle_game_mode.type = 'checkbox';
    toggle_game_mode.addEventListener('change', function() {
      if (this.checked) {
        input.value = 'http://gamingjs.com/ice/?g#B/' + encode( editor.getValue() );
      }
      else {
        input.value = 'http://gamingjs.com/ice/#B/' + encode( editor.getValue() );
      }
      input.focus();
      input.select();
    });
    var toggle_label = document.createElement('label');
    toggle_label.appendChild(toggle_game_mode);
    toggle_label.appendChild(document.createTextNode("start in game mode"));
    toggle_label.title =
      "If this is checked, then the share link will start with the " +
      "code hidden.";

    var game_mode = document.createElement('div');
    game_mode.appendChild(toggle_label);

    var link = document.createElement( 'a' );
    link.href = 'http://is.gd/create.php?url=' + encodeURIComponent(input.value);
    link.target = "_blank";
    link.textContent = 'make a short link.';
    toggle_game_mode.addEventListener('change', function() {
      link.href = 'http://is.gd/create.php?url=' + encodeURIComponent(input.value);
    });
    var shortener = document.createElement( 'div' );
    shortener.className = 'instructions';
    shortener.textContent = '…or, for easier sharing, ';
    shortener.appendChild(link);

    var title = document.createElement( 'h1' );
    title.textContent = 'Copy this link to share your creation:';

    var share = document.createElement( 'div' );
    share.appendChild(title);
    share.appendChild(input);
    share.appendChild(game_mode);
    share.appendChild(shortener);

    popup.set( share );
    popup.show();

    input.focus();
    input.select();

  }, false );
  return el;
};

// popup
var popup = ( function () {
  if (embedded) return;
  var scope = this;

  var element = document.getElementById( 'popup' );
  element.style.display = 'none';

  var buttonClose = ( function () {
    var svg = document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' );
    svg.setAttribute( 'width', 32 );
    svg.setAttribute( 'height', 32 );

    var path = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
    path.setAttribute( 'd', 'M 9,12 L 11,10 L 15,14 L 19,10 L 21,12 L 17,16 L 21,20 L 19,22 L 15,18 L 11,22 L 9,20 L 13,16' );
    path.setAttribute( 'fill', 'rgb(235,235,235)' );
    svg.appendChild( path );

    return svg;
  } )();

  buttonClose.style.position = 'absolute';
  buttonClose.style.top = '5px';
  buttonClose.style.right = '5px';
  buttonClose.style.cursor = 'pointer';
  buttonClose.addEventListener( 'click', function ( event ) {
    scope.hide();
  }, false );
  element.appendChild( buttonClose );

  var content = document.createElement( 'div' );
  element.appendChild( content );

  var update = function () {
    element.style.left = ( ( window.innerWidth - element.offsetWidth ) / 2 ) + 'px';
    element.style.top = ( ( window.innerHeight - element.offsetHeight ) / 2 ) + 'px';

  };

  window.addEventListener( 'load', update, false );
  window.addEventListener( 'resize', function() {scope.hide();}, false );

  //
  this.show = function () {
    element.style.display = '';
    update();
  };

  this.hide = function () {
    element.style.display = 'none';
  };

  this.set = function ( value ) {
    while ( content.children.length > 0 ) {
      content.removeChild( content.firstChild );
    }
    content.appendChild( value );
  };

  return this;
} )();


var buttonHide = function() {
  var el = document.createElement( 'button' );
  el.className = 'button';
  el.textContent = 'hide code';
  el.addEventListener( 'click', function ( event ) {

    toggle();

  }, false );
  return el;
};

var buttonShow = function() {
  var el = document.createElement( 'button' );
  el.className = 'button';
  el.textContent = 'show code';
  el.addEventListener( 'click', function ( event ) {

    toggle();

  }, false );
  return el;
};

var buttonCodeMenu = function() {
  var el = document.createElement( 'button' );
  el.className = 'button';
  el.style.fontWeight = 'bold';
  el.textContent = '☰';
  el.title = 'Show project menu';
  el.addEventListener( 'click', function ( event ) {

    if (document.getElementById('projects-dialog')) {
      document.body.removeChild(
        document.getElementById('projects-dialog')
      );
    }

    closeMakeCopyDialog();

    projectMenu();

  }, false );

  return el;
};


// events

document.addEventListener( 'drop', function ( event ) {

  event.preventDefault();
  event.stopPropagation();

  var file = event.dataTransfer.files[ 0 ];

  documents[ 0 ].filename = file.name;
  documents[ 0 ].filetype = file.type;

  var reader = new FileReader();

  reader.onload = function ( event ) {
    setContent( event.target.result );
  };

  reader.readAsText( file );

}, false );

document.addEventListener( 'keypress', function ( event ) {
  if ( event.keyCode === 9829 ) { // <3
    event.preventDefault();
    if (editor.getKeyboardHandler() == CommandManager) {
      editor.setKeyboardHandler(EmacsManager);
    }
    else {
      editor.setKeyboardHandler(CommandManager);
    }
  }
});

document.addEventListener( 'keydown', function ( event ) {
  if ( event.keyCode === 83 && ( event.ctrlKey === true || event.metaKey === true ) ) {

    event.preventDefault();
    save();

  }

  if ( event.keyCode === 13 && ( event.ctrlKey === true || event.metaKey === true ) ) {

    update();

  }

  if ( event.keyCode === 27 ) { // ESC

    if (document.getElementById('code-editor-menu')) {
      document.body.removeChild(
        document.getElementById('code-editor-menu')
      );
    }
    else if (document.getElementById('projects-dialog')) {
      document.body.removeChild(
        document.getElementById('projects-dialog')
      );
    }
    else if (document.getElementById('new-dialog')) {
      document.body.removeChild(
        document.getElementById('new-dialog')
      );
    }
    else if (document.getElementById('save-dialog')) {
      document.body.removeChild(
        document.getElementById('save-dialog')
      );
    }
    else {
      toggle();
    }

  }

}, false );

// Display hack. Disallow Ctrl++ and Ctrl+- zooming. It causes too
// much heartache.
document.addEventListener( 'keydown', function ( event ) {
  if (!event.ctrlKey) return;
  if (event.keyCode != 187 && event.keyCode != 189) return;
  event.preventDefault();
});

// dialogs

var openNewDialog = function() {
  var newDialog = document.createElement( 'div' );
  newDialog.id = 'new-dialog';
  newDialog.className = 'dialog';
  document.body.appendChild( newDialog );

  var newProjectLabel = document.createElement( 'label' );
  newProjectLabel.textContent = 'Name:';
  newDialog.appendChild( newProjectLabel );

  var newProjectField = document.createElement( 'input' );
  newProjectField.type = 'text';
  newProjectField.size = 30;
  newProjectLabel.appendChild( newProjectField );
  newProjectField.addEventListener('keypress', function(event) {
    if (event.keyCode != 13) return;
    createProject(newProjectField.value, templateField.value);
    closeNewDialog();
  }, false);

  var buttonNewDialog = document.createElement( 'button' );
  buttonNewDialog.className = 'button';
  buttonNewDialog.textContent = 'Save';
  buttonNewDialog.addEventListener( 'click', function ( event ) {
    createProject(newProjectField.value, templateField.value);
    closeNewDialog();
  }, false );
  newDialog.appendChild( buttonNewDialog );

  var templateDiv = document.createElement( 'div' );
  newDialog.appendChild( templateDiv );

  var templateLabel = document.createElement( 'label' );
  templateLabel.textContent = 'Template:';
  templateDiv.appendChild( templateLabel );

  var templateField = document.createElement( 'select' );
  templateLabel.appendChild(templateField);
  templates.forEach(function(template) {
    var optionField = document.createElement( 'option' );
    optionField.textContent = template.filename;
    templateField.appendChild(optionField);
  });

  var closeNewP = document.createElement( 'p' );
  closeNewP.className = 'cancel';
  newDialog.appendChild( closeNewP );

  var closeNewLink = document.createElement( 'a' );
  closeNewLink.href = '#';
  closeNewLink.textContent = '[ close ]';
  closeNewLink.addEventListener( 'click', function ( event ) {

    closeNewDialog();
    event.stopPropagation();
    event.preventDefault();

  }, false );
  closeNewP.appendChild( closeNewLink );

  newProjectField.focus();
};

var createProject = function(name, template_name) {
  var code = templates.
    reduce(function(code, template) {
      if (template.filename == template_name) return template.code;
      return code;
    }, undefined);

  create(code, name);

  changeProject(name);
};

var closeNewDialog = function() {
  var dialog = document.getElementById('new-dialog');
  if ( ! dialog ) return;

  dialog.parentElement.removeChild(dialog);
};

var openProjectsDialog = function() {
  closeProjectsDialog();

  var projectsDialog = document.createElement( 'div' );
  projectsDialog.id = 'projects-dialog';
  projectsDialog.className = 'dialog';
  document.body.appendChild( projectsDialog );

  documents.forEach(function(doc) {
    projectsDialog.appendChild(projectsDialogRow(doc));
  });

  var closeP = document.createElement( 'p' );
  closeP.className = 'cancel';
  projectsDialog.appendChild( closeP );

  var closeLink = document.createElement( 'a' );
  closeLink.href = '#';
  closeLink.textContent = '[ close ]';
  closeLink.addEventListener( 'click', function ( event ) {

    closeProjectsDialog();
    event.stopPropagation();
    event.preventDefault();

  }, false );
  closeP.appendChild( closeLink );
};

var projectsDialogRow = function(doc) {
  var row = document.createElement( 'p' );

  var link = document.createElement( 'a' );
  link.href = '#';
  link.textContent = doc.filename;
  link.addEventListener( 'click', function ( event ) {

    changeProject(doc.filename);
    closeProjectsDialog();
    event.stopPropagation();
    event.preventDefault();

  }, false );
  row.appendChild(link);
  row.appendChild(document.createTextNode(' '));

  var del = document.createElement( 'a' );
  del.href = '#';
  del.textContent = '[delete]';
  del.className = 'delete';
  del.addEventListener( 'click', function ( event ) {
    var message =
      'Once a project is deleted, there is no way to get it back. ' +
      'Are you sure that you want to delete "' + doc.filename + '"?';

    if (confirm(message)) {
      deleteProject(doc.filename);
      openProjectsDialog();
    }
    event.stopPropagation();
    event.preventDefault();

  }, false );
  row.appendChild(del);

  return row;
};

var closeProjectsDialog = function() {
  var dialog = document.getElementById('projects-dialog');
  if ( ! dialog ) return;

  dialog.parentElement.removeChild(dialog);
};

var openMakeCopyDialog = function() {
  var saveDialog = document.createElement( 'div' );
  saveDialog.id = 'save-dialog';
  saveDialog.className = 'dialog';
  document.body.appendChild( saveDialog );

  var saveFileLabel = document.createElement( 'label' );
  saveFileLabel.textContent = 'Name:';
  saveDialog.appendChild( saveFileLabel );

  var saveFileField = document.createElement( 'input' );
  saveFileField.type = 'text';
  saveFileField.size = 30;
  saveFileField.value = documents[0].filename;
  saveFileLabel.appendChild( saveFileField );
  saveFileField.addEventListener('keypress', function(event) {
    if (event.keyCode != 13) return;
    saveAs(saveFileField.value);
    closeMakeCopyDialog();
  }, false);

  var buttonSaveDialog = document.createElement( 'button' );
  buttonSaveDialog.className = 'button';
  buttonSaveDialog.textContent = 'Save';
  buttonSaveDialog.addEventListener( 'click', function ( event ) {
    saveAs(saveFileField.value);
    closeMakeCopyDialog();
  }, false );
  saveDialog.appendChild( buttonSaveDialog );

  var closeSaveP = document.createElement( 'p' );
  closeSaveP.className = 'cancel';
  saveDialog.appendChild( closeSaveP );

  var closeSaveLink = document.createElement( 'a' );
  closeSaveLink.href = '#';
  closeSaveLink.textContent = '[ close ]';
  closeSaveLink.addEventListener( 'click', function ( event ) {
    closeMakeCopyDialog();
    event.stopPropagation();
    event.preventDefault();
  }, false );
  closeSaveP.appendChild( closeSaveLink );

  saveFileField.focus();
};

var closeMakeCopyDialog = function() {
  var dialog = document.getElementById('save-dialog');
  if (!dialog) return;

  dialog.parentElement.removeChild(dialog);
};

// actions

var create = function(code, title) {
  if (!title) title = nextUntitled();
  if ( documents.length == 0 || documents[ 0 ].filename != title) {
    documents.unshift({
      filetype: 'text/plain',
      autoupdate: documents[ 0 ].autoupdate
    });
  }

  documents[ 0 ].code = code;
  documents[ 0 ].filename = title;

  syncStore();
};

var saveAs = function (title) {
  create(editor.getValue(), title);
};

var save = function() {
  documents[ 0 ].code = editor.getValue();
  syncStore();
};

var syncStore = function() {
  localStorage.codeeditor = JSON.stringify( documents );
};

var update = function () {
  if (EDIT_ONLY) return;

  while ( preview.children.length > 0 ) {

    preview.removeChild( preview.firstChild );

  }

  var iframe = document.createElement( 'iframe' );
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';
  preview.appendChild( iframe );

  var content = iframe.contentDocument || iframe.contentWindow.document;

  content.open();
  content.write( editor.getValue() );
  content.close();

  content.body.style.margin = '0';
};

var changeProject = function(filename) {
  var new_documents = [];

  var i = 0, found;
  while (i < documents.length) {
    if (documents[i].filename == filename) {
      found = documents[i];
    }
    else {
      new_documents.push(documents[i]);
    }
    i++;
  }

  if ( ! found ) return;

  new_documents.unshift(found);
  documents = new_documents;
  setContent( documents[ 0 ].code );
};

var deleteProject = function(filename) {
  var new_documents = [];

  var i = 0, found;
  while (i < documents.length) {
    if (documents[i].filename == filename) {
      found = documents[i];
    }
    else {
      new_documents.push(documents[i]);
    }
    i++;
  }

  if ( ! found ) return;

  documents = new_documents;
  syncStore();
};

var download = function(el) {
  var blob = new Blob( [ editor.getValue() ], { type: documents[ 0 ].filetype } );
  var objectURL = URL.createObjectURL( blob );

  el.href = objectURL;

  el.download = documents[ 0 ].filename;
};

var toggle = function() {
  if ( editor_el.style.display === '' ) hideCode();
  else showCode();
};

var showCode = function() {
  codeToolbar();
  editor_el.style.display = '';
  editor.renderer.onResize();
  editor.focus();
};

var hideCode = function() {
  shortCodeToolbar();
  editor_el.style.display = 'none';
  preview.children[0].focus();
};

var nextUntitled = function() {
  var nums = documents.
    filter(function(doc) {
      return doc.filename.match(/Untitled/);
    }).
    map(function(doc) {
      return parseInt(doc.filename.replace(/Untitled\s*/, ''), 10);
    }).
    filter(function (num) {
      return !isNaN(num);
    }).
    sort();

  return 'Untitled ' + (nums.length == 0 ? 1 : nums[nums.length-1] + 1);
};


if ( window.location.hash ) {

  var hash = window.location.hash.substr( 1 );
  var version = hash.substr( 0, 2 );

  if ( version == 'A/' ) {

    alert( 'That shared link format is no longer supported.' );

  } else if ( version == 'B/' ) {

    create(decode(hash.substr(2)));
    window.location.hash = '';
  }

}

setContent((documents.length > 0) ? documents[0].code : templates[0].code);

codeToolbar();
if (GAME_MODE) hideCode();
