import { syllable } from 'syllable';

function CalculateSmogIndex(text) {
    // Clean up the text and create a word array from it
    const textClean = text.replace(/[^a-zA-Z ]/g, "");
    const wordArray = textClean.split(" ");

    // Figure out how many polysyllabic words are in the text
    const polysyllabicWords = [];
    for(var i=0; i < wordArray.length; i++) {
        if(syllable(wordArray[i]) > 2) {
            polysyllabicWords.push(wordArray[i]);
        }
    }

    // Calculate the sentence count
    const sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;
    
    // Calculate the Smog Index and truncate it to 2 decimal places
    const smogIndex = Math.sqrt((polysyllabicWords.length * (30/sentenceCount)) + 3);
    const truncatedSmogIndex = (Math.floor(smogIndex * 100) / 100);

    // Set up the return data, making sure the smogIndex is a valid number
    const data = {
        smogIndex: (isFinite(truncatedSmogIndex) ? truncatedSmogIndex : 0),
        polysyllabicWords: polysyllabicWords,
        words: wordArray.length,
        sentences: sentenceCount
    }

    return data;
}

export { CalculateSmogIndex };
