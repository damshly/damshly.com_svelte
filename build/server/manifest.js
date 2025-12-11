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
		client: {start:"_app/immutable/entry/start.CWz0ORI5.js",app:"_app/immutable/entry/app.CM8bfJT0.js",imports:["_app/immutable/entry/start.CWz0ORI5.js","_app/immutable/chunks/D34tXvnH.js","_app/immutable/chunks/B952njb9.js","_app/immutable/chunks/DT1BJyTm.js","_app/immutable/chunks/BCxILywt.js","_app/immutable/chunks/CtV13-Of.js","_app/immutable/chunks/DYlD9d2T.js","_app/immutable/chunks/CcCOONoy.js","_app/immutable/chunks/DGcQCePE.js","_app/immutable/entry/app.CM8bfJT0.js","_app/immutable/chunks/DT1BJyTm.js","_app/immutable/chunks/BCxILywt.js","_app/immutable/chunks/CtV13-Of.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B952njb9.js","_app/immutable/chunks/DYlD9d2T.js","_app/immutable/chunks/CcCOONoy.js","_app/immutable/chunks/D2tprn_w.js","_app/immutable/chunks/BJ9kv18j.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C7G2ckv2.js')),
			__memo(() => import('./chunks/1-FqOBeD9k.js')),
			__memo(() => import('./chunks/4-BmC3I3FI.js'))
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
