"use strict";
// Start Mowing --> Pending
// Complete mowing process --> Resolve
// Did not complete the mowing process successfully --> Reject
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('Uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing');
})
    .then((res) => {
    compress = res;
    return performUpload('transfering');
})
    .then((res) => {
    transfer = res;
    return performUpload('Image Upload Completed');
});
//# sourceMappingURL=promises.js.map