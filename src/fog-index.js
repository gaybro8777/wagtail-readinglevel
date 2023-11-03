import { CalculateFogIndex } from './helpers/fog';

/*
 * A  control that displays the fog index of the content inside this rich text field.
 */
const FogIndex = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateFogIndex(text);

    let message = "FOG Index: N/A";

    const elem = 'div';
    const classNames = 'w-inline-block w-tabular-nums w-help-text w-mr-4';
    
    if(!stats) {
        return window.React.createElement(elem, { className: classNames }, `${message}`);
    }

    message = `FOG Index: ${stats.index}`;

    return window.React.createElement(elem, {
        className: classNames,
    }, message);
};

window.draftail.registerPlugin({
    type: 'readinglevelfog',
    meta: FogIndex,
  }, 'controls');
