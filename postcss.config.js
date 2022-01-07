//postcss helps showing the new properties of css in unsoported navigators

const tailwindcss = require('tailwindcss')

module.exports={
    plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}