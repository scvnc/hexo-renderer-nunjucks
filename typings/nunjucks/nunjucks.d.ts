interface NunjucksOptions {
	watch?: boolean;
	autoescape?: boolean;
	noCache?: boolean;
}

interface NunjucksEnvironment {
	renderString: NunjucksRenderString;
}

interface NunjucksRenderString {
	(str: string, context: any): string;
}

interface NunjucksStatic {
	configure(templatesPath: string, options: NunjucksOptions): NunjucksEnvironment;
	configure(options: NunjucksOptions): NunjucksEnvironment;
	renderString: NunjucksRenderString;
}

declare var nunjucksStatic: NunjucksStatic; 

declare module 'nunjucks' {
	export = nunjucksStatic;
}