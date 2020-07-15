module.exports = function innerText(el) {
  if (el.innerText) return el.innerText;
  if (!window.getSelection) return 'ERROR: UUPS `window.getSelection` is not available.';

  var selection = window.getSelection();
  var ranges = [];
  var text;

  // Save existing selections.
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges[i] = selection.getRangeAt(i);
  }

  // Deselect everything.
  selection.removeAllRanges();

  // Select `el` and all child nodes.
  selection.selectAllChildren(el);

  // Get the string representation of the selected nodes.
  text = selection.toString();

  // Deselect everything. Again.
  selection.removeAllRanges();

  // Restore all formerly existing selections.
  for (var i = 0; i < ranges.length; i++) {
    selection.addRange(ranges[i]);
  }

  // Oh look, this is what we wanted.
  // String representation of the element, close to as rendered.
  return text;

};