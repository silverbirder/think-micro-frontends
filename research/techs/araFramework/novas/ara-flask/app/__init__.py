from flask import Flask
from hypernova_jinja2_directive import nova
# Initialize the app
app = Flask(__name__, instance_relative_config=True)

# Load the views
from app import views

# Load the config file
app.config.from_object('config')


app.jinja_env.globals.update(nova=nova)