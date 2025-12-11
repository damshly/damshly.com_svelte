const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DLPlWRYt.js",app:"_app/immutable/entry/app.DOr9dOxN.js",imports:["_app/immutable/entry/start.DLPlWRYt.js","_app/immutable/chunks/BG20cPq2.js","_app/immutable/chunks/B952njb9.js","_app/immutable/chunks/DT1BJyTm.js","_app/immutable/chunks/BCxILywt.js","_app/immutable/chunks/CtV13-Of.js","_app/immutable/chunks/DYlD9d2T.js","_app/immutable/chunks/CcCOONoy.js","_app/immutable/chunks/CZ5uexl4.js","_app/immutable/entry/app.DOr9dOxN.js","_app/immutable/chunks/DT1BJyTm.js","_app/immutable/chunks/BCxILywt.js","_app/immutable/chunks/CtV13-Of.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B952njb9.js","_app/immutable/chunks/DYlD9d2T.js","_app/immutable/chunks/CcCOONoy.js","_app/immutable/chunks/D2tprn_w.js","_app/immutable/chunks/BJ9kv18j.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-RwHhSMD0.js')),
			__memo(() => import('./chunks/1-By1AeH74.js')),
			__memo(() => import('./chunks/4-BbEREgzm.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/sverdle/how-to-play"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
