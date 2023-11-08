import translateService from "../service/translate-service.js";

const translate = async (req, res, next) => {
    try {
        const result = await translateService.translate(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    translate
}