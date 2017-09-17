module.exports = (date) => {
	const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUEST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
	let thisYear = date.getFullYear();
	let thisMonth = date.getMonth();
	let thisDate = date.getDate();
	return months[thisMonth] + ' ' + thisDate + ', ' +thisYear;
};