export type ReplacementMap = {
	[key: string]: string | string[];
};

export type ReplacementFn = (srcString: string, map: ReplacementMap) => string;

export type SingleReplacementArgs = {
	srcString: string;
	srcSubstring: string;
	targetString: string;
	indexes: number[];
};

export const replaceMap: ReplacementFn;
