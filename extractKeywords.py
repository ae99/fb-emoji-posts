import nltk
from nltk import word_tokenize, pos_tag
import string
from collections import Counter

def getKeywords(quote):
    # Breaks sentences into segments
    words = word_tokenize(str(quote))
    striped_words = []

    for word in words:
        # Removes punctuation
        for punc in string.punctuation:
            word = word.strip().replace(punc, '')
        striped_words.append(word)

    # Assigns Pos Tags
    print(nltk.pos_tag(words))

    # Remove duplicates
    posWords = Counter(nltk.pos_tag(words))

    final = []
    for key, values in posWords.items():
        # Select Nouns and Proper Nouns (singular)
        if key[1] == "NNP" or key[1] == "NN":
            final.append(key[0])


    return final
