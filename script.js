function getSentence(sentence) {
    return sentence;
}

function searchVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    return sentence.toLowerCase().split('').filter(char => vocals.includes(char));
}

function deleteDuplicity(list) {
    return [...new Set(list)];
}

function getVocals(sentence) {
    const foundVocals = searchVocals(sentence);
    const uniqueVocals = deleteDuplicity(foundVocals);
    return uniqueVocals.join(',');
}

function processInput() {
    const input = document.getElementById('sentenceInput').value;
    const result = getVocals(input);
    document.getElementById('result').textContent = `Vocales encontradas: ${result}`;
}
