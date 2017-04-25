/**
 * Created by rinat_y on 1/16/17.
 */
// sendEvent = function() {
//     $('#show-phone-number').trigger('next.m.2');
// }

// sendEvent = function() {
//     $('#show-phone-number-paid').trigger('next.m.2');
// }

sendEvent = function(sel, step) {
    $(sel).trigger('next.m.' + step);
}