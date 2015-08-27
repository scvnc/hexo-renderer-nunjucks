interface HexoRendererData {
	text: string;
	path: string;
}
interface HexoSyncRenderer {
	(data: HexoRendererData, locals: any): string;
}

interface HexoAsyncRenderer {
	(data: HexoRendererData, options: any, callback: (output: string) => any): any;
}

interface HexoExtend {
	renderer: {
		register(inputType: string, outputType: string, renderer: HexoSyncRenderer, isSync?: boolean): void;
		register(inputType: string, outputType: string, renderer: HexoAsyncRenderer): void;
	};
}

interface HexoStatic {
	theme_dir: string;
	extend: HexoExtend;
	config: any;
}