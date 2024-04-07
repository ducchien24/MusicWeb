/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'layout-bg':'#ced9d9',
        'layout-header-bg':'rgba(206, 217, 217, 0.8)',
        'player-bg':'#c0d8d8',
        'sidebar-bg':'hsla(0, 0%, 100%, 0.3)',
        'sidebar-popup-bg':'#cce0e0',
        'alpha-bg':'hsla(0, 0%, 100%, 0.3)',

      },
      color:{
        'layout-bg':'#ced9d9',
        'layout-header-bg':'rgba(206, 217, 217, 0.8)',
        'player-bg':'#c0d8d8',
        'sidebar-bg':'hsla(0, 0%, 100%, 0.3)',
        'sidebar-popup-bg':'#cce0e0',
        'alpha-bg':'hsla(0, 0%, 100%, 0.3)',
      },
      keyframes: {
       "slide-right" :{
         " 0%" :{
           " -webkit-transform": "translateX(-500px);",
                   " transform": "translateX(-500px);"
          },
          "100%" : {
            "-webkit-transform": "translateX(0);",
                   " transform": "translateX(0);"
          }
        }, 
        "slide-left" :{
          " 0%" :{
            " -webkit-transform": "translateX(500px);",
                    " transform": "translateX(500px);"
           },
           "100%" : {
             "-webkit-transform": "translateX(0);",
                    " transform": "translateX(0);"
           }
         },
         "slide-left2" :{
          " 0%" :{
            " -webkit-transform": "translateX(500px);",
                    " transform": "translateX(500px);"
           },
           "100%" : {
             "-webkit-transform": "translateX(0);",
                    " transform": "translateX(0);"
           }
         }
        
      },
      animation:  {
       "slide-right": "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
	        "slide-left": "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
          "slide-left2": "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      } 
    },
    screens:{
      "1600": "1600px"
    },
  },
  plugins: [],
}
