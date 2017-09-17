module.exports = {
	// type为0表示升序，为1表示降序
	sortTime: (arr, type) => {
		function compare (val1, val2) {
			if (val1.id > val2.id) {
				return type === 0 ? -1 : 1;
			} else if (val1.id < val2.id) {
				return type === 0 ? 1 : -1;
			}
			return 0;
		}
		arr.sort(compare);
		return arr;
	}
};