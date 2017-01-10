// class Invoice {
// 	companyProfile : string;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 	constructor(public name, public city, public state) {
// 		this.companyProfile = name + " " + city + " " + state;
// 	}
// }
// var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
// var yahooInvoice = new Invoice('yahoo', 'SF', 'State');
// console.log(googleInvoice.companyProfile);
// console.log(yahooInvoice.companyProfile);
// move to inheritance
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
var Invoice = (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    return Invoice;
}(Report));
var BillOfLading = (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    return BillOfLading;
}(Report));
var invoice = new Invoice('Google', 200);
console.log(invoice.companyProfile);
//# sourceMappingURL=classes.js.map