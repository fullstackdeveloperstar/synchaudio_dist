webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/admin/admin.module": [
		"../../../../../src/app/views/admin/admin.module.ts",
		"common",
		"admin.module"
	],
	"./views/others/others.module": [
		"../../../../../src/app/views/others/others.module.ts",
		"common",
		"others.module"
	],
	"./views/sessions/sessions.module": [
		"../../../../../src/app/views/sessions/sessions.module.ts",
		"common",
		"sessions.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-bottomplayer *ngIf=\"playerService.currentSong\" [songItem]=\"playerService.currentSong\"></app-bottomplayer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_route_parts_service__ = __webpack_require__("../../../../../src/app/shared/services/route-parts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_theme_service__ = __webpack_require__("../../../../../src/app/shared/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(title, router, activeRoute, routePartsService, themeService, renderer, playerService) {
        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.themeService = themeService;
        this.renderer = renderer;
        this.playerService = playerService;
        this.appTitle = 'Egret';
        this.pageTitle = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.changePageTitle();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.themeService.applyMatTheme(this.renderer);
    };
    AppComponent.prototype.changePageTitle = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (routeChange) {
            var routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            if (!routeParts.length)
                return _this.title.setTitle(_this.appTitle);
            // Extract title from parts;
            _this.pageTitle = routeParts
                .reverse()
                .map(function (part) { return part.title; })
                .reduce(function (partA, partI) { return partA + " > " + partI; });
            _this.pageTitle += " | " + _this.appTitle;
            _this.title.setTitle(_this.pageTitle);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_route_parts_service__["a" /* RoutePartsService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_player_service__["a" /* PlayerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { ErrorInterceptor } from './shared/helpers/error.interceptor';
// import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* rootRouterConfig */], { useHash: false })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            providers: [
                // ANGULAR MATERIAL SLIDER FIX
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["HAMMER_GESTURE_CONFIG"], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* GestureConfig */] },
                // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
                __WEBPACK_IMPORTED_MODULE_11__shared_services_player_service__["a" /* PlayerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_layouts_admin_layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_layouts_auth_layout_auth_layout_component__ = __webpack_require__("../../../../../src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_admin_auth_guard__ = __webpack_require__("../../../../../src/app/shared/services/auth/admin-auth.guard.ts");



var rootRouterConfig = [
    {
        path: '',
        redirectTo: 'page/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_components_layouts_auth_layout_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [
            {
                path: 'sessions',
                loadChildren: './views/sessions/sessions.module#SessionsModule',
                data: { title: 'Session' }
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__shared_components_layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'page',
                loadChildren: './views/others/others.module#OthersModule',
                data: { title: 'Page', breadcrumb: '' }
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__shared_components_layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_admin_auth_guard__["a" /* AdminAuthGuard */]],
        children: [
            {
                path: 'admin',
                loadChildren: './views/admin/admin.module#AdminModule',
                data: { title: 'Admin', breadcrumb: '' }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];


/***/ }),

