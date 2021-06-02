module.exports = {
    testedItems: function (data) {
        let filterd_json = data.wines.filter(wine => wine.taster_name == null);
        return Object.keys(filterd_json).length;
    },
    maxPoints: function (data) {
        let max_points = data.wines.reduce(function (max, x) {
            return (x.points > max) ? x.points : max;
        }, 0)
        return max_points;
    },
    cheapestWine: function (data) {
        let minimum_price = -1;
        let wine;
        data.wines.forEach(function (obj) {
            if (minimum_price < 0 && obj.price != null) {
                minimum_price = obj.price;
                wine = obj;
            }
            if (obj.price < minimum_price && obj.price != null) {
                wine = obj;
                minimum_price = obj.price;
            }
        });
        return wine;
    },
    provinces: function (data) {
        let provinces = [];
        data.wines.forEach(function (obj) {
            if (typeof obj.province == "string") {
                if (obj.province.startsWith("B")) {
                    provinces.push(obj.province);
                }
            }
        });
        return provinces;
    },
    popularCountry: function (data) {
        return data;
    },
    testedInCalifornia: function (data) {
        let filterd_json = data.wines.filter(wine => wine.taster_name != null && wine.province == "California");
        return Object.keys(filterd_json).length;
    },
    countryCount: function (data) {
        let countries = {};
        data.wines.forEach(function (obj) {
            countries[obj.country] = Object.keys(data.wines.filter(wine => wine.country == obj.country)).length;
        });
        return countries;
    },
    averagePrice: function (data) {
        let average_price = {average: 0};
        let total_price = 0;
        data.wines.forEach(function (obj) {
            if (typeof obj.price != "undefined")
                total_price += obj.price;
        });
        average_price.average = total_price / Object.keys(data.wines).length;
        return average_price;
    },
};