from flask import Blueprint

home_bp = Blueprint('home', __name__)

@home_bp.route('/hello_blueprint/')
def hello():    
    return "Hello from the home page, this is from the blueprint."
    