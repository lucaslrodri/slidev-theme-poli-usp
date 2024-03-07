import { defineConfig } from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            primary: {
                900: '#003135', //DARK25
                800: '#00636A', //DARK50
                700: '#0095AD', //DARK75
                600: '#00B2BF', //DARK80
                500: '#00C6D4', //DEFAULT
                DEFAULT: '#00C6D4', 
                400: '#40D4DF', //LIGHT75
                300: '#80E3EA', //LIGHT50
                200: '#BFF0F4', //LIGHT25
                100: '#E6FAFB', //LIGHT10
            },
            secondary: {
                900: '#402D00', //DARK25
                800: '#7F5B00', //DARK50
                700: '#BF8800', //DARK75
                600: '#DAA318', //DARK80
                500: '#FFB600', //DEFAULT
                DEFAULT: '#FFB600',
                400: '#FFC840', //LIGHT75
                300: '#FFDB80', //LIGHT50
                200: '#FFE094', //LIGHT25
                100: '#FFECBF', //LIGHT10
            },
            danger: {
                900: '#3E1118', //DARK25
                800: '#7B2130', //DARK50
                700: '#B93248', //DARK75
                600: '#D43C55', //DARK80
                500: '#F74360', //DEFAULT
                DEFAULT: '#F74360',
                400: '#F97288', //LIGHT75
                300: '#FBA1B0', //LIGHT50
                200: '#FDD0D7', //LIGHT25
                100: '#FFEDF0', //LIGHT10
            },
            safe: {
                900: '#06342A', //DARK25
                800: '#0B6954', //DARK50
                700: '#119D7E', //DARK75
                600: '#12A886', //DARK80
                500: '#17D2A8', //DEFAULT
                DEFAULT: '#17D2A8',
                400: '#51DDBE', //LIGHT75
                300: '#8AE8D3', //LIGHT50
                200: '#C5F3E9', //LIGHT25
                100: '#E8FBF7', //LIGHT10
            },
            grays: {
                900: '#141415', //DARK25
                800: '#282929', //DARK50
                700: '#3C3D3E', //DARK75
                600: '#404242', //DARK80
                500: '#505253', //DEFAULT
                DEFAULT: '#505253',
                400: '#7C7D7E', //LIGHT75
                300: '#A8A9A9', //LIGHT50
                200: '#D3D3D4', //LIGHT25
                150: '#E5E5E5', //LIGHT15
                100: '#EEEEEE', //LIGHT10
                50: '#F6F6F6', //LIGHT5
            },
        }
    }

})