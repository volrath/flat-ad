const path = require('path')

module.exports = function(ctx) {
    let plugins = [
        require('postcss-import')({
            from: path.join(ctx.cwd, 'css')
        }),
        require('postcss-preset-env')({
            features: {
                'color-mod-function': true,
                'nesting-rules': true,
            },
        }),
    ]
    plugins.push(require('cssnano')({ preset: 'default' }))

    return { plugins }
}
