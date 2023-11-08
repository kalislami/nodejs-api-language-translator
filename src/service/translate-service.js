import {validate} from "../validation/validation.js";
import {ResponseError} from "../error/response-error.js";
import {translateValidation} from "../validation/translate-validation.js";
import {sendRequest} from "../integration/google-translate.js";
import {languages} from "../integration/languages.js";

const deteksiBahasa = async (kalimat) => {
    kalimat = validate(translateValidation, kalimat);

    const result = await sendRequest('/detect', 'POST', {
        q: kalimat
    });

    if (!result) {
        throw new ResponseError(503, "Maaf layanan deteksi bahasa sedang sibuk");
    }

    return result.detections[0][0].language;
}

const translate = async (req) => {
    const bahasaAsal = await deteksiBahasa(req.kalimat);

    const result = await sendRequest('', 'POST', {
        q: req.kalimat,
		target: 'id',
		source: bahasaAsal
    })

    if (!result) {
        throw new ResponseError(503, "Maaf layanan translate bahasa sedang sibuk");
    }

    const getLang = languages.find(c => c.code === bahasaAsal);

    return {
        kalimat: req.kalimat,
        arti: result.translations[0].translatedText,
        bahasa_asal: getLang ? getLang.name : bahasaAsal,
        bahasa_arti: "Indonesia"  
    }
}

export default {
    translate
}