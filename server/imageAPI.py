import sys
import json
import requests
from random import randint

# parse in 1 or 2 arguments (keyword) or (keyword, color)
req = 'https://pixabay.com/api/?key=8972748-543159674e6cf6356e147ddcd&q='
if len(sys.argv) == 2:
    req += sys.argv[1]
elif len(sys.argv) == 3:
    req += sys.argv[1] + '+' + sys.argv[2]
req += '&image_type=photo&pretty=true'

#print (req)


r = requests.get(req)
j = r.json()
if r.status_code != 200:
    print ('error')

ran = randint(0, 4)

# prints URL of image found.
print(j['hits'][ran]['largeImageURL'])