/***/ "../../../../../src/app/shared/components/bottomplayer/bottomplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom-player\">\r\n    <div class=\"player\">\r\n        <div class=\"play-and-title\">\r\n            <img [src]=\"songItem.song_thumb || 'assets/images/music_icon.png'\" class=\"music-icon\">\r\n            <button mat-mini-fab color=\"default\" [disabled]=\"!isLoaded\" class=\"mr-1\" (click)=\"play()\">\r\n                <mat-icon>{{playerService.isPlaying ? 'pause' : 'play_arrow'}}</mat-icon>\r\n            </button>\r\n\r\n            <div>\r\n                <p class=\"song-title\">{{songItem.song_title}}</p>\r\n                <!-- <p class=\"song-artist\">{{artistItem.artist_name}}</p> -->\r\n            </div>\r\n\r\n            <div class=\"timing\">\r\n                {{currentTime}} | {{duration}}\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"music-player\">\r\n            <div [attr.id]=\"id\"></div>\r\n        </div>\r\n\r\n        <div class=\"actions\">\r\n            <div>\r\n                <button mat-mini-fab color=\"default\" class=\"mr-1\" [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                    <button mat-menu-item (click)=\"addToPlaylist()\">\r\n                        <span>Add To Playlist</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"downloadMP3()\">\r\n                        <span>Download - Mp3</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"songCredit()\">\r\n                        <span>Song Credits</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"downloadInst()\">\r\n                        <span>Instrumental</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"downloadLyrics()\">\r\n                        <span>Lyrics</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"gotoLicenseRequest()\">\r\n                        <span>LICENSE</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"playlist-actions\" *ngIf=\"playerService.playlist.length\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"savePlayList()\">Save</button>\r\n        <button mat-raised-button color=\"warn\" style=\"margin-left: 10px;\" (click)=\"clearPlaylist()\">Clear</button>\r\n    </div>\r\n\r\n    <div class=\"playlist\" *ngIf=\"playerService.playlist.length\">\r\n        <div *ngFor=\"let playlistItem of playerService.playlist\" class=\"playlist-item\">\r\n            <span>{{playlistItem.song_artist.artist_name}}</span>\r\n            <span>{{playlistItem.song_title}}</span>\r\n            <span>{{playlistItem.song_duration_text}}</span>\r\n            <div class=\"playlist-item-actions\">\r\n                <button mat-mini-fab color=\"default\" class=\"mr-1\" (click)=\"playListItem(playlistItem)\">\r\n                    <mat-icon>play_arrow</mat-icon>\r\n                </button>\r\n\r\n                <button mat-mini-fab color=\"default\" class=\"mr-1\" (click)=\"deleteListItem(playlistItem)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/bottomplayer/bottomplayer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom-player {\n  padding: 10px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  border: solid 1px #eee;\n  background: #fff; }\n  .bottom-player .player {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 10px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 100%; }\n  .bottom-player:hover {\n    -webkit-box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n            box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n    background: white; }\n  .bottom-player .music-player {\n    width: 40%; }\n  .bottom-player .song-title {\n    margin: 0;\n    font-weight: bold; }\n  .bottom-player .song-artist {\n    margin: 0;\n    font-size: 12px; }\n  .bottom-player .play-and-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .bottom-player .actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    justify-items: center; }\n  .bottom-player .music-icon {\n    width: 50px;\n    height: 50px;\n    border-radius: 9px;\n    -webkit-box-shadow: 2px 2px 9px -3px black;\n            box-shadow: 2px 2px 9px -3px black;\n    margin-right: 10px; }\n  .bottom-player .timing {\n    margin-left: 10px; }\n  .bottom-player .playlist-actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 5px; }\n  .bottom-player .playlist {\n    max-height: 200px;\n    overflow-y: scroll;\n    border: solid 1px #ddd; }\n  .bottom-player .playlist .playlist-item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin: 10px;\n      -webkit-box-shadow: 1px 1px 10px -7px black;\n              box-shadow: 1px 1px 10px -7px black;\n      padding: 5px;\n      border-radius: 15px; }\n  .bottom-player .playlist .playlist-item .playlist-item-actions {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/bottomplayer/bottomplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__ = __webpack_require__("../../../../wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_string__ = __webpack_require__("../../../../random-string/lib/random-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_app_loader_app_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_admin_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__songitem_songitempopup_songitempopup_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__songitem_songcreditpopup_songcreditpopup_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_admin_playlist_playlistpopup_playlist_table_popup_component__ = __webpack_require__("../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BottomPlayer = (function () {
    // @Input() artistItem: any;
    function BottomPlayer(authService, dialog, ngZone, router, playerService, loader, snack, playlistService) {
        this.authService = authService;
        this.dialog = dialog;
        this.ngZone = ngZone;
        this.router = router;
        this.playerService = playerService;
        this.loader = loader;
        this.snack = snack;
        this.playlistService = playlistService;
        this.id = 'songitem-';
        this.isLoaded = false;
        this.isPlaying = false;
        this.currentTime = '00:00';
        this.duration = '00:00';
    }
    BottomPlayer.prototype.ngOnInit = function () {
        var me = this;
        setTimeout(function () {
            me.initPlayer();
        }, 100);
        this.id += __WEBPACK_IMPORTED_MODULE_2_random_string__();
    };
    BottomPlayer.prototype.initPlayer = function () {
        var me = this;
        this.wavesurfer = __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__["create"]({
            container: '#' + this.id,
            waveColor: '#428bca',
            progressColor: '#31708f',
            height: 50,
            barWidth: 2
        });
        this.wavesurfer.load(this.songItem.song_music);
        this.wavesurfer.on('ready', function () {
            me.isLoaded = true;
            me.wavesurfer.play();
            // me.isPlaying = true;
            me.playerService.isPlaying = true;
            var duration = me.wavesurfer.getDuration();
            var seconds = Math.floor(duration);
            var mins = Math.floor(seconds / 60);
            seconds = seconds % 60;
            me.duration = (mins < 10 ? ('0' + mins) : mins) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
        });
        this.wavesurfer.on('finish', function () {
            // me.isPlaying = false;
            me.playerService.isPlaying = false;
        });
        this.wavesurfer.on('audioprocess', function (data) {
            me.ngZone.run(function () {
                var seconds = Math.floor(me.wavesurfer.getCurrentTime());
                var mins = Math.floor(seconds / 60);
                seconds = seconds % 60;
                me.currentTime = (mins < 10 ? ('0' + mins) : mins) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
            });
            if (!me.authService.currentUserValue) {
                if (me.wavesurfer.getCurrentTime() >= 30) {
                    me.wavesurfer.pause();
                    // me.isPlaying = false;
                    me.playerService.isPlaying = false;
                    me.ngZone.run(function () {
                        me.openPopUp();
                    });
                    console.log(me.wavesurfer.getCurrentTime());
                }
            }
        });
    };
    BottomPlayer.prototype.play = function () {
        if (this.isLoaded) {
            if (this.playerService.isPlaying) {
                this.wavesurfer.pause();
                // this.isPlaying = false;
                this.playerService.isPlaying = false;
            }
            else {
                this.wavesurfer.play();
                // this.isPlaying = true;
                this.playerService.isPlaying = true;
            }
        }
    };
    BottomPlayer.prototype.openPopUp = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__songitem_songitempopup_songitempopup_component__["a" /* SongItemPopupComponent */], {
            disableClose: false
        });
    };
    BottomPlayer.prototype.gotoLicenseRequest = function () {
        this.router.navigate(['/page/licenserequest/' + this.songItem.song_id]);
    };
    BottomPlayer.prototype.ngOnDestroy = function () {
        this.wavesurfer.unAll();
        this.wavesurfer.destroy();
    };
    BottomPlayer.prototype.downloadLyrics = function () {
        if (this.songItem.song_music_lyrics) {
            window.open(this.songItem.song_music_lyrics);
        }
    };
    BottomPlayer.prototype.downloadMP3 = function () {
        if (this.songItem.song_music) {
            window.open(this.songItem.song_music);
        }
    };
    BottomPlayer.prototype.downloadInst = function () {
        if (this.songItem.song_music_inst) {
            window.open(this.songItem.song_music_inst);
        }
    };
    BottomPlayer.prototype.songCredit = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__songitem_songcreditpopup_songcreditpopup_component__["a" /* SongCreditPopupComponent */], {
            disableClose: false,
            width: '300px',
            data: { payload: this.songItem }
        });
    };
    BottomPlayer.prototype.addToPlaylist = function () {
        this.playerService.addPlaylist(this.songItem);
    };
    BottomPlayer.prototype.clearPlaylist = function () {
        this.playerService.clearPlaylist();
    };
    BottomPlayer.prototype.playListItem = function (songItem) {
        var me = this;
        this.playerService.currentSong = null;
        setTimeout(function () {
            me.playerService.currentSong = songItem;
        }, 10);
    };
    BottomPlayer.prototype.deleteListItem = function (songItem) {
        this.playerService.deletePlayListItem(songItem);
    };
    BottomPlayer.prototype.savePlayList = function () {
        if (!this.authService.currentUserValue) {
            this.router.navigate(['/sessions/signin']);
        }
        else {
            this.openPopUpForPlaylist({}, true);
        }
    };
    BottomPlayer.prototype.openPopUpForPlaylist = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? 'Add new Playlist' : 'Update Playlist';
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__views_admin_playlist_playlistpopup_playlist_table_popup_component__["a" /* PlaylistTablePopupComponent */], {
            width: '720px',
            height: '500px',
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            if (isNew) {
                res['songs'] = _this.playerService.playlist;
                _this.playlistService.addItemWithSongs(res)
                    .subscribe(function (data) {
                    _this.loader.close();
                    _this.snack.open('Playlist Added!', 'OK', { duration: 4000 });
                    _this.playerService.clearPlaylist();
                    // this.getItems();
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BottomPlayer.prototype, "songItem", void 0);
    BottomPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bottomplayer',
            template: __webpack_require__("../../../../../src/app/shared/components/bottomplayer/bottomplayer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/bottomplayer/bottomplayer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_7__services_app_loader_app_loader_service__["a" /* AppLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_8__services_admin_playlist_service__["a" /* PlaylistService */]])
    ], BottomPlayer);
    return BottomPlayer;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-bar\" *ngIf=\"layout.layoutConf.useBreadcrumb && layout.layoutConf.breadcrumb === 'simple'\">\r\n  <ul class=\"breadcrumb\">\r\n    <li *ngFor=\"let part of routeParts\"><a routerLink=\"/{{part.url}}\">{{part.breadcrumb | translate}}</a></li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n<div class=\"breadcrumb-title\" *ngIf=\"layout.layoutConf.useBreadcrumb && layout.layoutConf.breadcrumb === 'title' && !isHome\" >\r\n  <div class=\"breadcrumb-content\">\r\n    <h1 class=\"bc-title\">{{routeParts[routeParts.length -1]['breadcrumb'] | translate}}</h1>\r\n    <!-- <ul class=\"breadcrumb\" *ngIf=\"routeParts.length > 1\">\r\n      <li *ngFor=\"let part of routeParts\"><a routerLink=\"/{{part.url}}\" class=\"text-muted\">{{part.breadcrumb | translate}}</a></li>\r\n    </ul> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumb-title {\n  background: #ee2b7a;\n  color: #fff;\n  margin: auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .breadcrumb-title .breadcrumb-content {\n    max-width: 1200px;\n    width: 1200px;\n    padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_route_parts_service__ = __webpack_require__("../../../../../src/app/shared/services/route-parts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_layout_service__ = __webpack_require__("../../../../../src/app/shared/services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
        var _this = this;
        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        // public isEnabled: boolean = true;
        this.isHome = false;
        this.routerEventSub = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (routeChange) {
            _this.routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            // generate url from parts
            _this.routeParts.reverse().map(function (item, i) {
                item.breadcrumb = _this.parseText(item);
                item.urlSegments.forEach(function (urlSegment, j) {
                    if (j === 0)
                        return item.url = "" + urlSegment.path;
                    item.url += "/" + urlSegment.path;
                });
                if (i === 0) {
                    return item;
                }
                // prepend previous part to current part
                item.url = _this.routeParts[i - 1].url + "/" + item.url;
                return item;
            });
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('home')) {
            this.isHome = true;
        }
        else {
            this.isHome = false;
        }
        this.router.events.subscribe(function (val) {
            // see also 
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // Hide loading indicator
                if (val.url.includes('home')) {
                    _this.isHome = true;
                }
                else {
                    _this.isHome = false;
                }
            }
        });
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    BreadcrumbComponent.prototype.parseText = function (part) {
        part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
            var r = part.params[b];
            return typeof r === 'string' ? r : a;
        });
        return part.breadcrumb;
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__("../../../../../src/app/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_route_parts_service__["a" /* RoutePartsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_layout_service__["a" /* LayoutService */]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/customizer/customizer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-customizer\">\r\n  <div class=\"handle\" *ngIf=\"!isCustomizerOpen\">\r\n    <button \r\n    mat-fab\r\n    color=\"warn\" \r\n    (click)=\"isCustomizerOpen = true\">\r\n      <mat-icon>settings</mat-icon>\r\n    </button>\r\n  </div>\r\n  <mat-card class=\"p-0\" *ngIf=\"isCustomizerOpen\">\r\n    <mat-card-title class=\"mat-bg-warn\">\r\n      <div class=\"card-title-text\">\r\n        <span>Settings</span>\r\n        <span fxFlex></span>\r\n        <button \r\n        class=\"card-control\" \r\n        mat-icon-button\r\n        (click)=\"isCustomizerOpen = false\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <div class=\"pb-1\">\r\n        <h5 class=\"mt-0\">Layouts</h5>\r\n        <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"selectedLayout\" (change)=\"changeLayoutStyle($event)\">\r\n            <mat-radio-button [value]=\"'top'\"> Top Navigation </mat-radio-button>\r\n            <mat-radio-button [value]=\"'side'\"> Side Navigation </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"pb-1\">\r\n        <mat-checkbox [(ngModel)]=\"isTopbarFixed\" (change)=\"toggleTopbarFixed($event)\" [disabled]=\"selectedLayout === 'top'\" [value]=\"selectedLayout !== 'top'\">Fixed Topbar</mat-checkbox>\r\n      </div>\r\n      <div class=\"pb-1\">\r\n        <mat-checkbox [(ngModel)]=\"layoutConf.breadcrumb\" (change)=\"toggleBreadcrumb($event)\">Use breadcrumb</mat-checkbox>\r\n      </div>\r\n      <div class=\"pb-1\">\r\n          <h6 class=\"mt-0\">Breadcrumb Style</h6>\r\n          <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"layoutConf.breadcrumb\">\r\n              <mat-radio-button [value]=\"'simple'\"> Simple </mat-radio-button>\r\n              <mat-radio-button [value]=\"'title'\"> Simple with title </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      <div class=\"pb-1 pos-rel\">\r\n        <h6 class=\"m-0 pb-1\">Choose a Navigation Style</h6>\r\n        <mat-radio-group \r\n        fxLayout=\"column\" \r\n        [(ngModel)]=\"selectedMenu\" \r\n        (change)=\"changeSidenav($event)\" \r\n        [disabled]=\"selectedLayout === 'top'\">\r\n          <mat-radio-button \r\n          *ngFor=\"let type of sidenavTypes\" \r\n          [value]=\"type.value\">\r\n            {{type.name}}\r\n          </mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      \r\n      <div class=\"pb-1 pt-1\">\r\n        <mat-checkbox [(ngModel)]=\"isRTL\" (change)=\"toggleDir($event)\">RTL</mat-checkbox>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/customizer/customizer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-customizer {\n  position: fixed;\n  z-index: 100;\n  bottom: 16px;\n  right: 24px; }\n  #app-customizer .handle {\n    float: right; }\n  #app-customizer .mat-card-content {\n    padding: 1rem 1.5rem 2rem; }\n  .pos-rel {\n  position: relative;\n  z-index: 99; }\n  .pos-rel .olay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 100; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/customizer/customizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_layout_service__ = __webpack_require__("../../../../../src/app/shared/services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomizerComponent = (function () {
    function CustomizerComponent(navService, layout) {
        this.navService = navService;
        this.layout = layout;
        this.isCustomizerOpen = false;
        this.sidenavTypes = [{
                name: 'Default Menu',
                value: 'default-menu'
            }, {
                name: 'Separator Menu',
                value: 'separator-menu'
            }, {
                name: 'Icon Menu',
                value: 'icon-menu'
            }];
        this.selectedMenu = 'icon-menu';
        this.isTopbarFixed = false;
        this.isRTL = false;
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.layoutConf = this.layout.layoutConf;
        this.selectedLayout = this.layoutConf.navigationPos;
        this.isTopbarFixed = this.layoutConf.topbarFixed;
        this.isRTL = this.layoutConf.dir === 'rtl';
    };
    CustomizerComponent.prototype.changeLayoutStyle = function (data) {
        this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
    };
    CustomizerComponent.prototype.changeSidenav = function (data) {
        this.navService.publishNavigationChange(data.value);
    };
    CustomizerComponent.prototype.toggleBreadcrumb = function (data) {
        this.layout.publishLayoutChange({ breadcrumb: data.checked });
    };
    CustomizerComponent.prototype.toggleTopbarFixed = function (data) {
        this.layout.publishLayoutChange({ topbarFixed: data.checked });
    };
    CustomizerComponent.prototype.toggleDir = function (data) {
        var dir = data.checked ? 'rtl' : 'ltr';
        this.layout.publishLayoutChange({ dir: dir });
    };
    CustomizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__("../../../../../src/app/shared/components/customizer/customizer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/customizer/customizer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_layout_service__["a" /* LayoutService */]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <img class=\"logo-footer\" src=\"assets/images/header-logo.png\">\r\n  <div>\r\n    <div class=\"socials\" *ngIf=\"social\">\r\n      \r\n      <a [href]=\"social.social_twitter\" target=\"_blank\" class=\"social-item\">TWITTER</a>\r\n      <a [href]=\"social.social_spotify\" target=\"_blank\" class=\"social-item\">SPOTIFY</a>\r\n      <a [href]=\"social.social_facebook\" target=\"_blank\"class=\"social-item\">FACEBOOK</a>\r\n      <a [href]=\"social.social_instagram\" target=\"_blank\" class=\"social-item\">INSTAGRAM</a>\r\n      <a [href]=\"social.social_youtube\" target=\"_blank\" class=\"social-item\">YOUTUBE</a>\r\n      <a [href]=\"social.social_applemusic\" target=\"_blank\" class=\"social-item\">APPLE MUSIC</a>\r\n      <a [href]=\"social.social_soundcloud\" target=\"_blank\" class=\"social-item\">SOUNDCLOUD</a>\r\n    </div>\r\n    \r\n    <div class=\"copy-right\">\r\n        ©2019 SYNCHAUDIO. ALL RIGHTS RESERVED <br>POWERED BY SYNCHAUDIO\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  padding-top: 100px;\n  padding-bottom: 250px;\n  background: #5e5e5e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .footer .socials {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    color: #d5d5d5; }\n  .footer .socials .social-item {\n      padding: 0 10px;\n      font-size: 15px;\n      font-weight: 600; }\n  .footer .copy-right {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 15px;\n    color: #d5d5d5; }\n  .logo-footer {\n  height: 74px;\n  margin-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    FooterComponent.prototype.loadSocial = function () {
        var _this = this;
        this.dashboardService.getSocial().subscribe(function (data) {
            _this.social = data;
        });
    };
    FooterComponent.prototype.ngOnInit = function () {
        this.loadSocial();
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_dashboard_service__["a" /* DashboardService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/header-side/header-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_theme_service__ = __webpack_require__("../../../../../src/app/shared/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_layout_service__ = __webpack_require__("../../../../../src/app/shared/services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderSideComponent = (function () {
    function HeaderSideComponent(themeService, layout, translate, renderer) {
        this.themeService = themeService;
        this.layout = layout;
        this.translate = translate;
        this.renderer = renderer;
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
    }
    HeaderSideComponent.prototype.ngOnInit = function () {
        this.egretThemes = this.themeService.egretThemes;
        this.layoutConf = this.layout.layoutConf;
    };
    HeaderSideComponent.prototype.setLang = function () {
        this.translate.use(this.currentLang);
    };
    HeaderSideComponent.prototype.changeTheme = function (theme) {
        this.themeService.changeTheme(this.renderer, theme);
    };
    HeaderSideComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderSideComponent.prototype.toggleSidenav = function () {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderSideComponent.prototype.toggleCollapse = function () {
        // compact --> full
        if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            }, { transitionClass: true });
        }
        // * --> compact
        this.layout.publishLayoutChange({
            sidebarStyle: 'compact'
        }, { transitionClass: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderSideComponent.prototype, "notificPanel", void 0);
    HeaderSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-side',
            template: __webpack_require__("../../../../../src/app/shared/components/header-side/header-side.template.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], HeaderSideComponent);
    return HeaderSideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/header-side/header-side.template.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"topbar\">\r\n  <!-- Sidenav toggle button -->\r\n  <button \r\n  *ngIf=\"layoutConf.sidebarStyle !== 'compact'\"\r\n  mat-icon-button\r\n  id=\"sidenavToggle\" \r\n  (click)=\"toggleSidenav()\"\r\n  matTooltip=\"Toggle Hide/Open\">\r\n  <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <!-- Sidenav toggle collapse -->\r\n  <button \r\n  *ngIf=\"layoutConf.sidebarStyle !== 'closed'\"\r\n  mat-icon-button\r\n  id=\"collapseToggle\"\r\n  fxHide.lt-md=\"true\" \r\n  (click)=\"toggleCollapse()\"\r\n  matTooltip=\"Toggle Collapse\"\r\n  class=\"toggle-collapsed\">\r\n  <mat-icon>chevron_left</mat-icon>\r\n  </button>\r\n  <!-- Search form -->\r\n  <div \r\n  fxFlex\r\n  fxHide.lt-sm=\"true\" \r\n  class=\"search-bar\">\r\n    <form class=\"top-search-form\">\r\n      <mat-icon role=\"img\">search</mat-icon>\r\n      <input autofocus=\"true\" placeholder=\"Search\" type=\"text\">\r\n    </form>\r\n  </div>\r\n  <span fxFlex></span>\r\n  <!-- Language Switcher -->\r\n  <mat-select \r\n  placeholder=\"\"\r\n  id=\"langToggle\"\r\n  [style.width]=\"'auto'\"\r\n  name=\"currentLang\"\r\n  [(ngModel)]=\"currentLang\" \r\n  (change)=\"setLang()\">\r\n    <mat-option \r\n    *ngFor=\"let lang of availableLangs\" \r\n    [value]=\"lang.code\" ngDefaultControl>{{ lang.name }}</mat-option>\r\n  </mat-select>\r\n  <!-- Theme Switcher -->\r\n  <button \r\n  mat-icon-button\r\n  id=\"schemeToggle\" \r\n  [style.overflow]=\"'visible'\"\r\n  matTooltip=\"Color Schemes\"\r\n  [matMenuTriggerFor]=\"themeMenu\"\r\n  class=\"topbar-button-right\">\r\n    <mat-icon>format_color_fill</mat-icon>\r\n  </button>\r\n  <mat-menu #themeMenu=\"matMenu\">\r\n    <mat-grid-list\r\n    class=\"theme-list\" \r\n    cols=\"2\" \r\n    rowHeight=\"48px\">\r\n      <mat-grid-tile \r\n      *ngFor=\"let theme of egretThemes\"\r\n      (click)=\"changeTheme(theme)\">\r\n        <div mat-menu-item [title]=\"theme.name\">\r\n          <div [style.background]=\"theme.baseColor\" class=\"egret-swatch\"></div>\r\n          <mat-icon class=\"active-icon\" *ngIf=\"theme.isActive\">check</mat-icon>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </mat-menu>\r\n  <!-- Notification toggle button -->\r\n  <button \r\n  mat-icon-button\r\n  matTooltip=\"Notifications\" \r\n  (click)=\"toggleNotific()\"\r\n  [style.overflow]=\"'visible'\" \r\n  class=\"topbar-button-right\">\r\n    <mat-icon>notifications</mat-icon>\r\n    <span class=\"notification-number mat-bg-warn\">3</span>\r\n  </button>\r\n  <!-- Top left user menu -->\r\n  <button mat-icon-button [matMenuTriggerFor]=\"accountMenu\" class=\"topbar-button-right img-button\">\r\n    <img src=\"assets/images/face-7.jpg\" alt=\"\">\r\n  </button>\r\n  <mat-menu #accountMenu=\"matMenu\">\r\n    <button mat-menu-item [routerLink]=\"['/profile/overview']\">\r\n      <mat-icon>account_box</mat-icon>\r\n      <span>Profile</span>\r\n    </button>\r\n    <button mat-menu-item [routerLink]=\"['/profile/settings']\">\r\n      <mat-icon>settings</mat-icon>\r\n      <span>Account Settings</span>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>notifications_off</mat-icon>\r\n      <span>Disable alerts</span>\r\n    </button>\r\n    <button mat-menu-item [routerLink]=\"['/sessions/signin']\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span>Sign out</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/shared/components/header-top/header-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-topnav mat-elevation-z2\">\r\n  <div class=\"container\">\r\n    <div class=\"topnav\">\r\n      <!-- App Logo -->\r\n      <div class=\"topbar-branding\">\r\n        <img src=\"assets/images/header-logo.png\" alt=\"\" class=\"app-logo\" (click)=\"gotoHome()\" style=\"cursor: pointer;\">\r\n      </div>\r\n\r\n      <ul class=\"menu\" *ngIf=\"!layoutConf.isMobile\">\r\n        <li *ngFor=\"let item of menuItems; let i = index;\">\r\n          <div *ngIf=\"item.type !== 'separator'\" routerLinkActive=\"open\">\r\n            <a matRipple routerLink=\"/{{item.state}}\" *ngIf=\"item.type === 'link'\">\r\n              <mat-icon *ngIf=\"item.icon\">{{item.icon}}</mat-icon> \r\n              {{item.name | translate}}\r\n            </a>\r\n            <div *ngIf=\"item.type === 'dropDown'\">\r\n              <label matRipple for=\"drop-{{i}}\" class=\"toggle\"><mat-icon>{{item.icon}}</mat-icon> {{item.name | translate}}</label>\r\n              <a matRipple><mat-icon>{{item.icon}}</mat-icon> {{item.name | translate}}</a>\r\n              <input type=\"checkbox\" id=\"drop-{{i}}\" />\r\n              <ul>\r\n                <li *ngFor=\"let itemLvL2 of item.sub; let j = index;\" routerLinkActive=\"open\">\r\n                  <a matRipple routerLink=\"{{item.state ? '/'+item.state : ''}}/{{itemLvL2.state}}\" \r\n                  *ngIf=\"itemLvL2.type !== 'dropDown'\">\r\n                    <mat-icon *ngIf=\"itemLvL2.icon\">{{itemLvL2.icon}}</mat-icon>  \r\n                    {{itemLvL2.name | translate}}\r\n                  </a>\r\n                  \r\n                  <div *ngIf=\"itemLvL2.type === 'dropDown'\">\r\n                    <label matRipple for=\"drop-{{i}}{{j}}\" class=\"toggle\">{{itemLvL2.name | translate}}</label>\r\n                    <a matRipple><mat-icon *ngIf=\"itemLvL2.icon\">{{itemLvL2.icon}}</mat-icon>  {{itemLvL2.name | translate}}</a>\r\n                    <input type=\"checkbox\" id=\"drop-{{i}}{{j}}\" />\r\n                    <!-- Level 3 -->\r\n                    <ul>\r\n                      <li *ngFor=\"let itemLvL3 of itemLvL2.sub\" routerLinkActive=\"open\">\r\n                        <a matRipple routerLink=\"{{item.state ? '/'+item.state : ''}}{{itemLvL2.state ? '/'+itemLvL2.state : ''}}/{{itemLvL3.state}}\">\r\n                          <mat-icon *ngIf=\"itemLvL3.icon\">{{itemLvL3.icon}}</mat-icon>\r\n                          {{itemLvL3.name | translate}}\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <span fxFlex></span>\r\n      <!-- End Navigation -->\r\n      \r\n   \r\n      <div *ngIf=\"!currentUser\" style=\"display: flex;\">\r\n        <a [routerLink]=\"'/sessions/signin'\" class=\"mat-primary text-center\">Log In</a>\r\n        <a [routerLink]=\"'/sessions/signup'\" class=\"mat-primary text-center\">Sign Up</a>\r\n      </div>\r\n      <!-- Top left user menu -->\r\n      <div *ngIf=\"currentUser\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"accountMenu\" class=\"topbar-button-right img-button\">\r\n          <img src=\"assets/images/header-logo.png\" alt=\"\">\r\n        </button>\r\n        <mat-menu #accountMenu=\"matMenu\">\r\n          \r\n          <button mat-menu-item [routerLink]=\"['/admin/dashboard']\" *ngIf=\"currentUser.user_role == '0'\">\r\n            <mat-icon>settings</mat-icon>\r\n            <span>Go To Dashboard</span>\r\n          </button>\r\n          \r\n          <button mat-menu-item (click)=\"logout()\">\r\n            <mat-icon>exit_to_app</mat-icon>\r\n            <span>Sign out</span>\r\n          </button>\r\n        </mat-menu>\r\n      </div>\r\n      <!-- Mobile screen menu toggle -->\r\n      <button \r\n      mat-icon-button \r\n      class=\"topbar-button-right\" \r\n      (click)=\"toggleSidenav()\" \r\n      *ngIf=\"layoutConf.isMobile\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/header-top/header-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_theme_service__ = __webpack_require__("../../../../../src/app/shared/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_layout_service__ = __webpack_require__("../../../../../src/app/shared/services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderTopComponent = (function () {
    function HeaderTopComponent(layout, navService, themeService, translate, renderer, router, authenticationService) {
        var _this = this;
        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.router = router;
        this.authenticationService = authenticationService;
        this.egretThemes = [];
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
        this.authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            // console.log(this.currentUser);
        });
    }
    HeaderTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConf = this.layout.layoutConf;
        this.egretThemes = this.themeService.egretThemes;
        if (this.router.url.includes('admin')) {
            this.loadAdminMenu();
        }
        else {
            this.loadGeneralMenu();
        }
        this.router.events.subscribe(function (val) {
            // see also 
            if (val instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* NavigationEnd */]) {
                // Hide loading indicator
                if (val.url.includes('admin')) {
                    _this.loadAdminMenu();
                }
                else {
                    _this.loadGeneralMenu();
                }
            }
        });
    };
    HeaderTopComponent.prototype.loadAdminMenu = function () {
        var _this = this;
        this.menuItemSub = this.navService.adminMenuItems$
            .subscribe(function (res) {
            res = res.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
            var limit = 8;
            var mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return _this.menuItems = mainItems;
            }
            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            _this.menuItems = mainItems;
        });
    };
    HeaderTopComponent.prototype.loadGeneralMenu = function () {
        var _this = this;
        this.menuItemSub = this.navService.menuItems$
            .subscribe(function (res) {
            res = res.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
            var limit = 8;
            var mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return _this.menuItems = mainItems;
            }
            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            _this.menuItems = mainItems;
        });
    };
    HeaderTopComponent.prototype.ngOnDestroy = function () {
        this.menuItemSub.unsubscribe();
    };
    HeaderTopComponent.prototype.setLang = function () {
        this.translate.use(this.currentLang);
    };
    HeaderTopComponent.prototype.changeTheme = function (theme) {
        this.themeService.changeTheme(this.renderer, theme);
    };
    HeaderTopComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderTopComponent.prototype.toggleSidenav = function () {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderTopComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/sessions/signin']);
    };
    HeaderTopComponent.prototype.gotoHome = function () {
        this.router.navigate(['/page/home']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderTopComponent.prototype, "notificPanel", void 0);
    HeaderTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-top',
            template: __webpack_require__("../../../../../src/app/shared/components/header-top/header-top.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]])
    ], HeaderTopComponent);
    return HeaderTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_theme_service__ = __webpack_require__("../../../../../src/app/shared/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_layout_service__ = __webpack_require__("../../../../../src/app/shared/services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, translate, themeService, layout, media, dashboardService) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.themeService = themeService;
        this.layout = layout;
        this.media = media;
        this.dashboardService = dashboardService;
        this.isModuleLoading = false;
        this.layoutConf = {};
        this.isHome = false;
        // Close sidenav after route change in mobile
        this.routerEventSub = router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (routeChange) {
            if (_this.isSm()) {
                _this.closeSidebar();
            }
        });
        // Translator init
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConf = this.layout.layoutConf;
        this.isMobile = this.isSm();
        this.layout.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle: this.isMobile ? 'closed' : 'full'
        });
        // FOR MODULE LOADER FLAG
        this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouteConfigLoadStart */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ResolveStart */]) {
                _this.isModuleLoading = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouteConfigLoadEnd */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ResolveEnd */]) {
                _this.isModuleLoading = false;
            }
        });
        if (this.router.url.includes('home')) {
            this.isHome = true;
        }
        else {
            this.isHome = false;
        }
        this.router.events.subscribe(function (val) {
            // see also 
            // var elmnt = document.getElementById("goto-line");
            // elmnt.scrollIntoView(); // Top
            var container = document.querySelector('.main-content-wrap');
            if (container) {
                container.scrollTop = 0;
            }
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // Hide loading indicator
                if (val.url.includes('home')) {
                    _this.isHome = true;
                }
                else {
                    _this.isHome = false;
                }
            }
        });
        this.loadSliders();
    };
    AdminLayoutComponent.prototype.loadSliders = function () {
        var _this = this;
        this.dashboardService.getSlidersHome().subscribe(function (data) {
            _this.sliders = data;
        });
    };
    AdminLayoutComponent.prototype.onResize = function (event) {
        this.isMobile = this.isSm();
        this.layout.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle: this.isMobile ? 'closed' : 'full'
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutConfSub = this.layout.layoutConf$.subscribe(function (change) {
            _this.initBodyPS(change);
        });
    };
    AdminLayoutComponent.prototype.initBodyPS = function (layoutConf) {
        if (layoutConf === void 0) { layoutConf = {}; }
        if (layoutConf.navigationPos === 'side' && layoutConf.topbarFixed) {
            if (this.bodyPS)
                this.bodyPS.destroy();
            if (this.headerFixedBodyPS)
                this.headerFixedBodyPS.destroy();
            this.headerFixedBodyPS = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */]('.rightside-content-hold', {
                suppressScrollX: true
            });
        }
        else {
            if (this.bodyPS)
                this.bodyPS.destroy();
            if (this.headerFixedBodyPS)
                this.headerFixedBodyPS.destroy();
            this.bodyPS = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */]('.main-content-wrap', {
                suppressScrollX: true
            });
            // this.bodyPS.
        }
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
        }
        if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
        }
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    AdminLayoutComponent.prototype.closeSidebar = function () {
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    AdminLayoutComponent.prototype.isSm = function () {
        return window.matchMedia("(max-width: 959px)").matches;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "onResize", null);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__("../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.template.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.template.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_translate_ng2_translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_6__services_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_7__services_admin_dashboard_service__["a" /* DashboardService */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-admin-wrap\" [dir]='layoutConf.dir'>\r\n  <!-- Header for top navigation layout -->\r\n  <!-- ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT -->\r\n  <app-header-top \r\n    *ngIf=\"layoutConf.navigationPos === 'top'\" \r\n    [notificPanel]=\"notificationPanel\">\r\n  </app-header-top>\r\n  <!-- Main Container -->\r\n  <mat-sidenav-container \r\n  [dir]='layoutConf.dir'\r\n  class=\"app-admin-container app-side-nav-container mat-drawer-transition\"\r\n  [ngClass]=\"{\r\n    'navigation-top': layoutConf.navigationPos === 'top',\r\n    'sidebar-full': layoutConf.sidebarStyle === 'full',\r\n    'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',\r\n    'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',\r\n    'layout-intransition': layoutConf.layoutInTransition,\r\n    'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',\r\n    'sidebar-closed': layoutConf.sidebarStyle === 'closed',\r\n    'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'\r\n  }\">\r\n  <!-- SIDEBAR -->\r\n  <!-- ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT -->\r\n  <app-sidebar-side *ngIf=\"layoutConf.navigationPos === 'side'\"></app-sidebar-side>\r\n  \r\n  <!-- Top navigation layout (navigation for mobile screen) -->\r\n  <!-- ONLY REQUIRED FOR **TOP** NAVIGATION MOBILE LAYOUT -->\r\n  <app-sidebar-top *ngIf=\"layoutConf.navigationPos === 'top' && layoutConf.isMobile\"></app-sidebar-top>\r\n\r\n    <!-- App content -->\r\n    <div class=\"main-content-wrap\">\r\n      <div id=\"goto-line\"></div>\r\n      <!-- Header for side navigation layout -->\r\n      <!-- ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT -->\r\n      <app-header-side \r\n        *ngIf=\"layoutConf.navigationPos === 'side'\"\r\n        [notificPanel]=\"notificationPanel\">\r\n      </app-header-side>\r\n      <!-- Breadcrumb -->\r\n      <!-- <div *ngIf=\"!isHome\"> -->\r\n        <app-breadcrumb ></app-breadcrumb>\r\n      <!-- </div> -->\r\n      <div class=\"rightside-content-hold\">\r\n        <!-- View Loader -->\r\n        <div class=\"view-loader\" *ngIf=\"isModuleLoading\">\r\n          <div class=\"spinner\">\r\n            <div class=\"double-bounce1 mat-bg-accent\"></div>\r\n            <div class=\"double-bounce2 mat-bg-primary\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- Breadcrumb -->\r\n        <!-- <app-breadcrumb></app-breadcrumb> -->\r\n        <!-- View outlet -->\r\n        <router-outlet></router-outlet>\r\n        \r\n      </div>\r\n      <app-footer></app-footer>\r\n    </div>\r\n    <!-- View overlay for mobile navigation -->\r\n    <div class=\"sidebar-backdrop\"\r\n    [ngClass]=\"{'visible': layoutConf.sidebarStyle !== 'closed' && layoutConf.isMobile}\"\r\n    (click)=\"closeSidebar()\"></div>\r\n    \r\n    <!-- Notificaation bar -->\r\n    <mat-sidenav #notificationPanel mode=\"over\" class=\"\" align=\"end\">\r\n      <div class=\"navigation-hold\" fxLayout=\"column\">\r\n        <app-notifications [notificPanel]=\"notificationPanel\"></app-notifications>\r\n      </div>\r\n    </mat-sidenav>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.template.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slideshow-container a {\n  background-size: contain !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/layouts/auth-layout/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/shared/components/layouts/auth-layout/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__("../../../../../src/app/shared/components/layouts/auth-layout/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/musciplayer/musicplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"music-player\">\r\n  <button mat-mini-fab color=\"default\" [disabled]=\"!isLoaded\" class=\"mr-1 play-button\" (click)=\"play()\" type=\"button\">\r\n    <mat-icon>{{isPlaying ? 'pause' : 'play_arrow'}}</mat-icon>\r\n  </button>\r\n\r\n  <div class=\"player\" [attr.id]=\"id\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/musciplayer/musicplayer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".music-player {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px; }\n  .music-player .player {\n    width: 80%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/musciplayer/musicplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__ = __webpack_require__("../../../../wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_string__ = __webpack_require__("../../../../random-string/lib/random-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random_string__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicPlayer = (function () {
    function MusicPlayer() {
        this.id = 'musicplayer-';
        this.isLoaded = false;
        this.isPlaying = false;
        this.duration = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MusicPlayer.prototype.ngOnInit = function () {
        this.id += __WEBPACK_IMPORTED_MODULE_2_random_string__();
        var me = this;
        setTimeout(function () {
            me.initPlayer();
        }, 100);
    };
    MusicPlayer.prototype.initPlayer = function () {
        var me = this;
        this.wavesurfer = __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__["create"]({
            container: '#' + this.id,
            waveColor: '#428bca',
            progressColor: '#31708f',
            height: 50,
            barWidth: 2
        });
        this.wavesurfer.load(this.src);
        this.wavesurfer.on('ready', function () {
            me.isLoaded = true;
            me.duration.emit(me.wavesurfer.getDuration());
        });
        this.wavesurfer.on('finish', function () {
            me.isPlaying = false;
        });
    };
    MusicPlayer.prototype.play = function () {
        if (this.isLoaded) {
            if (this.isPlaying) {
                this.wavesurfer.pause();
                this.isPlaying = false;
            }
            else {
                this.wavesurfer.play();
                this.isPlaying = true;
            }
        }
    };
    MusicPlayer.prototype.ngOnDestroy = function () {
        this.wavesurfer.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MusicPlayer.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MusicPlayer.prototype, "duration", void 0);
    MusicPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-musicplayer',
            template: __webpack_require__("../../../../../src/app/shared/components/musciplayer/musicplayer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/musciplayer/musicplayer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicPlayer);
    return MusicPlayer;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/newsitem/newsitem.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0 news-item\" (click)=\"gotonewsdetail(newsItem.news_id)\">\r\n  <div [ngStyle]=\"{background: 'url(' + (newsItem?.news_thumb || '/assets/images/avatar.png')+ ')'}\" class=\"news-item-thumb\"></div>\r\n  \r\n  <mat-card-content>\r\n    <h4 class=\"text-center news-title\">{{newsItem.news_title}}</h4>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/shared/components/newsitem/newsitem.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news-item {\n  cursor: pointer; }\n  .news-item .news-item-thumb {\n    height: 200px;\n    width: 100%;\n    background-size: cover !important;\n    background-repeat: no-repeat !important; }\n  .news-title {\n  font-size: 17px;\n  margin-top: 20px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/newsitem/newsitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsItemComponent = (function () {
    function NewsItemComponent(router) {
        this.router = router;
    }
    NewsItemComponent.prototype.ngOnInit = function () {
    };
    NewsItemComponent.prototype.gotonewsdetail = function (news_id) {
        this.router.navigate(['/page/newsdetail/' + news_id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsItemComponent.prototype, "newsItem", void 0);
    NewsItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newsitem',
            template: __webpack_require__("../../../../../src/app/shared/components/newsitem/newsitem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/newsitem/newsitem.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], NewsItemComponent);
    return NewsItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mat-bg-primary pt-1 pb-1\">\r\n  <h6 class=\"m-0\">Notifications</h6>\r\n</div>\r\n<mat-nav-list class=\"notification-list\" role=\"list\">\r\n  <!-- Notification item -->\r\n  <mat-list-item *ngFor=\"let n of notifications\" class=\"notific-item\" role=\"listitem\" routerLinkActive=\"open\">\r\n    <mat-icon [color]=\"n.color\" class=\"notific-icon\">{{n.icon}}</mat-icon>\r\n    <a [routerLink]=\"[n.route || '/dashboard']\">\r\n      <div class=\"mat-list-text\">\r\n        <h4 class=\"message\">{{n.message}}</h4>\r\n        <small class=\"time text-muted\">{{n.time}}</small>\r\n      </div>\r\n    </a>\r\n  </mat-list-item>\r\n</mat-nav-list>\r\n<div class=\"text-center mt-1\" *ngIf=\"notifications.length\">\r\n  <small><a href=\"#\" (click)=\"clearAll($event)\">Clear all notifications</a></small>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(router) {
        this.router = router;
        // Dummy notifications
        this.notifications = [{
                message: 'New contact added',
                icon: 'assignment_ind',
                time: '1 min ago',
                route: '/inbox',
                color: 'primary'
            }, {
                message: 'New message',
                icon: 'chat',
                time: '4 min ago',
                route: '/chat',
                color: 'accent'
            }, {
                message: 'Server rebooted',
                icon: 'settings_backup_restore',
                time: '12 min ago',
                route: '/charts',
                color: 'warn'
            }];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (routeChange) {
            if (routeChange instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.notificPanel.close();
            }
        });
    };
    NotificationsComponent.prototype.clearAll = function (e) {
        e.preventDefault();
        this.notifications = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NotificationsComponent.prototype, "notificPanel", void 0);
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/shared/components/notifications/notifications.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar-side/sidebar-side.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\r\n  <div id=\"scroll-area\" class=\"navigation-hold\" fxLayout=\"column\">\r\n    <!-- App Logo -->\r\n    <div class=\"branding default-bg\">\r\n      <img src=\"assets/images/logo.png\" alt=\"\" class=\"app-logo\">\r\n      <!-- Two different logos for dark and light themes -->\r\n      <img \r\n      src=\"assets/images/logo-text-white.png\" \r\n      alt=\"\" \r\n      class=\"app-logo-text\"\r\n      *ngIf=\"themeService.activatedTheme?.name?.indexOf('dark') !== -1\">\r\n      <img \r\n      src=\"assets/images/logo-text.png\" \r\n      alt=\"\" \r\n      class=\"app-logo-text\"\r\n      *ngIf=\"themeService.activatedTheme?.name?.indexOf('dark') === -1\">\r\n    </div>\r\n\r\n    <!-- Sidebar user -->\r\n    <div class=\"app-user\">\r\n      <div class=\"app-user-photo\">\r\n        <img src=\"assets/images/face-7.jpg\" alt=\"\">\r\n      </div>\r\n      <span class=\"app-user-name mb-05\">\r\n        <mat-icon class=\"icon-xs text-muted\">lock</mat-icon> \r\n        Watson Joyce\r\n      </span>\r\n      <!-- Small buttons -->\r\n      <div class=\"app-user-controls\">\r\n        <button \r\n        class=\"text-muted\"\r\n        mat-icon-button \r\n        mat-xs-button\r\n        [matMenuTriggerFor]=\"appUserMenu\">\r\n          <mat-icon>settings</mat-icon>\r\n        </button>\r\n        <button \r\n        class=\"text-muted\"\r\n        mat-icon-button \r\n        mat-xs-button\r\n        matTooltip=\"Inbox\"\r\n        routerLink=\"/inbox\">\r\n          <mat-icon>email</mat-icon>\r\n        </button>\r\n        <button \r\n        class=\"text-muted\"\r\n        mat-icon-button \r\n        mat-xs-button\r\n        matTooltip=\"Sign Out\"\r\n        routerLink=\"/sessions/signin\">\r\n          <mat-icon>exit_to_app</mat-icon>\r\n        </button>\r\n        <mat-menu #appUserMenu=\"matMenu\">\r\n            <button mat-menu-item routerLink=\"/profile/overview\">\r\n              <mat-icon>account_box</mat-icon>\r\n              <span>Profile</span>\r\n            </button>\r\n            <button mat-menu-item routerLink=\"/profile/settings\">\r\n              <mat-icon>settings</mat-icon>\r\n              <span>Account Settings</span>\r\n            </button>\r\n            <button mat-menu-item routerLink=\"/calendar\">\r\n              <mat-icon>date_range</mat-icon>\r\n              <span>Calendar</span>\r\n            </button>\r\n            <button mat-menu-item routerLink=\"/sessions/signin\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              <span>Sign out</span>\r\n            </button>\r\n          </mat-menu>\r\n      </div>\r\n    </div>\r\n    <!-- Navigation -->\r\n    <app-sidenav [items]=\"menuItems\" [hasIconMenu]=\"hasIconTypeMenuItem\" [iconMenuTitle]=\"iconTypeMenuTitle\"></app-sidenav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar-side/sidebar-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theme_service__ = __webpack_require__("../../../../../src/app/shared/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarSideComponent = (function () {
    function SidebarSideComponent(navService, themeService) {
        this.navService = navService;
        this.themeService = themeService;
    }
    SidebarSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem;
            //Checks item list has any icon type.
            _this.hasIconTypeMenuItem = !!_this.menuItems.filter(function (item) { return item.type === 'icon'; }).length;
        });
    };
    SidebarSideComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.sidebarPS = new __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__["a" /* default */]('#scroll-area', {
                suppressScrollX: true
            });
        });
    };
    SidebarSideComponent.prototype.ngOnDestroy = function () {
        if (this.sidebarPS) {
            this.sidebarPS.destroy();
        }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-side',
            template: __webpack_require__("../../../../../src/app/shared/components/sidebar-side/sidebar-side.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_theme_service__["a" /* ThemeService */]])
    ], SidebarSideComponent);
    return SidebarSideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar-top/sidebar-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\r\n  <div id=\"sidebar-top-scroll-area\" class=\"navigation-hold\" fxLayout=\"column\">\r\n    <app-sidenav [items]=\"menuItems\"></app-sidenav>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/sidebar-top/sidebar-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarTopComponent = (function () {
    function SidebarTopComponent(navService) {
        this.navService = navService;
    }
    SidebarTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
        });
    };
    SidebarTopComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.sidebarPS = new __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__["a" /* default */]('#sidebar-top-scroll-area', {
                suppressScrollX: true
            });
        });
    };
    SidebarTopComponent.prototype.ngOnDestroy = function () {
        if (this.sidebarPS) {
            this.sidebarPS.destroy();
        }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-top',
            template: __webpack_require__("../../../../../src/app/shared/components/sidebar-top/sidebar-top.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_service__["a" /* NavigationService */]])
    ], SidebarTopComponent);
    return SidebarTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
        this.menuItems = [];
    }
    SidenavComponent.prototype.ngOnInit = function () { };
    // Only for demo purpose
    SidenavComponent.prototype.addMenuItem = function () {
        this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [
                { name: 'SUBITEM', state: 'cards' },
                { name: 'SUBITEM', state: 'buttons' }
            ]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('items'),
        __metadata("design:type", Array)
    ], SidenavComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('hasIconMenu'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "hasIconTypeMenuItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('iconMenuTitle'),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "iconTypeMenuTitle", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/shared/components/sidenav/sidenav.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/sidenav/sidenav.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-hold\">\r\n  <div class=\"icon-menu\" *ngIf=\"hasIconTypeMenuItem\">\r\n    <!-- Icon menu separator -->\r\n    <div class=\"mt-1 mb-1 nav-item-sep\">\r\n      <mat-divider [ngStyle]=\"{margin: '0 -24px'}\"></mat-divider>\r\n      <span class=\"text-muted icon-menu-title\">{{iconTypeMenuTitle}}</span>\r\n    </div>\r\n    <!-- Icon menu items -->\r\n    <div class=\"icon-menu-item\" *ngFor=\"let item of menuItems\">\r\n      <button *ngIf=\"!item.disabled && item.type === 'icon'\" mat-raised-button [matTooltip]=\"item.tooltip\" routerLink=\"/{{item.state}}\"\r\n        routerLinkActive=\"mat-bg-primary\">\r\n        <mat-icon>{{item.icon}}</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ul appDropdown class=\"sidenav\">\r\n    <li *ngFor=\"let item of menuItems\" appDropdownLink routerLinkActive=\"open\">\r\n      <div class=\"nav-item-sep\" *ngIf=\"item.type === 'separator'\">\r\n        <mat-divider></mat-divider>\r\n        <span class=\"text-muted\">{{item.name | translate}}</span>\r\n      </div>\r\n      <div *ngIf=\"!item.disabled && item.type !== 'separator' && item.type !== 'icon'\" class=\"lvl1\">\r\n        <a routerLink=\"/{{item.state}}\" appDropdownToggle matRipple *ngIf=\"item.type === 'link'\">\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span class=\"item-name lvl1\">{{item.name | translate}}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\r\n        </a>\r\n        <a [href]=\"item.state\" appDropdownToggle matRipple *ngIf=\"item.type === 'extLink'\" target=\"_blank\">\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span class=\"item-name lvl1\">{{item.name | translate}}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\r\n        </a>\r\n\r\n        <!-- DropDown -->\r\n        <a *ngIf=\"item.type === 'dropDown'\" appDropdownToggle matRipple>\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span class=\"item-name lvl1\">{{item.name | translate}}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\r\n          <mat-icon class=\"menu-caret\">keyboard_arrow_right</mat-icon>\r\n        </a>\r\n        <!-- LEVEL 2 -->\r\n        <ul class=\"submenu lvl2\" appDropdown *ngIf=\"item.type === 'dropDown'\">\r\n          <li *ngFor=\"let itemLvL2 of item.sub\" appDropdownLink routerLinkActive=\"open\">\r\n\r\n            <a routerLink=\"{{item.state ? '/'+item.state : ''}}/{{itemLvL2.state}}\" appDropdownToggle *ngIf=\"itemLvL2.type !== 'dropDown'\"\r\n              matRipple>\r\n              <span class=\"item-name lvl2\">{{itemLvL2.name | translate}}</span>\r\n              <span fxFlex></span>\r\n            </a>\r\n\r\n            <a *ngIf=\"itemLvL2.type === 'dropDown'\" appDropdownToggle matRipple>\r\n              <span class=\"item-name lvl2\">{{itemLvL2.name | translate}}</span>\r\n              <span fxFlex></span>\r\n              <mat-icon class=\"menu-caret\">keyboard_arrow_right</mat-icon>\r\n            </a>\r\n\r\n            <!-- LEVEL 3 -->\r\n            <ul class=\"submenu lvl3\" appDropdown *ngIf=\"itemLvL2.type === 'dropDown'\">\r\n              <li *ngFor=\"let itemLvL3 of itemLvL2.sub\" appDropdownLink routerLinkActive=\"open\">\r\n                <a routerLink=\"{{item.state ? '/'+item.state : ''}}{{itemLvL2.state ? '/'+itemLvL2.state : ''}}/{{itemLvL3.state}}\" appDropdownToggle\r\n                  matRipple>\r\n                  <span class=\"item-name lvl3\">{{itemLvL3.name | translate}}</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3 matDialogTitle>{{songData.song_title}}</h3>\r\n\r\n<h6 *ngIf=\"songData.song_performedby\">Performed By</h6>\r\n<p>{{songData.song_performedby}}</p>\r\n\r\n<h6 *ngIf=\"songData.song_key_writers\">Writers</h6>\r\n<div *ngIf=\"songData.song_key_writers\">\r\n  <p *ngFor=\"let writer of songData.song_key_writers\" >{{writer.name}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongCreditPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SongCreditPopupComponent = (function () {
    function SongCreditPopupComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.songData = data.payload;
    }
    SongCreditPopupComponent.prototype.ngOnInit = function () {
    };
    SongCreditPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'songcreditpopup',
            template: __webpack_require__("../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */]])
    ], SongCreditPopupComponent);
    return SongCreditPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"songitem\">\r\n   \r\n    <div class=\"play-and-title\">\r\n        <img [src]=\"songItem.song_thumb || 'assets/images/music_icon.png'\" class=\"music-icon\">\r\n        <button mat-mini-fab color=\"default\" class=\"mr-1\" (click)=\"play()\">\r\n            <mat-icon>{{isPlaying ? 'pause' : 'play_arrow'}}</mat-icon>\r\n        </button>\r\n\r\n        <div (click)=\"gotoartist()\">\r\n            <p class=\"song-title\">{{songItem.song_artist.artist_name}}</p>\r\n            <!-- <p class=\"song-artist\">{{artistItem.artist_name}}</p> -->\r\n        </div>\r\n\r\n        <div (click)=\"gotoartist()\">\r\n            <span class=\"artist-name\">{{songItem.song_title}}</span>\r\n            <span class=\"artist-name\" *ngIf=\"songItem.song_album_name\">{{songItem.song_album_name}}</span>\r\n        </div>\r\n    </div>\r\n    \r\n\r\n    <div class=\"marquee\" *ngIf=\"playerService.currentSong && songItem.song_id == playerService.currentSong.song_id && playerService.isPlaying\">\r\n        <div>\r\n            <span>Now Playing</span>\r\n            <span>Now Playing</span>\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"music-player\">\r\n        <div [attr.id]=\"id\"></div>\r\n    </div> -->\r\n\r\n    <div class=\"actions\">\r\n        <div>\r\n            <button mat-mini-fab color=\"default\" class=\"mr-1\" [matMenuTriggerFor]=\"menu\"><mat-icon>more_horiz</mat-icon></button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"addToPlaylist()\">\r\n                    <span>Add To Playlist</span>\r\n                </button>\r\n                <button mat-menu-item [matMenuTriggerFor]=\"download\">\r\n                   Download\r\n                </button>\r\n                <button mat-menu-item (click)=\"songCredit()\">\r\n                    <span>Song Credits</span>\r\n                </button>\r\n                \r\n                <button mat-menu-item (click)=\"downloadLyrics()\">\r\n                    <span>Lyrics</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"gotoLicenseRequest()\">\r\n                    <span>LICENSE</span>\r\n                </button>\r\n            </mat-menu>\r\n\r\n            <mat-menu #download=\"matMenu\">\r\n                <button mat-menu-item (click)=\"downloadMP3()\">MP3</button>\r\n                <button mat-menu-item (click)=\"downloadWAV()\">WAV</button>\r\n                <button mat-menu-item (click)=\"downloadInst()\">Instrumental</button>\r\n            </mat-menu>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songitem.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".songitem {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 7px 20px 7px 30px;\n  border-radius: 35px;\n  border-bottom: none;\n  background: rgba(216, 211, 211, 0.4);\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n  .songitem:hover {\n    -webkit-box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n            box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n    background: white; }\n  .songitem .music-player {\n    width: 40%; }\n  .songitem .song-title {\n    margin: 0;\n    font-weight: bold;\n    cursor: pointer; }\n  .songitem .song-artist {\n    margin: 0;\n    font-size: 12px; }\n  .songitem .play-and-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .songitem .actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    justify-items: center; }\n  .songitem .music-icon {\n    width: 50px;\n    height: 50px;\n    border-radius: 9px;\n    -webkit-box-shadow: 2px 2px 9px -3px black;\n            box-shadow: 2px 2px 9px -3px black;\n    margin-right: 10px; }\n  .songitem .artist-name-title {\n    font-weight: bold;\n    margin-left: 10px;\n    cursor: pointer; }\n  .songitem .artist-name {\n    cursor: pointer;\n    margin-left: 10px; }\n  .marquee {\n  height: 25px;\n  width: 30%;\n  overflow: hidden;\n  position: relative; }\n  .marquee div {\n  display: block;\n  width: 200%;\n  height: 30px;\n  position: absolute;\n  overflow: hidden;\n  -webkit-animation: marquee 5s linear infinite;\n          animation: marquee 5s linear infinite; }\n  .marquee span {\n  float: left;\n  width: 50%; }\n  @-webkit-keyframes marquee {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n  @keyframes marquee {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__ = __webpack_require__("../../../../wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_songs_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__songitempopup_songitempopup_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__songcreditpopup_songcreditpopup_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SongItemComponent = (function () {
    // @Input() artistItem: any;
    function SongItemComponent(authService, dialog, ngZone, router, playerService, songService) {
        this.authService = authService;
        this.dialog = dialog;
        this.ngZone = ngZone;
        this.router = router;
        this.playerService = playerService;
        this.songService = songService;
        this.id = 'songitem-';
        this.isLoaded = false;
        this.isPlaying = false;
    }
    SongItemComponent.prototype.ngOnInit = function () {
    };
    SongItemComponent.prototype.initPlayer = function () {
        var me = this;
        this.wavesurfer = __WEBPACK_IMPORTED_MODULE_1_wavesurfer_js__["create"]({
            container: '#' + this.id,
            waveColor: '#428bca',
            progressColor: '#31708f',
            height: 50,
            barWidth: 2
        });
        this.wavesurfer.load(this.songItem.song_music);
        this.wavesurfer.on('ready', function () {
            me.isLoaded = true;
        });
        this.wavesurfer.on('finish', function () {
            me.isPlaying = false;
        });
        this.wavesurfer.on('audioprocess', function (data) {
            if (!me.authService.currentUserValue) {
                if (me.wavesurfer.getCurrentTime() >= 30) {
                    me.wavesurfer.pause();
                    me.isPlaying = false;
                    me.ngZone.run(function () {
                        me.openPopUp();
                    });
                }
            }
        });
    };
    SongItemComponent.prototype.play = function () {
        var me = this;
        this.playerService.currentSong = null;
        setTimeout(function () {
            me.playerService.currentSong = me.songItem;
        }, 10);
        // console.log(this.playerService.currentSong)
    };
    SongItemComponent.prototype.openPopUp = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__songitempopup_songitempopup_component__["a" /* SongItemPopupComponent */], {
            disableClose: false
        });
    };
    SongItemComponent.prototype.gotoLicenseRequest = function () {
        this.router.navigate(['/page/licenserequest/' + this.songItem.song_id]);
    };
    SongItemComponent.prototype.gotoartist = function () {
        this.router.navigate(['/page/artist/' + this.songItem.song_artist.artist_id]);
    };
    SongItemComponent.prototype.ngOnDestroy = function () {
    };
    SongItemComponent.prototype.downloadLyrics = function () {
        if (this.songItem.song_music_lyrics) {
            window.open(this.songItem.song_music_lyrics);
        }
    };
    SongItemComponent.prototype.downloadMP3 = function () {
        if (this.songItem.song_music) {
            // window.open(this.songItem.song_music)
            var key = this.songItem.song_music.replace("https://music-sync.s3.us-east-2.amazonaws.com/", "");
            window.open(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiURL + 'admin/song/download/' + key);
        }
    };
    SongItemComponent.prototype.downloadWAV = function () {
        if (this.songItem.song_music_wav) {
            // window.open(this.songItem.song_music_wav)
            var key = this.songItem.song_music_wav.replace("https://music-sync.s3.us-east-2.amazonaws.com/", "");
            window.open(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiURL + 'admin/song/download/' + key);
        }
    };
    SongItemComponent.prototype.downloadInst = function () {
        if (this.songItem.song_music_inst) {
            // window.open(this.songItem.song_music_inst)
            var key = this.songItem.song_music_inst.replace("https://music-sync.s3.us-east-2.amazonaws.com/", "");
            window.open(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiURL + 'admin/song/download/' + key);
        }
    };
    SongItemComponent.prototype.songCredit = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__songcreditpopup_songcreditpopup_component__["a" /* SongCreditPopupComponent */], {
            disableClose: false,
            width: '300px',
            data: { payload: this.songItem }
        });
    };
    SongItemComponent.prototype.addToPlaylist = function () {
        this.playerService.addPlaylist(this.songItem);
        var me = this;
        if (!this.playerService.currentSong) {
            setTimeout(function () {
                me.playerService.currentSong = me.songItem;
            }, 10);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SongItemComponent.prototype, "songItem", void 0);
    SongItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songitem',
            template: __webpack_require__("../../../../../src/app/shared/components/songitem/songitem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/songitem/songitem.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_songs_service__["a" /* SongsService */]])
    ], SongItemComponent);
    return SongItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h3 matDialogTitle>You have to login to listen full music</h3>\r\n<form (ngSubmit)=\"submit()\">\r\n  <button mat-raised-button color=\"primary\" (click)=\"gotologin()\" type=\"button\">Go To Login</button>\r\n  <button mat-raised-button color=\"accent\" (click)=\"gotoregister()\" type=\"button\">Go To Register</button>\r\n  <button mat-raised-button color=\"warn\" (click)=\"close()\" type=\"button\">Close</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongItemPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SongItemPopupComponent = (function () {
    function SongItemPopupComponent(data, dialogRef, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.router = router;
    }
    SongItemPopupComponent.prototype.ngOnInit = function () {
    };
    SongItemPopupComponent.prototype.close = function () {
        this.dialogRef.close(true);
    };
    SongItemPopupComponent.prototype.gotologin = function () {
        this.router.navigate(['/sessions/signin']);
    };
    SongItemPopupComponent.prototype.gotoregister = function () {
        this.router.navigate(['/sessions/signup']);
    };
    SongItemPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'songitem-popup',
            template: __webpack_require__("../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */]])
    ], SongItemPopupComponent);
    return SongItemPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/dropdown-anchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_link_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dropdown-link.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownAnchorDirective = (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownAnchorDirective.prototype, "onClick", null);
    DropdownAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdownToggle]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__dropdown_link_directive__["a" /* DropdownLinkDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_link_directive__["a" /* DropdownLinkDirective */]])
    ], DropdownAnchorDirective);
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/dropdown-link.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownLinkDirective = (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DropdownLinkDirective.prototype, "open", null);
    DropdownLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdownLink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* AppDropdownDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* AppDropdownDirective */]])
    ], DropdownLinkDirective);
    return DropdownLinkDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDropdownDirective = (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], AppDropdownDirective);
    return AppDropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/font-size.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontSizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FontSizeDirective = (function () {
    function FontSizeDirective(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    FontSizeDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.fontSize = this.fontSize;
    };
    FontSizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[fontSize]' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('fontSize')),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FontSizeDirective);
    return FontSizeDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/scroll-to.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ScrollToDirective = (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    ;
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ;
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToDirective.prototype, "smoothScroll", null);
    ScrollToDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[scrollTo]' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('scrollTo')),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ScrollToDirective);
    return ScrollToDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterService = (function () {
    function FilterService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.langs = [
            { "name": "English", "nativeName": "English" },
            { "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語" },
            { "name": "French", "nativeName": "français, langue française" },
            { "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)" },
            { "name": "Dutch", "nativeName": "Nederlands, Vlaams" }
        ];
        this.isoLangs = {
            "ab": {
                "name": "Abkhaz",
                "nativeName": "аҧсуа"
            },
            "aa": {
                "name": "Afar",
                "nativeName": "Afaraf"
            },
            "af": {
                "name": "Afrikaans",
                "nativeName": "Afrikaans"
            },
            "ak": {
                "name": "Akan",
                "nativeName": "Akan"
            },
            "sq": {
                "name": "Albanian",
                "nativeName": "Shqip"
            },
            "am": {
                "name": "Amharic",
                "nativeName": "አማርኛ"
            },
            "ar": {
                "name": "Arabic",
                "nativeName": "العربية"
            },
            "an": {
                "name": "Aragonese",
                "nativeName": "Aragonés"
            },
            "hy": {
                "name": "Armenian",
                "nativeName": "Հայերեն"
            },
            "as": {
                "name": "Assamese",
                "nativeName": "অসমীয়া"
            },
            "av": {
                "name": "Avaric",
                "nativeName": "авар мацӀ, магӀарул мацӀ"
            },
            "ae": {
                "name": "Avestan",
                "nativeName": "avesta"
            },
            "ay": {
                "name": "Aymara",
                "nativeName": "aymar aru"
            },
            "az": {
                "name": "Azerbaijani",
                "nativeName": "azərbaycan dili"
            },
            "bm": {
                "name": "Bambara",
                "nativeName": "bamanankan"
            },
            "ba": {
                "name": "Bashkir",
                "nativeName": "башҡорт теле"
            },
            "eu": {
                "name": "Basque",
                "nativeName": "euskara, euskera"
            },
            "be": {
                "name": "Belarusian",
                "nativeName": "Беларуская"
            },
            "bn": {
                "name": "Bengali",
                "nativeName": "বাংলা"
            },
            "bh": {
                "name": "Bihari",
                "nativeName": "भोजपुरी"
            },
            "bi": {
                "name": "Bislama",
                "nativeName": "Bislama"
            },
            "bs": {
                "name": "Bosnian",
                "nativeName": "bosanski jezik"
            },
            "br": {
                "name": "Breton",
                "nativeName": "brezhoneg"
            },
            "bg": {
                "name": "Bulgarian",
                "nativeName": "български език"
            },
            "my": {
                "name": "Burmese",
                "nativeName": "ဗမာစာ"
            },
            "ca": {
                "name": "Catalan; Valencian",
                "nativeName": "Català"
            },
            "ch": {
                "name": "Chamorro",
                "nativeName": "Chamoru"
            },
            "ce": {
                "name": "Chechen",
                "nativeName": "нохчийн мотт"
            },
            "ny": {
                "name": "Chichewa; Chewa; Nyanja",
                "nativeName": "chiCheŵa, chinyanja"
            },
            "zh": {
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
            },
            "cv": {
                "name": "Chuvash",
                "nativeName": "чӑваш чӗлхи"
            },
            "kw": {
                "name": "Cornish",
                "nativeName": "Kernewek"
            },
            "co": {
                "name": "Corsican",
                "nativeName": "corsu, lingua corsa"
            },
            "cr": {
                "name": "Cree",
                "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
            },
            "hr": {
                "name": "Croatian",
                "nativeName": "hrvatski"
            },
            "cs": {
                "name": "Czech",
                "nativeName": "česky, čeština"
            },
            "da": {
                "name": "Danish",
                "nativeName": "dansk"
            },
            "dv": {
                "name": "Divehi; Dhivehi; Maldivian;",
                "nativeName": "ދިވެހި"
            },
            "nl": {
                "name": "Dutch",
                "nativeName": "Nederlands, Vlaams"
            },
            "en": {
                "name": "English",
                "nativeName": "English"
            },
            "eo": {
                "name": "Esperanto",
                "nativeName": "Esperanto"
            },
            "et": {
                "name": "Estonian",
                "nativeName": "eesti, eesti keel"
            },
            "ee": {
                "name": "Ewe",
                "nativeName": "Eʋegbe"
            },
            "fo": {
                "name": "Faroese",
                "nativeName": "føroyskt"
            },
            "fj": {
                "name": "Fijian",
                "nativeName": "vosa Vakaviti"
            },
            "fi": {
                "name": "Finnish",
                "nativeName": "suomi, suomen kieli"
            },
            "fr": {
                "name": "French",
                "nativeName": "français, langue française"
            },
            "ff": {
                "name": "Fula; Fulah; Pulaar; Pular",
                "nativeName": "Fulfulde, Pulaar, Pular"
            },
            "gl": {
                "name": "Galician",
                "nativeName": "Galego"
            },
            "ka": {
                "name": "Georgian",
                "nativeName": "ქართული"
            },
            "de": {
                "name": "German",
                "nativeName": "Deutsch"
            },
            "el": {
                "name": "Greek, Modern",
                "nativeName": "Ελληνικά"
            },
            "gn": {
                "name": "Guaraní",
                "nativeName": "Avañeẽ"
            },
            "gu": {
                "name": "Gujarati",
                "nativeName": "ગુજરાતી"
            },
            "ht": {
                "name": "Haitian; Haitian Creole",
                "nativeName": "Kreyòl ayisyen"
            },
            "ha": {
                "name": "Hausa",
                "nativeName": "Hausa, هَوُسَ"
            },
            "he": {
                "name": "Hebrew (modern)",
                "nativeName": "עברית"
            },
            "hz": {
                "name": "Herero",
                "nativeName": "Otjiherero"
            },
            "hi": {
                "name": "Hindi",
                "nativeName": "हिन्दी, हिंदी"
            },
            "ho": {
                "name": "Hiri Motu",
                "nativeName": "Hiri Motu"
            },
            "hu": {
                "name": "Hungarian",
                "nativeName": "Magyar"
            },
            "ia": {
                "name": "Interlingua",
                "nativeName": "Interlingua"
            },
            "id": {
                "name": "Indonesian",
                "nativeName": "Bahasa Indonesia"
            },
            "ie": {
                "name": "Interlingue",
                "nativeName": "Originally called Occidental; then Interlingue after WWII"
            },
            "ga": {
                "name": "Irish",
                "nativeName": "Gaeilge"
            },
            "ig": {
                "name": "Igbo",
                "nativeName": "Asụsụ Igbo"
            },
            "ik": {
                "name": "Inupiaq",
                "nativeName": "Iñupiaq, Iñupiatun"
            },
            "io": {
                "name": "Ido",
                "nativeName": "Ido"
            },
            "is": {
                "name": "Icelandic",
                "nativeName": "Íslenska"
            },
            "it": {
                "name": "Italian",
                "nativeName": "Italiano"
            },
            "iu": {
                "name": "Inuktitut",
                "nativeName": "ᐃᓄᒃᑎᑐᑦ"
            },
            "ja": {
                "name": "Japanese",
                "nativeName": "日本語 (にほんご／にっぽんご)"
            },
            "jv": {
                "name": "Javanese",
                "nativeName": "basa Jawa"
            },
            "kl": {
                "name": "Kalaallisut, Greenlandic",
                "nativeName": "kalaallisut, kalaallit oqaasii"
            },
            "kn": {
                "name": "Kannada",
                "nativeName": "ಕನ್ನಡ"
            },
            "kr": {
                "name": "Kanuri",
                "nativeName": "Kanuri"
            },
            "ks": {
                "name": "Kashmiri",
                "nativeName": "कश्मीरी, كشميري‎"
            },
            "kk": {
                "name": "Kazakh",
                "nativeName": "Қазақ тілі"
            },
            "km": {
                "name": "Khmer",
                "nativeName": "ភាសាខ្មែរ"
            },
            "ki": {
                "name": "Kikuyu, Gikuyu",
                "nativeName": "Gĩkũyũ"
            },
            "rw": {
                "name": "Kinyarwanda",
                "nativeName": "Ikinyarwanda"
            },
            "ky": {
                "name": "Kirghiz, Kyrgyz",
                "nativeName": "кыргыз тили"
            },
            "kv": {
                "name": "Komi",
                "nativeName": "коми кыв"
            },
            "kg": {
                "name": "Kongo",
                "nativeName": "KiKongo"
            },
            "ko": {
                "name": "Korean",
                "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
            },
            "ku": {
                "name": "Kurdish",
                "nativeName": "Kurdî, كوردی‎"
            },
            "kj": {
                "name": "Kwanyama, Kuanyama",
                "nativeName": "Kuanyama"
            },
            "la": {
                "name": "Latin",
                "nativeName": "latine, lingua latina"
            },
            "lb": {
                "name": "Luxembourgish, Letzeburgesch",
                "nativeName": "Lëtzebuergesch"
            },
            "lg": {
                "name": "Luganda",
                "nativeName": "Luganda"
            },
            "li": {
                "name": "Limburgish, Limburgan, Limburger",
                "nativeName": "Limburgs"
            },
            "ln": {
                "name": "Lingala",
                "nativeName": "Lingála"
            },
            "lo": {
                "name": "Lao",
                "nativeName": "ພາສາລາວ"
            },
            "lt": {
                "name": "Lithuanian",
                "nativeName": "lietuvių kalba"
            },
            "lu": {
                "name": "Luba-Katanga",
                "nativeName": ""
            },
            "lv": {
                "name": "Latvian",
                "nativeName": "latviešu valoda"
            },
            "gv": {
                "name": "Manx",
                "nativeName": "Gaelg, Gailck"
            },
            "mk": {
                "name": "Macedonian",
                "nativeName": "македонски јазик"
            },
            "mg": {
                "name": "Malagasy",
                "nativeName": "Malagasy fiteny"
            },
            "ms": {
                "name": "Malay",
                "nativeName": "bahasa Melayu, بهاس ملايو‎"
            },
            "ml": {
                "name": "Malayalam",
                "nativeName": "മലയാളം"
            },
            "mt": {
                "name": "Maltese",
                "nativeName": "Malti"
            },
            "mi": {
                "name": "Māori",
                "nativeName": "te reo Māori"
            },
            "mr": {
                "name": "Marathi (Marāṭhī)",
                "nativeName": "मराठी"
            },
            "mh": {
                "name": "Marshallese",
                "nativeName": "Kajin M̧ajeļ"
            },
            "mn": {
                "name": "Mongolian",
                "nativeName": "монгол"
            },
            "na": {
                "name": "Nauru",
                "nativeName": "Ekakairũ Naoero"
            },
            "nv": {
                "name": "Navajo, Navaho",
                "nativeName": "Diné bizaad, Dinékʼehǰí"
            },
            "nb": {
                "name": "Norwegian Bokmål",
                "nativeName": "Norsk bokmål"
            },
            "nd": {
                "name": "North Ndebele",
                "nativeName": "isiNdebele"
            },
            "ne": {
                "name": "Nepali",
                "nativeName": "नेपाली"
            },
            "ng": {
                "name": "Ndonga",
                "nativeName": "Owambo"
            },
            "nn": {
                "name": "Norwegian Nynorsk",
                "nativeName": "Norsk nynorsk"
            },
            "no": {
                "name": "Norwegian",
                "nativeName": "Norsk"
            },
            "ii": {
                "name": "Nuosu",
                "nativeName": "ꆈꌠ꒿ Nuosuhxop"
            },
            "nr": {
                "name": "South Ndebele",
                "nativeName": "isiNdebele"
            },
            "oc": {
                "name": "Occitan",
                "nativeName": "Occitan"
            },
            "oj": {
                "name": "Ojibwe, Ojibwa",
                "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
            },
            "cu": {
                "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
                "nativeName": "ѩзыкъ словѣньскъ"
            },
            "om": {
                "name": "Oromo",
                "nativeName": "Afaan Oromoo"
            },
            "or": {
                "name": "Oriya",
                "nativeName": "ଓଡ଼ିଆ"
            },
            "os": {
                "name": "Ossetian, Ossetic",
                "nativeName": "ирон æвзаг"
            },
            "pa": {
                "name": "Panjabi, Punjabi",
                "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
            },
            "pi": {
                "name": "Pāli",
                "nativeName": "पाऴि"
            },
            "fa": {
                "name": "Persian",
                "nativeName": "فارسی"
            },
            "pl": {
                "name": "Polish",
                "nativeName": "polski"
            },
            "ps": {
                "name": "Pashto, Pushto",
                "nativeName": "پښتو"
            },
            "pt": {
                "name": "Portuguese",
                "nativeName": "Português"
            },
            "qu": {
                "name": "Quechua",
                "nativeName": "Runa Simi, Kichwa"
            },
            "rm": {
                "name": "Romansh",
                "nativeName": "rumantsch grischun"
            },
            "rn": {
                "name": "Kirundi",
                "nativeName": "kiRundi"
            },
            "ro": {
                "name": "Romanian, Moldavian, Moldovan",
                "nativeName": "română"
            },
            "ru": {
                "name": "Russian",
                "nativeName": "русский язык"
            },
            "sa": {
                "name": "Sanskrit (Saṁskṛta)",
                "nativeName": "संस्कृतम्"
            },
            "sc": {
                "name": "Sardinian",
                "nativeName": "sardu"
            },
            "sd": {
                "name": "Sindhi",
                "nativeName": "सिन्धी, سنڌي، سندھی‎"
            },
            "se": {
                "name": "Northern Sami",
                "nativeName": "Davvisámegiella"
            },
            "sm": {
                "name": "Samoan",
                "nativeName": "gagana faa Samoa"
            },
            "sg": {
                "name": "Sango",
                "nativeName": "yângâ tî sängö"
            },
            "sr": {
                "name": "Serbian",
                "nativeName": "српски језик"
            },
            "gd": {
                "name": "Scottish Gaelic; Gaelic",
                "nativeName": "Gàidhlig"
            },
            "sn": {
                "name": "Shona",
                "nativeName": "chiShona"
            },
            "si": {
                "name": "Sinhala, Sinhalese",
                "nativeName": "සිංහල"
            },
            "sk": {
                "name": "Slovak",
                "nativeName": "slovenčina"
            },
            "sl": {
                "name": "Slovene",
                "nativeName": "slovenščina"
            },
            "so": {
                "name": "Somali",
                "nativeName": "Soomaaliga, af Soomaali"
            },
            "st": {
                "name": "Southern Sotho",
                "nativeName": "Sesotho"
            },
            "es": {
                "name": "Spanish; Castilian",
                "nativeName": "español, castellano"
            },
            "su": {
                "name": "Sundanese",
                "nativeName": "Basa Sunda"
            },
            "sw": {
                "name": "Swahili",
                "nativeName": "Kiswahili"
            },
            "ss": {
                "name": "Swati",
                "nativeName": "SiSwati"
            },
            "sv": {
                "name": "Swedish",
                "nativeName": "svenska"
            },
            "ta": {
                "name": "Tamil",
                "nativeName": "தமிழ்"
            },
            "te": {
                "name": "Telugu",
                "nativeName": "తెలుగు"
            },
            "tg": {
                "name": "Tajik",
                "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"
            },
            "th": {
                "name": "Thai",
                "nativeName": "ไทย"
            },
            "ti": {
                "name": "Tigrinya",
                "nativeName": "ትግርኛ"
            },
            "bo": {
                "name": "Tibetan Standard, Tibetan, Central",
                "nativeName": "བོད་ཡིག"
            },
            "tk": {
                "name": "Turkmen",
                "nativeName": "Türkmen, Түркмен"
            },
            "tl": {
                "name": "Tagalog",
                "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
            },
            "tn": {
                "name": "Tswana",
                "nativeName": "Setswana"
            },
            "to": {
                "name": "Tonga (Tonga Islands)",
                "nativeName": "faka Tonga"
            },
            "tr": {
                "name": "Turkish",
                "nativeName": "Türkçe"
            },
            "ts": {
                "name": "Tsonga",
                "nativeName": "Xitsonga"
            },
            "tt": {
                "name": "Tatar",
                "nativeName": "татарча, tatarça, تاتارچا‎"
            },
            "tw": {
                "name": "Twi",
                "nativeName": "Twi"
            },
            "ty": {
                "name": "Tahitian",
                "nativeName": "Reo Tahiti"
            },
            "ug": {
                "name": "Uighur, Uyghur",
                "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
            },
            "uk": {
                "name": "Ukrainian",
                "nativeName": "українська"
            },
            "ur": {
                "name": "Urdu",
                "nativeName": "اردو"
            },
            "uz": {
                "name": "Uzbek",
                "nativeName": "zbek, Ўзбек, أۇزبېك‎"
            },
            "ve": {
                "name": "Venda",
                "nativeName": "Tshivenḓa"
            },
            "vi": {
                "name": "Vietnamese",
                "nativeName": "Tiếng Việt"
            },
            "vo": {
                "name": "Volapük",
                "nativeName": "Volapük"
            },
            "wa": {
                "name": "Walloon",
                "nativeName": "Walon"
            },
            "cy": {
                "name": "Welsh",
                "nativeName": "Cymraeg"
            },
            "wo": {
                "name": "Wolof",
                "nativeName": "Wollof"
            },
            "fy": {
                "name": "Western Frisian",
                "nativeName": "Frysk"
            },
            "xh": {
                "name": "Xhosa",
                "nativeName": "isiXhosa"
            },
            "yi": {
                "name": "Yiddish",
                "nativeName": "ייִדיש"
            },
            "yo": {
                "name": "Yoruba",
                "nativeName": "Yorùbá"
            },
            "za": {
                "name": "Zhuang, Chuang",
                "nativeName": "Saɯ cueŋƅ, Saw cuengh"
            }
        };
        this.setHeader();
    }
    FilterService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    FilterService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'filteroption/getallfilteroptions');
    };
    FilterService.prototype.delete = function (id, type) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'filteroption/filteroption/' + type + '/' + id, { headers: this.header });
    };
    FilterService.prototype.add = function (type, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'filteroption/filteroption/' + type, data, { headers: this.header });
    };
    FilterService.prototype.edit = function (id, data, type) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'filteroption/filteroption/' + type + '/' + id, data, { headers: this.header });
    };
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/excerpt.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcerptPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit)
            return text;
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'excerpt' })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/relative-time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RelativeTimePipe = (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date))
            value = new Date(value);
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };
    RelativeTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'relativeTime' })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/about.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutService = (function () {
    function AboutService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    AboutService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    AboutService.prototype.get = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/about/index');
    };
    AboutService.prototype.save = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/about/index', data, { headers: this.header });
    };
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/artists.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistService = (function () {
    function ArtistService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    ArtistService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    ArtistService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/artists');
    };
    ArtistService.prototype.getArtist = function (artist_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/artist/' + artist_id);
    };
    ArtistService.prototype.addItem = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/artist', data, { headers: this.header });
    };
    ArtistService.prototype.updateItem = function (artist_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/artist/' + artist_id, data, { headers: this.header });
    };
    ArtistService.prototype.removeItem = function (artist_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/artist/' + artist_id, { headers: this.header });
    };
    ArtistService.prototype.uploadAvatar = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/artistavatar', data, { headers: this.header });
    };
    ArtistService.prototype.changeFeature = function (artist_id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/changefeatured/' + artist_id, { headers: this.header });
    };
    ArtistService.prototype.changeOrders = function (data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/artist/changeorder/', data, { headers: this.header });
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__ = __webpack_require__("../../../../aws-sdk/clients/s3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_random_string__ = __webpack_require__("../../../../random-string/lib/random-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_random_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_random_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardService = (function () {
    function DashboardService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    DashboardService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    DashboardService.prototype.getSlidersHome = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/homesliders');
    };
    DashboardService.prototype.getAllSliders = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_homesliders', { headers: this.header });
    };
    DashboardService.prototype.addNewHomeSlider = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_homeslider', data, { headers: this.header });
    };
    DashboardService.prototype.removeSlider = function (slider_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_homeslider/' + slider_id, { headers: this.header });
    };
    DashboardService.prototype.toggleShowSlider = function (slider_id) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_homeslider_toggle/' + slider_id, { headers: this.header });
    };
    DashboardService.prototype.changeOrdersSlider = function (data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_homeslider_order/', data, { headers: this.header });
    };
    DashboardService.prototype.uploadMusicToS3 = function (file) {
        var contentType = file.type;
        var bucket = new __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__({
            accessKeyId: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].accessKeyId,
            secretAccessKey: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].secretAccessKey,
            region: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].region
        });
        var params = {
            Bucket: 'music-sync',
            Key: __WEBPACK_IMPORTED_MODULE_3_random_string__() + '-' + file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        return bucket.upload(params);
    };
    DashboardService.prototype.addVideo = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_video', data, { headers: this.header });
    };
    DashboardService.prototype.getAllVideos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_videos', { headers: this.header });
    };
    DashboardService.prototype.updateVideo = function (video_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_video/' + video_id, data, { headers: this.header });
    };
    DashboardService.prototype.changeVideoFeature = function (video_id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/changevideofeatured/' + video_id, { headers: this.header });
    };
    DashboardService.prototype.deleteVideo = function (video_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/admin_video/' + video_id, { headers: this.header });
    };
    DashboardService.prototype.getMusicReview = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/musicreview');
    };
    DashboardService.prototype.saveMusicReview = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/musicreview', data, { headers: this.header });
    };
    DashboardService.prototype.getSocial = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/sociallinks');
    };
    DashboardService.prototype.saveSocial = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + 'admin/dashboard/sociallinks', data, { headers: this.header });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__authentication_service__["a" /* AuthenticationService */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsService = (function () {
    function NewsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    NewsService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    NewsService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/news');
    };
    NewsService.prototype.getPublished = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/newspublished');
    };
    NewsService.prototype.getItem = function (news_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/newsitem/' + news_id);
    };
    NewsService.prototype.addItem = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/news', data, { headers: this.header });
    };
    NewsService.prototype.updateItem = function (news_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/news/' + news_id, data, { headers: this.header });
    };
    NewsService.prototype.removeItem = function (news_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/news/' + news_id, { headers: this.header });
    };
    NewsService.prototype.uploadNewsThumb = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/newsthumb', data, { headers: this.header });
    };
    NewsService.prototype.changeFeature = function (news_id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/news/changefeatured/' + news_id, { headers: this.header });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/placement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__ = __webpack_require__("../../../../aws-sdk/clients/s3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_random_string__ = __webpack_require__("../../../../random-string/lib/random-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_random_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_random_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlacementService = (function () {
    function PlacementService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    PlacementService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    PlacementService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/placement/placements');
    };
    PlacementService.prototype.addItem = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/placement/placement', data, { headers: this.header });
    };
    PlacementService.prototype.updateItem = function (placement_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/placement/placement/' + placement_id, data, { headers: this.header });
    };
    PlacementService.prototype.removeItem = function (placement_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/placement/placement/' + placement_id, { headers: this.header });
    };
    PlacementService.prototype.uploadMusicToS3 = function (file) {
        var contentType = file.type;
        var bucket = new __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__({
            accessKeyId: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].accessKeyId,
            secretAccessKey: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].secretAccessKey,
            region: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].region
        });
        var params = {
            Bucket: 'music-sync',
            Key: __WEBPACK_IMPORTED_MODULE_3_random_string__() + '-' + file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        return bucket.upload(params);
    };
    PlacementService.prototype.changeFeature = function (placement_id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/placement/changefeatured/' + placement_id, { headers: this.header });
    };
    PlacementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]])
    ], PlacementService);
    return PlacementService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/playlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaylistService = (function () {
    function PlaylistService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    PlaylistService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    PlaylistService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlist');
    };
    PlaylistService.prototype.getItem = function (playlist_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlistitem/' + playlist_id);
    };
    PlaylistService.prototype.addItem = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlist', data, { headers: this.header });
    };
    PlaylistService.prototype.addItemWithSongs = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlistwithitem', data, { headers: this.header });
    };
    PlaylistService.prototype.updateItem = function (playlist_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlist/' + playlist_id, data, { headers: this.header });
    };
    PlaylistService.prototype.removeItem = function (playlist_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlist/' + playlist_id, { headers: this.header });
    };
    PlaylistService.prototype.uploadPlaylistThumb = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/playlistthumb', data, { headers: this.header });
    };
    PlaylistService.prototype.changeFeature = function (playlist_id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/playlist/changefeatured/' + playlist_id, { headers: this.header });
    };
    PlaylistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], PlaylistService);
    return PlaylistService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/songs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__ = __webpack_require__("../../../../aws-sdk/clients/s3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_string__ = __webpack_require__("../../../../random-string/lib/random-string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SongsService = (function () {
    function SongsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setHeader();
    }
    SongsService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    SongsService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/getallsongs');
    };
    SongsService.prototype.getItem = function (song_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/song/' + song_id);
    };
    SongsService.prototype.add = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/song/', data, { headers: this.header });
    };
    SongsService.prototype.update = function (song_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/song/' + song_id, data, { headers: this.header });
    };
    SongsService.prototype.uploadThumb = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/songthumb', data, { headers: this.header });
    };
    SongsService.prototype.uploadMusic = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/songmusic', data, { headers: this.header });
    };
    SongsService.prototype.uploadMusicToS3 = function (file) {
        var contentType = file.type;
        var bucket = new __WEBPACK_IMPORTED_MODULE_1_aws_sdk_clients_s3__({
            accessKeyId: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].accessKeyId,
            secretAccessKey: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].secretAccessKey,
            region: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].region
        });
        var ext = '.' + file.name.split('.').pop();
        var params = {
            Bucket: 'music-sync',
            Key: __WEBPACK_IMPORTED_MODULE_2_random_string__() + ext,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        // bucket.upload(params, function (err, data) {
        //     if (err) {
        //         console.log('There was an error uploading your file: ', err);
        //         return false;
        //     }
        //     console.log('Successfully uploaded file.', data);
        //     return true;
        // });
        //for upload progress   
        /*return bucket.upload(params).on('httpUploadProgress', function (evt) {
            console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
        }).send(function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });*/
        return bucket.upload(params);
    };
    SongsService.prototype.download = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/download/0Mrk5utC-good-trouble-picture.jpg');
    };
    SongsService.prototype.remove = function (song_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/song/' + song_id, { headers: this.header });
    };
    SongsService.prototype.changeFeature = function (song_id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/changefeatured/' + song_id, { headers: this.header });
    };
    SongsService.prototype.licenseRequest = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiURL + 'admin/song/license/', data);
    };
    SongsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]])
    ], SongsService);
    return SongsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.userTypes = [
            {
                'value': '0',
                'type': 'admin'
            }, {
                'value': '1',
                'type': 'general'
            }
        ];
        this.setHeader();
    }
    UserService.prototype.setHeader = function () {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_token) {
            this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', currentUser.user_token);
        }
    };
    UserService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/user/getallusers', { headers: this.header });
    };
    UserService.prototype.update = function (user_id, data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/user/user/' + user_id, data, { headers: this.header });
    };
    UserService.prototype.add = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/user/user/', data, { headers: this.header });
    };
    UserService.prototype.remove = function (user_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/user/user/' + user_id, { headers: this.header });
    };
    UserService.prototype.uploadAvatar = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/user/useravatar', data, { headers: this.header });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/app-loader/app-loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\r\n  min-height: 122px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/services/app-loader/app-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <h6 class=\"m-0 pb-1\">{{ title }}</h6>\r\n    <div mat-dialog-content>\r\n        <mat-spinner [style.margin]=\"'auto'\"></mat-spinner>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/services/app-loader/app-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppLoaderComponent = (function () {
    function AppLoaderComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AppLoaderComponent.prototype.ngOnInit = function () {
    };
    AppLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-loader',
            template: __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */]])
    ], AppLoaderComponent);
    return AppLoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/app-loader/app-loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_loader_component__ = __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppLoaderModule = (function () {
    function AppLoaderModule() {
    }
    AppLoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_loader_service__["a" /* AppLoaderService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_loader_component__["a" /* AppLoaderComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_loader_component__["a" /* AppLoaderComponent */]]
        })
    ], AppLoaderModule);
    return AppLoaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/app-loader/app-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loader_component__ = __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppLoaderService = (function () {
    function AppLoaderService(dialog) {
        this.dialog = dialog;
    }
    AppLoaderService.prototype.open = function (title) {
        if (title === void 0) { title = 'Please wait'; }
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__app_loader_component__["a" /* AppLoaderComponent */], { disableClose: true });
        this.dialogRef.updateSize('200px');
        this.dialogRef.componentInstance.title = title;
        return this.dialogRef.afterClosed();
    };
    AppLoaderService.prototype.close = function () {
        if (this.dialogRef)
            this.dialogRef.close();
    };
    AppLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialog */]])
    ], AppLoaderService);
    return AppLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth/admin-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.user_role == '0') {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/sessions/signin']);
        return false;
    };
    AdminAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.isAuthenticated = true; // Set this value dynamically
        this.isAdmin = true;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/sessions/signin']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (useremail, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + "auth/login", { "email": useremail, 'password': password })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (data) {
            // login successful if there's a jwt token in the response
            if (data.success) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                _this.currentUserSubject.next(data.user);
            }
            return data;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (error, caught) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(error.error);
        }));
    };
    AuthenticationService.prototype.signup = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiURL + "auth/signup", data)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (data) {
            // if(data.success) {
            //     localStorage.setItem('currentUser', JSON.stringify(data.user));
            //     this.currentUserSubject.next(data.user);
            // }
            return data;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (error, caught) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(error.error);
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/featured.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturedService = (function () {
    function FeaturedService(http) {
        this.http = http;
    }
    FeaturedService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'admin/featured/all');
    };
    FeaturedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FeaturedService);
    return FeaturedService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutService = (function () {
    function LayoutService(router) {
        this.router = router;
        this.layoutConfSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.setAppLayout();
    }
    LayoutService.prototype.setAppLayout = function () {
        //******** SET YOUR LAYOUT OPTIONS HERE *********
        this.layoutConf = {
            "navigationPos": "top",
            "sidebarStyle": "full",
            "dir": "ltr",
            "useBreadcrumb": true,
            "topbarFixed": false,
            "breadcrumb": "title"
        };
    };
    LayoutService.prototype.publishLayoutChange = function (lc, opt) {
        var _this = this;
        if (opt === void 0) { opt = {}; }
        var duration = opt.duration || 250;
        if (!opt.transitionClass) {
            this.layoutConf = Object.assign(this.layoutConf, lc);
            return this.layoutConfSubject.next(this.layoutConf);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc, { layoutInTransition: true });
        this.layoutConfSubject.next(this.layoutConf);
        setTimeout(function () {
            _this.layoutConf = Object.assign(_this.layoutConf, { layoutInTransition: false });
            _this.layoutConfSubject.next(_this.layoutConf);
        }, duration);
    };
    LayoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.getCountries = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'location/countries');
    };
    LocationService.prototype.getStates = function (country_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'location/states/' + country_id);
    };
    LocationService.prototype.getCities = function (state_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL + 'location/cities/' + state_id);
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = (function () {
    function NavigationService() {
        // CATALOG PLAYLISTS PLACEMENTS NEWS ABOUT MIXES
        this.defaultMenu = [
            {
                name: 'ARTISTS',
                type: 'link',
                tooltip: 'Catalog',
                // icon: 'dashboard',
                state: 'page/catalog'
            },
            // {
            //   name: 'SONGS',
            //   type: 'link',
            //   tooltip: 'Songs',
            //   // icon: 'dashboard',
            //   state: 'page/songs'
            // },
            {
                name: 'PLAYLISTS',
                type: 'link',
                tooltip: 'Dashboard',
                // icon: 'dashboard',
                state: 'page/playlists'
            },
            {
                name: 'PLACEMENTS',
                type: 'link',
                tooltip: 'PLACEMENTS',
                // icon: 'dashboard',
                state: 'page/placements'
            },
            {
                name: 'NEWS',
                type: 'link',
                tooltip: 'News',
                // icon: 'dashboard',
                state: 'page/news'
            },
            {
                name: 'ABOUT',
                type: 'link',
                tooltip: 'About',
                state: 'page/about'
            },
            {
                name: 'Contact',
                type: 'link',
                tooltip: 'About',
                state: 'page/contact'
            }
        ];
        this.adminMenu = [
            {
                name: 'DASHBOARD',
                type: 'link',
                tooltip: 'Dashboard',
                // icon: 'dashboard',
                state: 'admin/dashboard'
            },
            {
                name: 'Artists',
                type: 'link',
                tooltip: 'Artists',
                // icon: 'dashboard',
                state: 'admin/artists'
            },
            {
                name: 'Songs',
                type: 'link',
                tooltip: 'Songs',
                // icon: 'dashboard',
                state: 'admin/songs'
            },
            {
                name: 'Users',
                type: 'link',
                tooltip: 'Users',
                // icon: 'dashboard',
                state: 'admin/users'
            },
            {
                name: 'PlayLists',
                type: 'link',
                tooltip: 'Playlists',
                // icon: 'dashboard',
                state: 'admin/playlist'
            },
            {
                name: 'Placements',
                type: 'link',
                tooltip: 'Placements',
                // icon: 'dashboard',
                state: 'admin/placements'
            },
            {
                name: 'News',
                type: 'link',
                tooltip: 'News',
                // icon: 'dashboard',
                state: 'admin/news'
            },
            {
                name: 'About',
                type: 'link',
                tooltip: 'About',
                state: 'admin/about'
            },
        ];
        // Icon menu TITLE at the very top of navigation.
        // This title will appear if any icon type item is present in menu.
        this.iconTypeMenuTitle = 'Frequently Accessed';
        // sets iconMenu as default;
        this.menuItems = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.defaultMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
        this.adminMenuItems = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.adminMenu);
        this.adminMenuItems$ = this.adminMenuItems.asObservable();
    }
    // menuItems = new BehaviorSubject<IMenuItem[]>(this.adminMenu);
    // navigation component has subscribed to this Observable
    // menuItems$ = this.menuItems.asObservable();
    // Customizer component uses this method to change menu.
    // You can remove this method and customizer component.
    // Or you can customize this method to supply different menu for
    // different user type.
    NavigationService.prototype.publishNavigationChange = function (menuType) {
        this.menuItems.next(this.defaultMenu);
    };
    NavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerService = (function () {
    function PlayerService() {
        this.playlist = [];
    }
    PlayerService.prototype.addPlaylist = function (songItem) {
        if (this.playlist.filter(function (playlistItem) { return playlistItem.song_id == songItem.song_id; }).length == 0) {
            var seconds = Math.floor(songItem.song_duration);
            var mins = Math.floor(seconds / 60);
            seconds = seconds % 60;
            songItem['song_duration_text'] = (mins < 10 ? ('0' + mins) : mins) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
            this.playlist.push(songItem);
        }
    };
    PlayerService.prototype.clearPlaylist = function () {
        this.playlist = [];
    };
    PlayerService.prototype.deletePlayListItem = function (songItem) {
        this.playlist = this.playlist.filter(function (playListItem) { return playListItem.song_id != songItem.song_id; });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/route-parts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutePartsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutePartsService = (function () {
    function RoutePartsService(router) {
        this.router = router;
    }
    RoutePartsService.prototype.ngOnInit = function () {
    };
    RoutePartsService.prototype.generateRouteParts = function (snapshot) {
        var routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    };
    RoutePartsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], RoutePartsService);
    return RoutePartsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ThemeService = (function () {
    function ThemeService(document) {
        this.document = document;
        this.egretThemes = [{
                "name": "egret-dark-purple",
                "baseColor": "#9c27b0",
                "isActive": false
            }, {
                "name": "egret-dark-pink",
                "baseColor": "#e91e63",
                "isActive": false
            }, {
                "name": "egret-blue",
                "baseColor": "#247ba0",
                "isActive": false
            }, {
                "name": "egret-indigo",
                "baseColor": "#3f51b5",
                "isActive": true
            }];
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    ThemeService.prototype.applyMatTheme = function (r) {
        /*
        ****** (SET YOUR DEFAULT THEME HERE) *******
        * Assign new Theme to activatedTheme
        */
        // this.activatedTheme = this.egretThemes[0]; 
        // this.activatedTheme = this.egretThemes[1]; 
        // this.activatedTheme = this.egretThemes[2]; 
        this.activatedTheme = this.egretThemes[3];
        this.changeTheme(r, this.activatedTheme);
    };
    ThemeService.prototype.changeTheme = function (r, theme) {
        r.removeClass(this.document.body, this.activatedTheme.name);
        r.addClass(this.document.body, theme.name);
        this.flipActiveFlag(theme);
    };
    ThemeService.prototype.flipActiveFlag = function (theme) {
        var _this = this;
        this.egretThemes.forEach(function (t) {
            t.isActive = false;
            if (t.name === theme.name) {
                t.isActive = true;
                _this.activatedTheme = theme;
            }
        });
    };
    ThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_simple_slideshow__ = __webpack_require__("../../../../ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_loader_app_loader_module__ = __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_side_header_side_component__ = __webpack_require__("../../../../../src/app/shared/components/header-side/header-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidebar_side_sidebar_side_component__ = __webpack_require__("../../../../../src/app/shared/components/sidebar-side/sidebar-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_top_header_top_component__ = __webpack_require__("../../../../../src/app/shared/components/header-top/header-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidebar_top_sidebar_top_component__ = __webpack_require__("../../../../../src/app/shared/components/sidebar-top/sidebar-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_customizer_customizer_component__ = __webpack_require__("../../../../../src/app/shared/components/customizer/customizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_layouts_admin_layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_layouts_auth_layout_auth_layout_component__ = __webpack_require__("../../../../../src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_songitem_songitem_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_songitem_songcreditpopup_songcreditpopup_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songcreditpopup/songcreditpopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_songitem_songitempopup_songitempopup_component__ = __webpack_require__("../../../../../src/app/shared/components/songitem/songitempopup/songitempopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_newsitem_newsitem_component__ = __webpack_require__("../../../../../src/app/shared/components/newsitem/newsitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_musciplayer_musicplayer_component__ = __webpack_require__("../../../../../src/app/shared/components/musciplayer/musicplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_bottomplayer_bottomplayer_component__ = __webpack_require__("../../../../../src/app/shared/components/bottomplayer/bottomplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_admin_playlist_playlistpopup_playlist_table_popup_component__ = __webpack_require__("../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_font_size_directive__ = __webpack_require__("../../../../../src/app/shared/directives/font-size.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_scroll_to_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_dropdown_anchor_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__directives_dropdown_link_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_relative_time_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/relative-time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_excerpt_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/excerpt.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_theme_service__ = __webpack_require__("../../../../../src/app/shared/services/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_layout_service__ = __webpack_require__("../../../../../src/app/shared/services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_navigation_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_route_parts_service__ = __webpack_require__("../../../../../src/app/shared/services/route-parts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/services/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_auth_admin_auth_guard__ = __webpack_require__("../../../../../src/app/shared/services/auth/admin-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__filter_service__ = __webpack_require__("../../../../../src/app/shared/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_featured_service__ = __webpack_require__("../../../../../src/app/shared/services/featured.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_admin_artists_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/artists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_authentication_service__ = __webpack_require__("../../../../../src/app/shared/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_admin_users_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_admin_news_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_admin_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_admin_songs_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_admin_about_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_admin_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_admin_placement_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/placement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_location_service__ = __webpack_require__("../../../../../src/app/shared/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT


// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT


// ONLY FOR DEMO (Removable without changing any layout configuration)

// ALL TIME REQUIRED 













// DIRECTIVES





// PIPES


// SERVICES


















var classesToInclude = [
    __WEBPACK_IMPORTED_MODULE_11__components_header_top_header_top_component__["a" /* HeaderTopComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_sidebar_top_sidebar_top_component__["a" /* SidebarTopComponent */],
    __WEBPACK_IMPORTED_MODULE_17__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_notifications_notifications_component__["a" /* NotificationsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_sidebar_side_sidebar_side_component__["a" /* SidebarSideComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_header_side_header_side_component__["a" /* HeaderSideComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components_layouts_auth_layout_auth_layout_component__["a" /* AuthLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_18__components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_customizer_customizer_component__["a" /* CustomizerComponent */],
    __WEBPACK_IMPORTED_MODULE_27__directives_font_size_directive__["a" /* FontSizeDirective */],
    __WEBPACK_IMPORTED_MODULE_28__directives_scroll_to_directive__["a" /* ScrollToDirective */],
    __WEBPACK_IMPORTED_MODULE_29__directives_dropdown_directive__["a" /* AppDropdownDirective */],
    __WEBPACK_IMPORTED_MODULE_30__directives_dropdown_anchor_directive__["a" /* DropdownAnchorDirective */],
    __WEBPACK_IMPORTED_MODULE_31__directives_dropdown_link_directive__["a" /* DropdownLinkDirective */],
    __WEBPACK_IMPORTED_MODULE_32__pipes_relative_time_pipe__["a" /* RelativeTimePipe */],
    __WEBPACK_IMPORTED_MODULE_33__pipes_excerpt_pipe__["a" /* ExcerptPipe */],
    __WEBPACK_IMPORTED_MODULE_21__components_songitem_songitempopup_songitempopup_component__["a" /* SongItemPopupComponent */],
    __WEBPACK_IMPORTED_MODULE_20__components_songitem_songcreditpopup_songcreditpopup_component__["a" /* SongCreditPopupComponent */],
    __WEBPACK_IMPORTED_MODULE_19__components_songitem_songitem_component__["a" /* SongItemComponent */],
    __WEBPACK_IMPORTED_MODULE_22__components_newsitem_newsitem_component__["a" /* NewsItemComponent */],
    __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_24__components_musciplayer_musicplayer_component__["a" /* MusicPlayer */],
    __WEBPACK_IMPORTED_MODULE_25__components_bottomplayer_bottomplayer_component__["a" /* BottomPlayer */],
    __WEBPACK_IMPORTED_MODULE_26__views_admin_playlist_playlistpopup_playlist_table_popup_component__["a" /* PlaylistTablePopupComponent */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["G" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_8__services_app_loader_app_loader_module__["a" /* AppLoaderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatInputModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_34__services_theme_service__["a" /* ThemeService */],
                __WEBPACK_IMPORTED_MODULE_35__services_layout_service__["a" /* LayoutService */],
                __WEBPACK_IMPORTED_MODULE_36__services_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_37__services_route_parts_service__["a" /* RoutePartsService */],
                __WEBPACK_IMPORTED_MODULE_38__services_auth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_39__services_auth_admin_auth_guard__["a" /* AdminAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_40__filter_service__["a" /* FilterService */],
                __WEBPACK_IMPORTED_MODULE_41__services_featured_service__["a" /* FeaturedService */],
                __WEBPACK_IMPORTED_MODULE_42__services_admin_artists_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_43__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_44__services_admin_users_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_45__services_admin_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_46__services_admin_playlist_service__["a" /* PlaylistService */],
                __WEBPACK_IMPORTED_MODULE_47__services_admin_songs_service__["a" /* SongsService */],
                __WEBPACK_IMPORTED_MODULE_48__services_admin_about_service__["a" /* AboutService */],
                __WEBPACK_IMPORTED_MODULE_49__services_admin_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_50__services_admin_placement_service__["a" /* PlacementService */],
                __WEBPACK_IMPORTED_MODULE_51__services_location_service__["a" /* LocationService */]
            ],
            declarations: classesToInclude,
            exports: classesToInclude,
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__components_songitem_songitempopup_songitempopup_component__["a" /* SongItemPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_songitem_songcreditpopup_songcreditpopup_component__["a" /* SongCreditPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_26__views_admin_playlist_playlistpopup_playlist_table_popup_component__["a" /* PlaylistTablePopupComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\r\n  <form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n    \r\n    <div fxFlex=\"100\"  class=\"pr-1\">\r\n      <img [src]=\"avatar_url || '/assets/images/avatar.png'\" class=\"artist-thumb\" id='avatar_img'>\r\n      <input type=\"file\" class=\"avatar-input\" id=\"avatar-input\" accept=\"image/*\" (change)=\"onFileChange($event)\">\r\n      <button mat-mini-fab color=\"warn\" type=\"button\" class=\"mr-1 change-avatar-btn\" (click)=\"clickChangeAvatar()\"><mat-icon>create</mat-icon></button>\r\n      <button mat-raised-button color=\"warn\" type='button' class=\"mr-1\" *ngIf=\"is_changed_avatar\" (click)=\"upload()\">UPLOAD</button>\r\n    </div>\r\n    \r\n    <div fxFlex=\"50\"  class=\"pr-1\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input\r\n        matInput\r\n        name=\"playlist_title\"\r\n        [formControl]=\"itemForm.controls['playlist_title']\"\r\n        placeholder=\"Playlist Title\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <mat-form-field fxFlex=\"100\">\r\n      <textarea matInput placeholder=\"Note\" [formControl]=\"itemForm.controls['playlist_note']\" ></textarea>\r\n    </mat-form-field>\r\n\r\n    <div fxFlex=\"50\"  class=\"pt-1 pr-1\">\r\n      <mat-slide-toggle [formControl]=\"itemForm.controls['playlist_status']\">Playlist Status</mat-slide-toggle>\r\n    </div>\r\n\r\n    <div fxFlex=\"100\" class=\"mt-1\">\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\r\n      <span fxFlex></span>\r\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\r\n    </div>\r\n  </div>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".artist-thumb {\n  width: 100px;\n  height: 100px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px;\n          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px;\n  border-radius: 50%; }\n\n.avatar-input {\n  display: none; }\n\n.change-avatar-btn {\n  margin: 0 -45px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistTablePopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_users_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PlaylistTablePopupComponent = (function () {
    function PlaylistTablePopupComponent(data, dialogRef, fb, userService, playlistService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.userService = userService;
        this.playlistService = playlistService;
        this.is_changed_avatar = false;
        this.avatar_url = '';
    }
    PlaylistTablePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
    };
    PlaylistTablePopupComponent.prototype.buildItemForm = function (item) {
        this.avatar_url = item.playlist_thumb;
        this.itemForm = this.fb.group({
            playlist_title: [item.playlist_title || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            playlist_note: [item.playlist_note || '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            playlist_status: [item.playlist_status == 0 ? false : true],
            playlist_thumb: [item.playlist_thumb]
        });
    };
    PlaylistTablePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    PlaylistTablePopupComponent.prototype.clickChangeAvatar = function () {
        document.getElementById('avatar-input').click();
    };
    PlaylistTablePopupComponent.prototype.onFileChange = function (event) {
        this.is_changed_avatar = true;
        event.preventDefault();
        if (event.target.files.length > 0) {
            this.file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var avatarImage = document.getElementById('avatar_img');
                avatarImage.src = e.target.result;
            };
            reader.readAsDataURL(this.file);
        }
    };
    PlaylistTablePopupComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('playlist_thumb', this.file);
        this.playlistService.uploadPlaylistThumb(formData).subscribe(function (res) {
            _this.is_changed_avatar = false;
            // this.itemForm.value.playlist_thumb = res.url;
            _this.itemForm.controls['playlist_thumb'].setValue(res.url);
        }, function (err) {
            console.log(err);
        });
    };
    PlaylistTablePopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist-table-popup',
            template: __webpack_require__("../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/admin/playlist/playlistpopup/playlist-table-popup.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_playlist_service__["a" /* PlaylistService */]])
    ], PlaylistTablePopupComponent);
    return PlaylistTablePopupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost/',
    siteURL: 'http://localhost/',
    // apiURL: 'http://synchaudio-env.eba-m43ng3ph.us-west-1.elasticbeanstalk.com/index.php/',
    // siteURL:'http://synchaudio-env.eba-m43ng3ph.us-west-1.elasticbeanstalk.com/index.php/',
    accessKeyId: 'AKIAILWKIV5YGWY6OXAA',
    secretAccessKey: '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',
    region: 'us-east-2'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_pace_pace_min_js__ = __webpack_require__("../../../../../src/vendor/pace/pace.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_pace_pace_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_pace_pace_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_hammerjs_hammer_js__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_hammerjs_hammer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_hammerjs_hammer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
// Third party JS imports
// Page loader

// // User tour
// import '../node_modules/hopscotch/dist/js/hopscotch.min.js';
// // Charts
// import './vendor/Chart.min.js';
// // Rich Text Editor
// import '../node_modules/quill/dist/quill.min.js';





if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/vendor/pace/pace.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! pace 0.5.3 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W=[].slice,X={}.hasOwnProperty,Y=function(a,b){function c(){this.constructor=a}for(var d in b)X.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Z=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?W.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?W.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)X.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),T=["ajax","document","eventLag","elements"],P=0,R=T.length;R>P;P++)J=T[P],C[J]===!0&&(C[J]=t[J]);i=function(a){function b(){return U=b.__super__.constructor.apply(this,arguments)}return Y(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),O=window.XMLHttpRequest,N=window.XDomainRequest,M=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},I=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Z.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return I(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new O(b),a(c),c},v(window.XMLHttpRequest,O),null!=N&&(window.XDomainRequest=function(){var b;return b=new N,a(b),b},v(window.XDomainRequest,N)),null!=M&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=null!=b?new M(a,b):new M(a),I("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,M))}return Y(b,a),b}(h),Q=null,x=function(){return null==Q&&(Q=new j),Q},H=function(a){var b,c,d,e;for(e=C.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},x().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,H(g)?void 0:Pace.running||C.restartOnRequestAfter===!1&&"force"!==I(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(J=i[c],J instanceof a){J.watch.apply(J,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,H(e)?void 0:(c="socket"===d?new m(b):new n(b),this.elements.push(c))},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),K=null,G=null,q=null,L=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(S=window.history.pushState,window.history.pushState=function(){return y(),S.apply(window.history,arguments)}),null!=window.history.replaceState&&(V=window.history.replaceState,window.history.replaceState=function(){return y(),V.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=K=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&K.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)J=i[d],K.push(new J(C));return Pace.bar=q=new b,G=[],L=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){var a;return Pace.running=!0,q.render(),a=B(),r=!1,o=F(function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(k=100-q.progress,e=o=0,f=!0,i=p=0,t=K.length;t>p;i=++p)for(J=K[i],n=null!=G[i]?G[i]:G[i]=[],h=null!=(v=J.elements)?v:[J],j=s=0,u=h.length;u>s;j=++s)g=h[j],m=null!=n[j]?n[j]:n[j]=new l(g),f&=m.done,m.done||(e++,o+=m.tick(b));return d=o/e,q.update(L.tick(b,d)),q.done()||f||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(B()-a),0)))):c()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Pace}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map