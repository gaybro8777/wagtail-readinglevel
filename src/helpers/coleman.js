function CalculateColemanIndex(text) {
    // Create the variables to hold the character, word and sentence counts
    let charCount = 0;
    let wordCount = 0;
    let sentenceCount = 0;
    
    const textClean = text.replace(/[^a-zA-Z ]/g, "");
    
    // Calculate the character count
    const textNoSpace = textClean.replace(/\s/g, "");
    const textNoPeriod = textNoSpace.replace(/\./g, "");
    charCount = textNoPeriod.length; 

    // Calculate the word count -----------------
    const wordArray = textClean.split(" ");
    const wordArrayNoSpaces = wordArray.filter(v=>v!='');
    wordCount = wordArrayNoSpaces.length;

    // Calculate the sentence count
    sentenceCount = (text.replace(/\S[.?!](\s|$)/g, "$1|").split("|").length) - 1;

    // Calculate Coleman-Liau index
    const L = (charCount / wordCount) * 100;
    const S = (sentenceCount / wordCount) * 100;
    let CLI = ((0.0588 * L) - (0.296 * S)) - 15.8;
    
    // Truncate as best we can to 2 decimal places
    CLI = (Math.floor(CLI * 100) / 100)
    
    // Set up the data
    const data = {
        index: isFinite(CLI) ? CLI : 0,
    }

    return data;
}

export { CalculateColemanIndex };
