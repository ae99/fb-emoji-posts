from flask import Flask, request, jsonify
import base64
from io import BytesIO
# from pillow_thing import something as imagifier

def imagifier(text=''):
	buffered = BytesIO()
	# image.save(buffered, format="PNG")
	return base64.b64encode(buffered.getvalue())

app = Flask(__name__)

app.debug = True

@app.route('/')
def index():
	return jsonify({})

@app.route('/search')
def get():
	query_string = request.args
	text_to_print = query_string.get('query', '')
	img_data = imagifier(text=text_to_print)
	base_64_string = 'data:image/png;base64, {}'.format(img_data)
	return jsonify({'success': True, 'img': base_64_string})

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