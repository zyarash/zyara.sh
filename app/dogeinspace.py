from flask import (
    Flask,
    render_template,
    send_from_directory,
    url_for,
)
from flask_assets import Environment, Bundle


app = Flask(__name__)
assets = Environment(app)
assets.load_path = ['assets', 'bower_components']
assets.from_module('bundle')


@app.route('/')
def root():
    return render_template('doge.html')


@app.route('/mikeandjen')
def mikeandjen():
    #if False:
    #    return render_template('loading.html')
    #else:
    return render_template('mikeandjen.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
