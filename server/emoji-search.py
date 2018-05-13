import json

class Search:
	def __init__(self):
		with open('index.json', 'r') as f:
			self.index = json.loads(f.read())

	def query(self, word=''):
		for k,v in self.index.iteritems():
			if word.lower() in v:
				return k
		return None

s = Search()
