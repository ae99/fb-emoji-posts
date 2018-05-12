import nltk
from nltk import word_tokenize, pos_tag
import string
from collections import Counter

<<<<<<< HEAD
def getKeywords(quote):
=======
def getKeywords(quote=''):
>>>>>>> 1c707b51df70e9cb3c607d4fe46c839609f6570e
    # Breaks sentences into segments
    words = word_tokenize(str(quote))
    striped_words = []

    for word in words:
        # Removes punctuation
        for punc in string.punctuation:
            word = word.strip().replace(punc, '')

        if 'ing' in word:
            word = word.replace('ing', '')
        if word !=  '':
            striped_words.append(word)

    # Assigns Pos Tags
    # print(nltk.pos_tag(striped_words))

    # Remove duplicates
    posWords = Counter(nltk.pos_tag(striped_words))

    final = []
    for key, values in posWords.items():
        # Select Nouns and Proper Nouns (singular)
        if key[1] == "NNP" or key[1] == "NN" or key[1] == "VBG":
            final.append(key[0])
    # print(final)
<<<<<<< HEAD
    return final
=======
    return final
>>>>>>> 1c707b51df70e9cb3c607d4fe46c839609f6570e
