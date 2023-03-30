import dayjs from "dayjs";
import moment from "moment/moment";

export function filesize(size) {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
        (size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "kB", "MB", "GB", "TB"][i]
    );
}


export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
}


export const currentYearMontList = () => {
    const today = moment();
    const currentYear = today.year();
    const dateOptions = [];

    for (let month = 0; month < 12; month++) {
        let monthDate = moment([currentYear, month, 1]);
        dateOptions.push(monthDate.format('MMMM-YYYY'));
    }
    return dateOptions;
}


export const isUserPermittedToPerformAction = (permission, permissions) => {
    return permissions.includes(permission)
}
