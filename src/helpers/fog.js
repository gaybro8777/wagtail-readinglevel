import { syllable } from 'syllable';

function CalculateFogIndex(text) {
    // Clean up the text and create a word array from it
    const textClean = text.replace(/[^a-zA-Z ]/g, "");
    const wordArray = textClean.split(" ");
    const wordArrayNoSpaces = wordArray.filter(v=>v!='');
    const wordCount = wordArrayNoSpaces.length;

    // Figure out how many polysyllabic words are in the text
    const polysyllabicWords = [];
    for(let i=0; i < wordArray.length; i++) {
        if(syllable(wordArray[i]) > 2) {
            polysyllabicWords.push(wordArray[i]);
        }
    }

    // Calculate the sentence count
    const sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;
    
    // Calculate the FOG Index and truncate it to 2 decimal places
    const avgSentenceLength = wordCount / sentenceCount;
    let fogIndex = 0.4 * ((avgSentenceLength) + (100 * (polysyllabicWords.length/wordCount)));
    fogIndex = (Math.floor(fogIndex * 100) / 100);

    // Set up the return data, making sure the fog index is a valid number
    const data = {
        index: (isFinite(fogIndex) ? fogIndex : 0),
    }

    return data;
}

export { CalculateFogIndex };
