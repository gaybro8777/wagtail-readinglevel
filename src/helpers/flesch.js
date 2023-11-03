import { syllable } from 'syllable';

function CalculateFleschReadingEase(text) {
    // Clean up the text and create a word array from it
    const textClean = text.replace(/[^a-zA-Z ]/g, "");
    const wordArray = textClean.split(" ");
    const wordArrayNoSpaces = wordArray.filter(v=>v!='');
    const wordCount = wordArrayNoSpaces.length;

    const syllableCount = syllable(text);

    // Calculate the sentence count
    const sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;
    
    // Calculate Flesch Reading Ease Score
    const avgSentenceLength = wordCount / sentenceCount;
    const avgSyllablePerWord = syllableCount / wordCount;
    let fleschReadingEaseScore = 206.835 - (1.015 * avgSentenceLength) - (84.6 * avgSyllablePerWord);
    
    // Truncate as best we can to 2 decimal places
    fleschReadingEaseScore = (Math.floor(fleschReadingEaseScore * 100) / 100)
    
    // Set up the data
    const data = {
        score: isFinite(fleschReadingEaseScore) ? fleschReadingEaseScore : 0,
    }

    return data;
}

export { CalculateFleschReadingEase };
