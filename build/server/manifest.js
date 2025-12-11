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
		client: {start:"_app/immutable/entry/start.CZOM_CJV.js",app:"_app/immutable/entry/app.BC-jeLbs.js",imports:["_app/immutable/entry/start.CZOM_CJV.js","_app/immutable/chunks/W7JBj7Un.js","_app/immutable/chunks/B952njb9.js","_app/immutable/chunks/DT1BJyTm.js","_app/immutable/chunks/BCxILywt.js","_app/immutable/chunks/CtV13-Of.js","_app/immutable/chunks/DYlD9d2T.js","_app/immutable/chunks/CcCOONoy.js","_app/immutable/chunks/CA762D2x.js","_app/immutable/entry/app.BC-jeLbs.js","_app/immutable/chunks/DT1BJyTm.js","_app/immutable/chunks/BCxILywt.js","_app/immutable/chunks/CtV13-Of.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B952njb9.js","_app/immutable/chunks/DYlD9d2T.js","_app/immutable/chunks/CcCOONoy.js","_app/immutable/chunks/D2tprn_w.js","_app/immutable/chunks/BJ9kv18j.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-WGcXyGYR.js')),
			__memo(() => import('./chunks/1-BJ19I2To.js')),
			__memo(() => import('./chunks/4-BTv0ZsZq.js'))
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
