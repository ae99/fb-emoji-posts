from flask import Flask, request, jsonify
import json
# from pillow_thing import something as nlpify

def nlpify(strin=''):
	return strin.split(' ')

class Search:
	def __init__(self):
		with open('index.json', 'r') as f:
			self.index = json.loads(f.read())

		with open('emojis.json', 'r') as f:
			self.emojis = json.loads(f.read())

	def query(self, word=''):
		for k,v in self.index.iteritems():
			if word.lower() in v:
				return k
		return None

	def match(self, name=''):
		return self.emojis.get(name, {'char': None}).get('char', None)

emoji_search = Search()

app = Flask(__name__)

app.debug = True

@app.route('/')
def index():
	return jsonify({})

@app.route('/search')
def get():
	query_string = request.args
	text_to_print = query_string.get('query', '')
	nlp_data = nlpify(text_to_print)
	emojis = []
	for wrd in nlp_data:
		emoj = emoji_search.query(wrd)
		if emoj:
			emojis.append([emoj, emoji_search.match(emoj)])
	return jsonify({'success': True, 'emojis': emojis})

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
	app.run(port=5000, threaded=True)