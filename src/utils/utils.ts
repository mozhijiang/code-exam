function objectToUrl(obj: object) {
    var _result: string[] = [];
    for (var key in obj) {
        var value = obj[key];
        if (value.constructor == Array) {
            value.forEach(function (_value) {
                _result.push(key + "=" + _value);
            });
        } else {
            _result.push(key + '=' + value);
        }
    }
    return _result.join('&');
};

export default {
    objectToUrl
};