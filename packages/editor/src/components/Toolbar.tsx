import React from 'react';
import { useEditorConfig } from '../context/editor-config';
import { toggleStrongMark } from '../commands/toggle-strong-mark';

interface ToolbarProps {}

export const Toolbar: React.FC<ToolbarProps> = ({}) => {
  const editorConfig = useEditorConfig();

  const handleBold = React.useCallback(() => {
    if (editorConfig) {
      const {
        editorView: { state, dispatch },
      } = editorConfig;
      toggleStrongMark()(state, dispatch);
    }
  }, [editorConfig]);

  return (
    <React.Fragment>
      <button onClick={handleBold}>Bold</button>
    </React.Fragment>
  );
};
