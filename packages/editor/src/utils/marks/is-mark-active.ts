import { EditorState } from 'prosemirror-state';
import { MarkType } from 'prosemirror-model';

export const isMarkActive = (editorState: EditorState, type: MarkType) => {
  const { from, $from, to, empty } = editorState.selection;

  if (empty) {
    return undefined;
  } else {
    return editorState.doc.rangeHasMark(from, to, type);
  }
};
