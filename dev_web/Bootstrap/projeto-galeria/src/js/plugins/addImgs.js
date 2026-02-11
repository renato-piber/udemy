import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'

import fp1 from '../../imgs/floripa1.png'
import ny1 from '../../imgs/ny1.png'
import ny2 from '../../imgs/ny2.png'
import ny3 from '../../imgs/ny3.png'
import ny4 from '../../imgs/ny4.png'
import rj1 from '../../imgs/rj1.png'

const images = [
    {src: fp1, city: 'Floria'}
]
$.fn.addImgs = function () {

}

onLoadHtmlSuccess(function () {
    $('[wm-city-images]').cityButtons()
})