var selectedHeading = '';

function logSelectedHeading(heading) {
    if (heading) {
        selectedHeading = heading;
        console.log('Selected Heading:', selectedHeading);
    } else {
        console.log('No heading selected.');
    }
}