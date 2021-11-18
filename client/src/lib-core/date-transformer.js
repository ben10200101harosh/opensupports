import moment from 'moment';
import sessionStore from 'lib-app/session-store';

const stringDateFormat = 'YYYYMMDDHHmm';
const localUTCMins = new Date().getTimezoneOffset();
const language = sessionStore.getConfigs().language;

export default {
    stringDateToMoment(date) {
        return moment(`${date}`, stringDateFormat);
    },
    momentToStringDate(date) {
        return date.locale(language).format(stringDateFormat);
    },
    UTCDateToLocalNumericDate(date) {
        return JSON.parse(this.momentToStringDate(this.stringDateToMoment(date).subtract(localUTCMins, 'minutes')));
    },
    localDateToUTCNumericDate(date) {
        return JSON.parse(this.momentToStringDate(this.stringDateToMoment(date).add(localUTCMins, 'minutes')));
    },
    rangeTransformer(range, trasformerFunctionKey) {
        const trasformerDateFunction = {
            UTCToLocal: this.UTCDateToLocalNumericDate.bind(this),
            localToUTC: this.localDateToUTCNumericDate.bind(this)
        }[trasformerFunctionKey];

        return range.map((date) => {return trasformerDateFunction(JSON.stringify(date))});
    },
    transformToString(date, expressive = true, retrunShortcutDate = false) {
        const momentDateLocal = this.stringDateToMoment(JSON.stringify(this.UTCDateToLocalNumericDate(date)));
        if(expressive) momentDateLocal.locale(language).format('D MMMM YYYY');
        if(retrunShortcutDate) return momentDateLocal.locale(language).format('D MMM YYYY, HH:mm');
        return momentDateLocal.locale(language).format('D MMMM YYYY, HH:mm');
    },
    getDate(date) {
        return date < 10 ? `0${date}` : `${date}`;
    },
    getDateToday() {
        let today = new Date();
        let Year = `${today.getFullYear()}`;
        let Month = this.getDate(today.getMonth()+1);
        let Day = this.getDate(today.getDate());
        let newDate = Year.concat(Month.concat(Day));

        return newDate*1;
    }
};
