from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

from home import home_bp

app = Flask(__name__)
CORS(app)

#routes
@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

# @app.route('/<string:name>/')
# def hello(name):
#     return "Hello " + name


#send a JSON formatted text back from the server
@app.route('/json/jsonreturn',methods=['GET'])
def hithere():
    return jsonify({'name': 'James','country':'US'})


#application redirection
@app.route('/home/')
def home():
    return "Home page"

@app.route('/contact')
def contact():
    return "Contact page"

#tea pot status code
@app.route('/teapot')
def status():
    return "Would you care for a tea pot?",418

#use blueprints to breakup information
#register blueprint in the main application
app.register_blueprint(home_bp,url_prefix='/home')


#render a template
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)



#how to log information 
#app.logger.debug('This is a DEBUG message')
#app.logger.info('This is an INFO message')
#app.logger.warning('This is a WARNING message')
#app.logger.error('This is an ERROR message')
#end how to log information


#end routes    

#main server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)  