from flask import Flask

app = Flask(__name__, static_folder='/', template_folder='../', )

from app import routes