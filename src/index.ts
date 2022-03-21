import { ReplacementFn, SingleReplacementArgs } from './models';

const replaceMap: ReplacementFn = (srcString, map) => {
	let result = srcString;

	Object.keys(map).forEach((key) => {
		const srcSubstring = key;
		const targetString = map[key];
		const indexes = findChangeIndexes(srcString, srcSubstring);
		const target = typeof targetString === 'string' ? targetString : getRandomStringFromArray(targetString);

		result = singleReplacement({
			srcString: result,
			srcSubstring,
			indexes,
			targetString: target,
		});
	});

	return result;
};

const findChangeIndexes = (srcString: string, substring: string) => {
	const indexes: Array<number> = [];
	if (!srcString.includes(substring)) return indexes;
	if (substring.length === 0 || srcString.length === 0) return indexes;

	let currString = srcString;
	while (currString.includes(substring)) {
		const lastOcurrence = indexes[indexes.length - 1] + substring.length || 0;
		const ocurrenceIndex = currString.indexOf(substring);
		indexes.push(ocurrenceIndex + lastOcurrence);
		currString = currString.slice(ocurrenceIndex + substring.length);
	}

	return indexes;
};

const singleReplacement = ({ srcString, srcSubstring, targetString, indexes }: SingleReplacementArgs) => {
	let resultString = '';
	let currIndex = 0;
	indexes.forEach((index) => {
		resultString += srcString.substring(currIndex, index) + targetString;
		currIndex = index + targetString.length + (srcSubstring.length - targetString.length);
	});

	resultString += srcString.substring(currIndex);
	return resultString;
};

const getRandomStringFromArray = (arr: string[]) => {
	const randomIndex = Math.round(Math.random() * (arr.length - 1));
	return arr[randomIndex];
};

export default replaceMap;
