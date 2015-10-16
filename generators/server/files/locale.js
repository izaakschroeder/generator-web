
import detect from 'negotiator/lib/language';

const locales = [ 'en', 'en-US' ];

export default function() : Function {
  return function(req, res, next) {
    req.locales = detect(req.get('Accept-Language'), locales);
    if (req.cookies && req.cookies.locale && req.cookies.locale in locales) {
      req.locale = req.cookies.locale;
    } else {
      req.locale = req.locales[0];
    }
    next();
  };
}
