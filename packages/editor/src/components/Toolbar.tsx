import React from 'react';

import { EditorPlugin, Addon } from '../types';
import { getToolbarComponents } from '../utils/toolbar';
import { useConfigContext } from '../context/config';

interface ToolbarProps {
  addons?: Addon[];
}

export const Toolbar: React.FC<ToolbarProps> = ({ addons }) => {
  const {
    config: { plugins, toolbar },
  } = useConfigContext();

  const options = getToolbarComponents(
    plugins.options,
    toolbar.top.options,
    addons,
  );

  const formattingOption = options.filter(
    (opt: EditorPlugin) => opt.name !== 'help',
  );

  return (
    <div onMouseDown={(e: React.MouseEvent) => e.preventDefault()}>
      {formattingOption.map((Option: EditorPlugin, index: number) => {
        if (!Option.toolbarComponent) return null;
        return (
          <React.Fragment key={`top-toolbar-option-${Option.name}`}>
            <Option.toolbarComponent config={toolbar.top[Option.name]} />
          </React.Fragment>
        );
      })}
    </div>
  );
};