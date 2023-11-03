import { CalculateFleschReadingEase } from './helpers/flesch';

/*
 * A  control that displays the smog index of the content inside this rich text field.
 */
const FleschReadingEase = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = CalculateFleschReadingEase(text);

    let message = "Flesch Score: N/A";

    const elem = 'div';
    const classNames = 'w-inline-block w-tabular-nums w-help-text w-mr-4';
    
    if(!stats) {
        return window.React.createElement(elem, { className: classNames }, `${message}`);
    }

    message = `Flesch Score: ${stats.score}`;

    return window.React.createElement(elem, {
        className: classNames,
      }, message);
};

window.draftail.registerPlugin({
    type: 'readinglevelflesch',
    meta: FleschReadingEase,
  }, 'controls');
