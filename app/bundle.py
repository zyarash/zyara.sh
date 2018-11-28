from flask_assets import Bundle


doge_css = Bundle(
    'scss/layout.scss',
    'scss/doge.scss',
    filters='libsass',
    output='doge.css'
)

doge_js = Bundle(
    'jquery/dist/jquery.min.js',
    'js/common.js',
    'js/doge.js',
    output='doge.js'
)


mikeandjen_css = Bundle(
    'scss/layout.scss',
    'scss/mikeandjen.scss',
    filters='libsass',
    output='mikeandjen.css'
)

mikeandjen_js = Bundle(
    'jquery/dist/jquery.min.js',
    'js/common.js',
    'js/mikeandjen.js',
    output='mikeandjen.js'
)
