import nltk
from nltk import word_tokenize, pos_tag
from nltk.stem.snowball import SnowballStemmer
import string
from collections import Counter

def getKeywords(quote=''):
    stemmer = SnowballStemmer("english")
    # Breaks sentences into segments
    words = word_tokenize(str(quote))
    striped_words = []

    for word in words:
        # Removes punctuation
        for punc in string.punctuation:
            word = word.strip().replace(punc, '')
        if word.endswith("ing") or word.endswith("ed") or  word.endswith("er"):
            word = stemmer.stem(word)
        if word !=  '' and len(word) > 1:
            striped_words.append(word)

    # Assigns Pos Tags
    # print(nltk.pos_tag(striped_words))

    # Remove duplicates
    posWords = Counter(nltk.pos_tag(striped_words))

    final = []
    for key, values in posWords.items():
        # Select Nouns and Proper Nouns (singular)
        if key[1] == "NNP" or key[1] == "NN" or key[1] == "VBG" or key[1] == "JJ" or key[1] == "VBD" :
            final.append(key[0])
    # print(final)
    return final
