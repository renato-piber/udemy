const obj = {
    estaEntre(num, min, max, inclusivo = false) {
        if (inclusivo) {
            if (num >= min && num <= max)
                return true
            return false
        }
        else {
            if (num > min && num < max)
                return true
            return false
        }

    }

}

console.log(obj.estaEntre(3, 3, 150, true))