from extractKeywords import getKeywords
from flask import Flask, request, jsonify
from random import randint
import json
import requests

class Search:
	def __init__(self):
		with open('emojis.json', 'r', encoding='utf-8') as f:
			self.emojis = json.loads(f.read())

		for k,v in self.emojis.items():
			self.emojis[k]['keywords'].append(k)

	def query(self, word=''):
		matches = []
		for v in self.emojis.values():
			for kw in v.get('keywords', None):
				word = " ".join(word.split('_'))
				if word.lower() in kw and (withinone(kw, word, 1) or len(kw) == len(word)):
					a = v.get('char', None)
					if a:
						matches.append(a)

		return matches

def withinone(a, b, c):
	return len(a)-c == len(b) or len(a)+c == len(b)

emoji_search = Search()

app = Flask(__name__)

app.debug = True

@app.route('/')
def index():
	return jsonify({})

@app.route('/text_to_emoji')
def text_to_emoji():
	query_string = request.args
	text = query_string.get('query', '')
	emojis = []
	if "stars" in text:
		text = text.replace("stars", "star")
	if "shirts" in text:
		text = text.replace("shirts", "shirt")
	kwds = getKeywords(text)
	for wrd in kwds:
		emoj = emoji_search.query(wrd)
		[emojis.append(e) for e in emoj]
	return jsonify({'success': True, 'emojis': emojis})

@app.route('/get_image')
def get_image():
	req = 'https://pixabay.com/api/?key=8972748-543159674e6cf6356e147ddcd&image_type=photo&pretty=true&q={}'
	query_string = request.args
	kwds = getKeywords(query_string.get('query', ''))
	query_arg = '+'.join(kwds)
	if query_arg[0] == '+':
		query_arg = query_arg[1:]
	if len(query_arg) > 2 and query_arg[-1] == '+':
		query_arg = query_arg[0:len(query_arg)-1]

	r = requests.get(req.format(query_arg))
	j = r.json()

	if r.status_code != 200:
		print('{}{}'.format(r.status_code, 'error'))

	ran = randint(0, 4)
	images = [x['webformatURL'] for x in j['hits']]

	return jsonify({'success': True, 'images': images})


@app.after_request
def add_ua_compat(response):
	response.headers['Access-Control-Allow-Origin'] = '*'
	response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
	return response

@app.errorhandler(404)
@app.errorhandler(405)
@app.errorhandler(500)
def error(e):
	return jsonify({'error': True, 'code': e.code, 'message': e.name.lower()}), e.code

if __name__ == '__main__':
	app.run(port=5000)